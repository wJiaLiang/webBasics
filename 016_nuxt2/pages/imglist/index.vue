<template>
    <div class="tc">
        <p class="fs16 cr_blue"> 浏览器端加载 字谜 </p>
        <div class="tc" style="border:4px solid pink;width:400px;height:500px">
           {{list}}
        </div>
    </div>
</template>

<script>
export default {
    loading:true,

    data(){
        return{
            list:'',
        }
    },
    beforeMount () {
        this.$axios({
            method:'get',
            url:`/api/tools/zimi/?question=斗转星移一载安`,
        }).then(res=>{
           this.list = res.best;
        })
    }

}
</script>

<style lang="scss" scoped>

</style>