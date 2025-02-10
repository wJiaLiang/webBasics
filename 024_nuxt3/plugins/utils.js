export default defineNuxtPlugin((nuxtApp) => {
//   console.log('vue实例',nuxtApp.vueApp)

    return {
        // 注入工具函数   全局方法
        provide: {
            // 格式化日期
            formatDate: (date) => {
                return new Date(date).toLocaleDateString('zh-CN')
            },
            // 手机号脱敏
            maskPhone: (phone) => {
                return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
            }
        }
    }

})