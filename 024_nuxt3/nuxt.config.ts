// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate 是 Nuxt 的一个配置选项,用于指定 Nuxt 版本的兼容性日期
  // 它可以帮助我们在升级 Nuxt 版本时保持向后兼容性
  // 当设置为 '2024-11-01' 时,表示使用该日期对应的 Nuxt 功能特性
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

   // 全局样式引入
  css:[
    "~/assets/css/base.css",
  ],
  //引入 ant ui;
  modules: [
    '@ant-design-vue/nuxt'
  ],
  antd:{
    extractStyle: true
  },
  plugins:[
    
  ],

  runtimeConfig:{
    isServer:false,
    isClient:true,
    public:{
      // baseURL 用于配置 API 请求的基础路径
      // 在 runtimeConfig.public 中定义的配置可以在客户端和服务端都能访问
      // 如果设置为相对路径 '/api'，请求会基于当前域名拼接，如: http://localhost:3000/api/xxx
      // 如果设置为绝对路径 'http://example.com/api'，则直接使用完整的URL进行请求
      // 绝对路径通常用于跨域请求或指定特定的API服务器
      baseURL:"/api",
    }
  },
  app:{
    baseURL:'/web-pc',
    head:{
      title:"后台管理系统",
      meta:[
        {name:"viewport",content:"width=device-width, initial-scale=1"}
      ]
    }
  },
  nitro: {
    devProxy: {
      // 将 /api 开头的请求代理到目标服务器
      '/api': {
        target: 'http://devhome.sou96.com', // 目标服务器地址
        changeOrigin: true, // 是否改变请求源
        secure: false, // 如果是 HTTPS，需要设置为 false
      },
    },
  },
  

  
})