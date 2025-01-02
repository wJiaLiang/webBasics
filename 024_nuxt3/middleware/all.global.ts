export default defineNuxtRouteMiddleware((to,from)=>{
    if(process&&process.client){
        console.log("中间件",to,from)
    }
})