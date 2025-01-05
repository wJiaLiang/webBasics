// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

   // 全局样式引入
  css:[
    "~/assets/css/base.css",
  ],
  modules: [
    '@ant-design-vue/nuxt'
  ],
  antd:{
    extractStyle: true
  },

  runtimeConfig:{
    isServer:true,
  }

  
})