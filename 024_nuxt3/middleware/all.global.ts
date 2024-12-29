export default defineNuxtRouteMiddleware((to,from)=>{
    console.log("中间件",to,from)
})