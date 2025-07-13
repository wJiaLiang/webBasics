<template>
  <div class="deep3-container">
    <!-- 左侧区域 - 输入框和提交按钮 -->
    <div class="left-panel">
      <div class="export-btn-container">
        <el-button type="primary" @click="exportPDF">导出PDF</el-button>
      </div>
      <div class="input-container">
        <el-input
          type="textarea"
          v-model="inputText"
          placeholder="请输入内容"
          :rows="10"
          class="input-area"
        ></el-input>
        <el-button type="primary" @click="submitText" class="submit-btn" :loading="isLoading">
          {{ isLoading ? '处理中...' : '提交' }}
        </el-button>
      </div>
    </div>

    <!-- 右侧区域 - 富文本编辑器 -->
    <div class="right-panel">
      <div class="editor-container">
        <!-- wangEditor组件 -->
        <div style="border: 1px solid #ccc;">
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode"
          />
          <Editor
            style="height: 500px; overflow-y: hidden;"
            v-model="html"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
            @onChange="onChange"
            @onDestroyed="onDestroyed"
            @onFocus="onFocus"
            @onBlur="onBlur"
          />
        </div>
        
        <!-- 加载状态指示器 -->
        <div v-if="isLoading" class="loading-overlay">
          <div class="loading-spinner">
            <i class="el-icon-loading"></i>
            <p>正在生成内容...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 使用wangEditor Vue组件方式
 * 已安装 @wangeditor/editor 和 @wangeditor/editor-for-vue
 */

// 引入wangEditor Vue组件
import Vue from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';

// 引入OpenAI和Markdown-it相关依赖
import OpenAI from 'openai';
import MarkdownIt from 'markdown-it';

// 使用 CommonJS 方式导入插件（这些包使用CommonJS导出）
const emoji = require('markdown-it-emoji');
const taskLists = require('markdown-it-task-lists');
const highlightjs = require('markdown-it-highlightjs');
const anchor = require('markdown-it-anchor');

