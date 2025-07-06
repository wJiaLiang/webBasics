<template>
  <div>
    <section class="" style="padding:10px">
      <h1>Hello, World!</h1>
    </section>
    <section>
      <a-button type="primary" @click="initDeepseek"> 初始化openAi </a-button>
    </section>
    <div class="" style="padding:20px" v-html="chartDate">
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted ,watchEffect} from 'vue'
import OpenAi from "openai"
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

let chartDate = ref();
const renderedContent = ref('')

// 监听 chartDate 的变化，实时渲染 Markdown
watchEffect(() => {
  renderedContent.value = md.render(chartDate.value || '')
})

let initDeepseek = async () => {
  console.log('initDeepseek')
  let openai = new OpenAi({
    baseURL: 'https://api.deepseek.com',
    apiKey: 'sk-e71f88b476064926929466c7db6576d3',
    dangerouslyAllowBrowser:true,//允许浏览器访问,默认不允许浏览器环境方法;

  });
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "你好，你是什么模型" }],
    model: "deepseek-chat",
  });
  console.log(completion.choices[0].message.content);
  chartDate.value = completion.choices[0].message.content;


}
onMounted(() => {
  console.log('mounted')

});


</script>>

<style lang="scss" scoped></style>