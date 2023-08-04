export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "016_nuxtDemo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["ant-design-vue/dist/antd.css","assets/css/base.css",],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["@/plugins/antd-ui",{src:"@/plugins/router",ssr:false},"@/plugins/axios"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"  
    // @nuxtjs/proxy 在 @nuxtjs/axios 老版本中已经集成，新版中已经剥离，要单独安装
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy:true,   // 开启axios 跨域
  },
  // 配置代理地址
  proxy:{
    '/api/':{
      target: 'https://api.pingping6.com/',   // 代理请求转发的地址
      pathRewrite: {'^/api/': ''}
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    

  },

  /*
    类似一个全局的 路由 守卫，只要路由一跳转 都要经过这个 router
    执行 middleware 文件夹中的  auth.js 文件
  */
  router:{
      middleware:'auth',
      // 扩展路由 /index 指向 / 路由,
      extendRoutes(routes,resolve){
        console.log(routes);
        routes.push({
          name:'root',
          path:'/index',
          component:resolve(__dirname,'pages/index.vue')
        })
      }
  },

  // 定义默认的头部进度条  或者指定一个组件
  loading:{color:'#000',height:'5px'}
  // loading:'~/components/loading.vue'



};