export default Vue.extend({
  name: 'Deep3',
  components: { Editor, Toolbar },
  data() {
    return {
      inputText: '',
      editor: null,
      html: '<p>初始内容</p>',
      toolbarConfig: {
        excludeKeys: []
      },
      editorConfig: {
        placeholder: '请输入内容...',
        scroll: true,
        maxLength: 100000,
        readOnly: false,
        autoFocus: false,
        MENU_CONF: {
          uploadImage: {
            server: '/api/upload',
            fieldName: 'file',
            maxFileSize: 10 * 1024 * 1024,
            maxNumberOfFiles: 10,
            allowedFileTypes: ['image/*'],
            metaWithUrl: true,
            withCredentials: false,
            timeout: 10 * 1000
          }
        }
      },
      mode: 'default', // 编辑器模式
      isStreaming: false,
      streamContent: '',
      streamInterval: null,
      openai: null,
      md: null,
      messages: [],
      isLoading: false,
      isDestroyed: false // 组件销毁标志
    }
  },
  created() {
    // 初始化 MarkdownIt 并加载插件
    this.md = new MarkdownIt({
      html: true,
      breaks: true,
      linkify: true
    });
    
    // 应用所有插件
    if (typeof emoji === 'function') {
      this.md.use(emoji);
    }
    
    if (typeof taskLists === 'function') {
      this.md.use(taskLists);
    }
    
    if (typeof highlightjs === 'function') {
      this.md.use(highlightjs);
    }
    
    if (typeof anchor === 'function') {
      this.md.use(anchor);
    }

    // 初始化 OpenAI 客户端
    this.openai = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: 'sk-e71f88b476064926929466c7db6576d3', // 注意：实际项目中应从环境变量或配置文件中获取
      dangerouslyAllowBrowser: true
    });
  },
  
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = '<p>编辑器已准备就绪</p>'
    }, 500)
  },
  beforeDestroy() {
    // 设置组件销毁标志
    this.isDestroyed = true;
    
    // 组件销毁时，及时销毁编辑器
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy();
    
    // 清除资源引用
    this.openai = null;
    this.md = null;
    this.messages = [];
    
    // 清除所有可能的异步操作
    if (this.streamInterval) {
      clearInterval(this.streamInterval);
      this.streamInterval = null;
    }
  },
  methods: {
    /**
     * 编辑器创建完成回调
     * @param {Object} editor - 编辑器实例
     */
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
      console.log('编辑器创建完成', editor);
    },

    /**
     * 编辑器内容变化回调
     * @param {Object} editor - 编辑器实例
     */
    onChange(editor) {
      console.log('编辑器内容变化', editor.children);
    },

    /**
     * 编辑器销毁回调
     * @param {Object} editor - 编辑器实例
     */
    onDestroyed(editor) {
      console.log('编辑器已销毁', editor);
    },

    /**
     * 编辑器获得焦点回调
     * @param {Object} editor - 编辑器实例
     */
    onFocus(editor) {
      console.log('编辑器获得焦点', editor);
    },

    /**
     * 编辑器失去焦点回调
     * @param {Object} editor - 编辑器实例
     */
    onBlur(editor) {
      console.log('编辑器失去焦点', editor);
    },

    /**
     * 渲染 markdown-it 文本
     * @param {String} text - Markdown格式的文本
     * @returns {String} - 渲染后的HTML
     */
    renderMarkdown(text) {
      // 如果组件已销毁、md实例不存在或文本为空，则返回原文本或空字符串
      if (this.isDestroyed || !this.md) {
        return text || '';
      }
      
      // 确保文本是字符串类型
      const safeText = typeof text === 'string' ? text : String(text || '');
      
      try {
        return this.md.render(safeText);
      } catch (error) {
        console.error('Markdown渲染错误:', error);
        return safeText;
      }
    },

    /**
     * 提交文本，调用deepseek API获取流式响应
     */
    async submitText() {
      // 如果组件已销毁，则不执行
      if (this.isDestroyed) {
        return;
      }
      
      if (!this.inputText.trim() || this.isLoading) {
        // 检查组件是否已销毁
        if (!this.isDestroyed) {
          this.$message.warning('请输入内容');
        }
        return;
      }

      const userMessage = this.inputText.trim();
      
      // 检查组件是否已销毁
      if (this.isDestroyed) {
        return;
      }
      
      this.isLoading = true;
      
      // 保存用户消息到历史记录
      this.messages.push({
        role: 'user',
        content: userMessage
      });
      
      // 重置编辑器内容
      if (this.editor) {
        try {
          // 再次检查组件是否已销毁
          if (this.isDestroyed) {
            return;
          }
          
          this.html = ''; // 使用v-model方式更新内容
          this.streamContent = '';
          this.isStreaming = true;
        } catch (error) {
          console.error('重置编辑器内容失败:', error);
          
          // 检查组件是否已销毁
          if (this.isDestroyed) {
            return;
          }
          
          this.$message.error('编辑器操作失败，请刷新页面重试');
          this.isLoading = false;
          return;
        }
      } else {
        // 检查组件是否已销毁
        if (this.isDestroyed) {
          return;
        }
        
        this.$message.error('编辑器未初始化，请刷新页面重试');
        this.isLoading = false;
        return;
      }
      
      // 保存this引用，避免在异步回调中使用this
      const vm = this;
      
      // 创建一个标志，表示当前请求是否已被取消
      let isCancelled = false;
      
      // 在组件销毁时设置取消标志
      const checkDestroyed = () => {
        return vm.isDestroyed || isCancelled;
      };
      
      try {
        // 再次检查组件是否已销毁
        if (checkDestroyed()) {
          return;
        }
        
        // 调用deepseek API获取流式响应
        const stream = await this.openai.chat.completions.create({
          model: 'deepseek-chat',
          messages: this.messages,
          stream: true,
        });
        
        let result = '';
        
        // 处理流式响应
        for await (const chunk of stream) {
          // 检查组件是否已销毁或请求已取消
          if (checkDestroyed()) {
            // 尝试关闭流
            try {
              if (stream && typeof stream.cancel === 'function') {
                stream.cancel();
              }
            } catch (e) {
              console.error('取消流失败:', e);
            }
            break;
          }
          
          const content = chunk.choices[0]?.delta?.content || '';
          result += content;
          
          // 更新流内容
          if (!checkDestroyed()) {
            vm.streamContent = result;
          }
          
          // 将Markdown转换为HTML并更新编辑器
          if (!checkDestroyed() && vm.editor) {
            try {
              const html = vm.renderMarkdown(result);
              
              // 再次检查组件是否已销毁
              if (!checkDestroyed()) {
                vm.html = html; // 使用v-model方式更新内容
              }
            } catch (error) {
              console.error('更新编辑器内容失败:', error);
            }
          }
        }
        
        // 检查组件是否已销毁
        if (!checkDestroyed()) {
          // 保存AI响应到历史记录
          vm.messages.push({
            role: 'assistant',
            content: result
          });
        }
        
      } catch (error) {
        console.error('调用deepseek API出错:', error);
        
        // 检查组件是否已销毁
        if (!checkDestroyed()) {
          vm.$message.error('调用API失败，请稍后重试');
          
          // 在编辑器中显示错误信息
          if (!checkDestroyed() && vm.editorInitialized && vm.editor) {
            try {
              const errorMessage = '抱歉，发生了错误，请稍后重试。';
              vm.editor.setHtml(`<p style="color: red;">${errorMessage}</p>`);
            } catch (error) {
              console.error('显示错误信息失败:', error);
            }
          }
        }
      } finally {
        // 检查组件是否已销毁
        if (!checkDestroyed()) {
          vm.isLoading = false;
          vm.isStreaming = false;
          vm.inputText = '';
        }
        
        // 标记请求已完成
        isCancelled = true;
      }
    },

    /**
     * 导出PDF功能
     */
    exportPDF() {
      // 如果组件已销毁，则不执行
      if (this.isDestroyed) {
        return;
      }
      
      // 检查编辑器是否已初始化
      if (!this.editor) {
        this.$message.warning('编辑器未初始化，无法导出PDF');
        return;
      }
      
      // 检查html2pdf是否可用
      if (!window.html2pdf) {
        this.$message.error('PDF导出功能未加载，请刷新页面重试');
        return;
      }
      
      try {
        // 获取编辑器内容
        const content = this.html;
        
        if (!content || content.trim() === '' || content === '<p><br></p>') {
          this.$message.warning('编辑器内容为空，无法导出PDF');
          return;
        }
        
        // 创建临时容器
        const element = document.createElement('div');
        element.innerHTML = content;
        element.style.padding = '20px';
        element.style.fontFamily = 'Arial, sans-serif';
        element.style.lineHeight = '1.6';
        element.style.color = '#333';
        
        // PDF配置选项
        const opt = {
          margin: 1,
          filename: `deepseek-content-${new Date().getTime()}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        
        // 生成PDF
        window.html2pdf().set(opt).from(element).save().then(() => {
          // 检查组件是否已销毁
          if (!this.isDestroyed) {
            this.$message.success('PDF导出成功');
          }
        }).catch((error) => {
          console.error('PDF导出失败:', error);
          // 检查组件是否已销毁
          if (!this.isDestroyed) {
            this.$message.error('PDF导出失败，请重试');
          }
        });
        
      } catch (error) {
        console.error('PDF导出过程中发生错误:', error);
        // 检查组件是否已销毁
        if (!this.isDestroyed) {
          this.$message.error('PDF导出失败，请重试');
        }
      }
    }
  }
})
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>

<style lang="scss" scoped>
.deep3-container {
  display: flex;
  width: 100%;
  height: 80vh;
  overflow: hidden;
}

.left-panel {
  width: 30vw;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dcdfe6;
  padding: 20px;
  box-sizing: border-box;
}

.export-btn-container {
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.input-area {
  flex: 1;
  margin-bottom: 15px;
}

.submit-btn {
  align-self: flex-end;
}

.right-panel {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.editor-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
}

.toolbar-container {
  border-radius: 4px 4px 0 0;
  position: relative;
  z-index: 1;
}

.editor-content {
  flex: 1;
  border-radius: 0 0 4px 4px;
  position: relative;
}

/* 编辑器相关样式 */
::v-deep .w-e-text-container {
  height: calc(100% - 40px) !important;
}

::v-deep .w-e-toolbar {
  border: 1px solid #dcdfe6 !important;
  border-bottom: none !important;
  background-color: #f5f7fa !important;
}

::v-deep .w-e-text-container {
  border: 1px solid #dcdfe6 !important;
}

::v-deep .w-e-text {
  padding: 10px 15px !important;
  overflow-y: auto !important;
}

::v-deep .w-e-text-placeholder {
  font-style: italic;
  color: #aaa;
}

::v-deep .w-e-panel-content {
  z-index: 10001 !important;
}

::v-deep .w-e-menu {
  padding: 4px 6px !important;
}

::v-deep .w-e-bar-item {
  padding: 4px !important;
}

::v-deep .w-e-bar-divider {
  margin: 0 5px !important;
}

/* 加载状态指示器样式 */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.loading-spinner {
  text-align: center;
  padding: 20px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.loading-spinner i {
  font-size: 32px;
  color: #409EFF;
  margin-bottom: 10px;
}

.loading-spinner p {
  margin: 0;
  color: #606266;
}
</style>