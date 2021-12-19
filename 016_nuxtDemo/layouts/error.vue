<template>

    <div class="fs20 tc mt30">
        <div>  没有找找到页面 </div>

        <div class="cr_red"> {{error}} </div>
        <div class="cr_green"> {{$route}} </div>


    </div>

</template>

<script>
export default {
    props: {
        /*
            { "statusCode": 404, "path": "/indexs", "message": "This page could not be found" }
            自定义的错误页面, 页面名称必须是 error.vue
        */ 
        "error":{
            value:"",
            default:Object,
        }
    },
    
}

</script>