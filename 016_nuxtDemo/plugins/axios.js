export default ({$axios,route,redirect})=>{
    // 基本的设置
    $axios.defaults.timeout = 180000;

    // 请求拦截
    $axios.onRequest(config=>{
        console.log('拦截请求')
        config.headers.token = "token"

    })

    // 响应拦截
    $axios.onResponse(res=>{
        // console.log('响应拦截',res);
        if(res.status == 404 && route.fullPath !="/"){
            redirect('/index')
        }
        return res.data;

    })

    // 错误处理
    $axios.onError(error=>{
        // 
        return error
    })


}