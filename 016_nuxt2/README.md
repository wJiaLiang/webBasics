# 016_nuxtDemo

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

=============================================================================================

### 生命周期
    nuxtServerinit  在 stroe 中 actions 里 执行
        针对的是 stroe 中要初始化的数据

    middleware  中间件执行过程
        nuxt.config.js --->  layouts(布局) ----> 匹配的页面


### 路由守卫
    前置守卫：
        依赖中间件 middleware  插件

        全局守卫 nuxt.config.js 指向的 middleware
                layouts 定义中间件的 middleware

        组件独享守卫： 某个组件中的  middleware

        插件全局守卫：plugins 中定义  app.router.beforeEach

    后置守卫：
        使用vue 的 beforeRouteLeave 钩子 浏览器端执行
        插件全局后置守卫 app.router.afterEach

### 数据交互
    安装: @nuxtjs/axios  和  @nuxtjs/proxy
    在 nuxt.config.js modules 中配置进去


### vuex
    模块方式  store 目录下每个 .js 文件会被转换为状态树  index是根模块;
