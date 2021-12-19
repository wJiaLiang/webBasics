<template>
<div class="warpbox">
    <div class="rightConte">
        npm install axios 
        <div>
            在Vue中不用每个模块都引用 axios,可以作为插件使用   
        </div>
        
    </div>
</div>

</template>
<script>
//  安装      npm install axios vue-axios --save;
//  作为插件  Vue.use(VueAxios,Axios);
//  在组件中使用  this.$http[method]

export default {
    name:'',
    data(){
        return{

        }
    },
    created(){
        this.$http.get('https://www.easy-mock.com/mock/5c7563d05f2ea71602660264/weitest/frist')
        .then(response=>{
            console.log('结果:',response);
        })
        .catch(error=>{
            console.log('错误:',error);
        })

    }
}
</script>
<style lang="less" scoped>

</style>

