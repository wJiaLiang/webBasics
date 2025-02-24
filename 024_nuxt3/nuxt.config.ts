// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // compatibilityDate 是 Nuxt 的一个配置选项,用于指定 Nuxt 版本的兼容性日期
  // 它可以帮助我们在升级 Nuxt 版本时保持向后兼容性
  // 当设置为 '2024-11-01' 时,表示使用该日期对应的 Nuxt 功能特性
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  // 全局样式引入
  css: [
    "~/assets/css/base.css",
  ],
  //引入 ant ui;
  modules: [
    '@ant-design-vue/nuxt',
  ],
  antd: {
    extractStyle: true
  },
  plugins: [

  ],

  runtimeConfig: {
    isServer: false,
    isClient: true,
    public: {
      // 在 runtimeConfig.public 中定义的配置可以在客户端和服务端都能访问
      baseURL: process.env.NUXT_PUBLIC_API_BASE,
      hostbaseURL: process.env.NUXT_PUBLIC_API_BASE_A,
    }
  },
  app: {
    baseURL: '/',
    head: {
      title: "后台管理系统",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    }
  },
  // 服务器配置
  devServer: {
    port: 3001,  // 设置为你需要的端口
    host: '0.0.0.0',  // 可以设置为 '0.0.0.0' 以允许外部访问
  },
  // vite配置（无法在ssr的情况下工作）
  vite: {
    server: {
      proxy: {
        '/dev-api/': {
          target: 'https://diandan.sou96.com/prod-api',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, ''),
        }
      }
    }
  },
  // nitro(ssr可以工作但是客户端无法工作，只适合开发环境） nitro 没有重写路径
  nitro: {
    devProxy: {
      '/prod-api/': {
        target: 'https://diandan.sou96.com',
        changeOrigin: true,
        prependPath: true,
      },
    },
    // routeRules(ssr和客户端都可用) ** 表是匹配所有
    // routeRules: {
    //   '/api/**': {
    //     proxy:'https://diandan.sou96.com/prod-api', // 代理后台接口请求
    //     ssr:true,
    //   }
    // }
  },




})