
```js
export default defineNuxtPlugin((nuxtApp) => {
  console.log('redme插件',nuxtApp)

    /*
    插件的主要作用
    
    //1 注册全局组件
    nuxtApp.vueApp.component('MyGlobalComponent', {
        // 组件配置
    })

    //2 注册全局方法/工具函数
    utils.js

    //3 集成第三方库
    element-plus
    import { Button } from 'element-plus'
    nuxtApp.vueApp.component('Button', Button)

    //4 配置 API 请求拦截器 
      

        
    //5 全局守卫
        export default defineNuxtPlugin((nuxtApp) => {
        nuxtApp.hook('app:created', () => {
            // 应用创建时的处理逻辑
        })
        
        nuxtApp.hook('page:start', () => {
            // 页面切换开始时的处理逻辑
        })
        })



    */ 



})


```