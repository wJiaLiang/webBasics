<template>
  <div class="deepseek-chat">
    <div class="chat-container" ref="chatContainer">
      <div class="chat-messages" ref="messagesContainer">
        <div v-for="(message, index) in messages" :key="index" class="message" :class="message.role">
          <div class="message-content" v-html="message.rendered"></div>
        </div>
        <div v-if="isLoading" class="message assistant">
          <div class="message-content loading">
            <div class="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-input">
      <textarea 
        v-model="userInput" 
        @keyup.enter.ctrl="sendMessage"
        @input="adjustTextareaHeight"
        placeholder="输入您的问题，按 Ctrl + Enter 发送" 
        ref="textarea"
        rows="1"
      ></textarea>
      <button @click="sendMessage" :disabled="isLoading || !userInput.trim()">
        <span v-if="!isLoading">发送</span>
        <span v-else>发送中...</span>
      </button>
    </div>
  </div>
</template>
<script>

import OpenAI from 'openai';
import MarkdownIt from 'markdown-it';

// 使用 CommonJS 方式导入插件
const emoji = require('markdown-it-emoji');
const taskLists = require('markdown-it-task-lists');
const highlightjs = require('markdown-it-highlightjs');
const anchor = require('markdown-it-anchor');

export default {
  name: "deepseek2",
  data() {
    return {
      userInput: '',
      messages: [],
      isLoading: false,
      controller: null,
      lastMessageLength: 0,
      openai: null,
      md: null,
    };
  },
  created() {
    console.log('emoji', emoji);
    console.log('taskLists', taskLists);
    console.log('highlightjs', highlightjs);
    console.log('anchor', anchor);

    // 初始化 MarkdownIt 并加载插件
    this.md = new MarkdownIt({
      html: true,
      breaks: true,
      linkify: true
    });
    
    // 应用所有插件，处理不同类型的插件
    // 处理 emoji 插件（ES 模块）
    if (emoji && emoji.__esModule && emoji.default) {
      this.md.use(emoji.default);
    } else if (typeof emoji === 'function') {
      this.md.use(emoji);
    }
    
    // 处理 taskLists 插件（函数）
    if (typeof taskLists === 'function') {
      this.md.use(taskLists);
    }
    
    // 处理 highlightjs 插件（函数）
    if (typeof highlightjs === 'function') {
      this.md.use(highlightjs);
    }
    
    // 处理 anchor 插件（ES 模块）
    if (anchor && anchor.__esModule && anchor.default) {
      this.md.use(anchor.default);
    } else if (typeof anchor === 'function') {
      this.md.use(anchor);
    }

    // 初始化 OpenAI 客户端
    this.openai = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: 'sk-e71f88b476064926929466c7db6576d3',
      dangerouslyAllowBrowser: true
    });
  },
  methods: {
    // 渲染 markdown-it 文本
    renderMarkdown(text) {
      if (!this.md) return text || '';
      return this.md.render(text || '');
    },
    // 调整文本框高度
    adjustTextareaHeight() {
      this.$nextTick(() => {
        const textarea = this.$refs.textarea;
        if (textarea) {
          textarea.style.height = 'auto';
          textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
        }
      });
    },
    // 滚动到底部
    scrollToBottom() {
      if (this.$refs.chatContainer) {
        this.$refs.chatContainer.scrollTop = this.$refs.chatContainer.scrollHeight;
      }
    },
    // 发送消息到 DeepSeek API
    async sendMessage() {
      if (!this.userInput.trim() || this.isLoading) return;
      const userMessage = this.userInput.trim();
      this.messages.push({
        role: 'user',
        content: userMessage,
        rendered: this.renderMarkdown(userMessage)
      });
      this.isLoading = true;
      this.userInput = '';
      this.adjustTextareaHeight();
      this.scrollToBottom();
      // 添加一个空的 AI 响应消息
      this.messages.push({
        role: 'assistant',
        content: '',
        rendered: ''
      });
      try {
        const stream = await this.openai.chat.completions.create({
          model: 'deepseek-chat',
          messages: this.messages.map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          stream: true,
        });
        let result = '';
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content || '';
          result += content;
          // 更新最后一条消息的内容
          const lastMessage = this.messages[this.messages.length - 1];
          lastMessage.content = result;
          lastMessage.rendered = this.renderMarkdown(result);
        }
      } catch (error) {
        console.error('发送消息时出错:', error);
        // 更新最后一条消息为错误提示
        if (this.messages.length > 0) {
          const lastMessage = this.messages[this.messages.length - 1];
          const errorMessage = '抱歉，发生了错误，请稍后重试。';
          lastMessage.content = errorMessage;
          lastMessage.rendered = this.renderMarkdown(errorMessage);
        }
      } finally {
        this.isLoading = false;
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
    },
  },
  beforeDestroy() {
    if (this.controller) {
      this.controller.abort();
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$refs.textarea) {
        this.$refs.textarea.focus();
      }
    });
  },
  updated() {
    this.$nextTick(() => {
      this.scrollToBottom();
    });
  }
};
</script>
<style lang="scss" scoped>
.deepseek-chat {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .chat-container {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 8px;
    margin-bottom: 20px;
    scrollbar-width: thin;
    scrollbar-color: #007AFF #f5f5f5;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #007AFF;
      border-radius: 4px;
    }
  }
  .chat-messages {
    .message {
      margin-bottom: 20px;
      padding: 10px 15px;
      border-radius: 8px;
      max-width: 80%;
      opacity: 1;
      transition: opacity 0.3s ease;
      &.user {
        margin-left: auto;
        background-color: #007AFF;
        color: white;
        animation: slideInRight 0.3s ease;
        ::v-deep pre {
          background: rgba(0, 0, 0, 0.2);
          color: white;
        }
      }
      &.assistant {
        margin-right: auto;
        background-color: white;
        color: #333;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        animation: slideInLeft 0.3s ease;
        &.loading .loading-dots {
          display: flex;
          gap: 4px;
          padding: 8px;
          justify-content: center;
          span {
            width: 8px;
            height: 8px;
            background: #007AFF;
            border-radius: 50%;
            display: inline-block;
            animation: bounce 1.4s infinite ease-in-out both;
            &:nth-child(1) {
              animation-delay: -0.32s;
            }
            &:nth-child(2) {
              animation-delay: -0.16s;
            }
          }
        }
        ::v-deep {
          pre {
            background: #f8f9fa;
            padding: 12px;
            border-radius: 4px;
            overflow-x: auto;
            margin: 8px 0;
          }
          code {
            font-family: 'Courier New', Courier, monospace;
            background: #f8f9fa;
            padding: 2px 4px;
            border-radius: 3px;
            font-size: 0.9em;
          }
          p {
            margin: 8px 0;
            line-height: 1.5;
          }
          ul, ol {
            margin: 8px 0;
            padding-left: 20px;
          }
          blockquote {
            margin: 8px 0;
            padding-left: 12px;
            border-left: 4px solid #e9ecef;
            color: #666;
          }
        }
      }
    }
  }
  .chat-input {
    display: flex;
    gap: 10px;
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    textarea {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      resize: none;
      min-height: 24px;
      max-height: 200px;
      font-size: 14px;
      line-height: 1.5;
      transition: all 0.3s ease;
      &:focus {
        outline: none;
        border-color: #007AFF;
        box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.1);
      }
    }
    button {
      padding: 10px 20px;
      background-color: #007AFF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;
      min-width: 80px;
      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
      &:hover:not(:disabled) {
        background-color: #0056b3;
        transform: translateY(-1px);
      }
      &:active:not(:disabled) {
        transform: translateY(0);
      }
    }
  }
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .loading-dots {
      display: flex;
      gap: 4px;
      span {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #007AFF;
        animation: loading-dot 1s infinite alternate;
        &:nth-child(2) {
          animation-delay: 0.2s;
        }
        &:nth-child(3) {
          animation-delay: 0.4s;
        }
      }
    }
  }
  @keyframes loading-dot {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-4px);
    }
  }
  @keyframes bounce {
    0%, 80%, 100% { 
      transform: scale(0);
    }
    40% { 
      transform: scale(1);
    }
  }
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>