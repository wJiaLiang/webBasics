<template>
    <div class="warpbox">
        <div class="rightConte">  

        </div>
    </div>
</template>
<script>
import axios from 'axios'
import queryString from 'queryString'


var HTTP = axios.create({
    baseURL:' https://www.easy-mock.com/mock/5c7563d05f2ea71602660264/weitest',
    timeout:2000,
    responseType:'json',
    params:{book:'123'},   // 查询字符串;无论get还是post都会在 url跟在后面
    // 发送之前数据的处理  只是对put post patch 有用; 一定要有返回值
    transformRequest:[function(data){
        console.log('发送之前的数据')
        console.log(data);
        return queryString.stringify(data);   // abc=123&token:abc1234567;会被转换成这种形式; 如果不return 将不作为发送数据
    }],
    //  返回回来后可以统一处理
    transformResponse:[function(data){
        console.log('transformRseponse');
        return data;  // 如果不return 外面拿不到请求的数据结果;
    }],
    // 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
    // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus(status){
        console.log(status);
        // 如果 返回true 即使错误也会走 then函数;表示成功;
        if(status<=500){
            return true
        }
        
    },
    headers:{
        'custom-header':'wei',   // 自定义的请求头;
        'content-type':'application/x-www-form-urlencoded'   // 自动转换数据格式
    }

})


export default {
    name:'custom',
    data(){
        return {

        }
    },
    methods:{

    },
    created(){
        // HTTP.get('/get_axios')
        // .then(resPonse=>{
        //     console.log(resPonse.data);
        // })
        // .catch(Error=>{
        //     console.log(Error);
        // })


        HTTP.post('/post_axios',{abc:123,token:'abc1234567'})
        .then(response=>{
            console.log(response.data)
        })
        .catch(Error=>{
            console.log(Error)
        })

    }
}


/** 
 * 创建
 * axios.create(config);
 * 配置:
 * {
 *    baseURl:'',
 *    timeout:1000,
 *    responseType:'json',
 *    params:{},
 *    transfromRequest:[]    只适合PUT。post 和 PATCH；
 *    transfromResponse:[]
 *    validateStatus:function(params) {}
 *    cancelToken
 * }
 * 
 * 创建取消请求令牌;
 * var CancelToken = axios.CancelToken;
 * var source = CancelToken.source();
 * 
 * 配置:  cancelToken:source.token;
 * 捕获取消错误：
 * if(axios.isCancel(error)){
 *      console.log(error.message);
 * }
 * 调用取消：
 * source.cancel('操作被取消');
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * */ 




</script>
<style lang="less" scoped>

</style>

