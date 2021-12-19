export default ({app,redirect,params,query,store})=>{
    /**
     * app  ===  vue 实例,
     * next(true) 或者 next(false), 调转到指定的页面 要用 redirect
     * 
     * 可以通过nuxt.config.js中 plugins: [,{src:"@/plugins/router",ssr:false}],
     * 来配置 是否服务端和客户端都执行，默认都执行
     * 
     * */
    app.router.beforeEach((to, from, next) => {
       console.log('router 插件 全局前置钩子',to)
    //    if(to.name == 'home' || to.name == "index"){
    //        next()
    //    }else{
    //        redirect({name:'list'})
    //    }
    next()
    }),

    // 后置守卫
    app.router.afterEach( (to,form) => {
        console.log('插件全局后置守卫')
        
    })

}