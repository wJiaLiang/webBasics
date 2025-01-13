export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    // 应用创建时触发
    console.log('应用已创建')
  })

  nuxtApp.hook('page:start', () => {
    // 页面开始加载时触发
    console.log('页面开始加载')
  })

  nuxtApp.hook('page:finish', () => {
    // 页面加载完成时触发
    console.log('页面加载完成')
  })




})