<template>
    <div>
        <div class="clearfix"> 
            <div class="fl">
                <input class="inputs" :value="title"  type="search"  placeholder="请选择" @click="showListHandle">
            </div>
            <div class="fl">
                <button class="fs25">go</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'',
    props:['isShow','title'],  // 子组件中接收 父组件中传递过来的自定义属性;
    data () {
        return {}
    },
     computed: {
         initshow(){
            return this.isShow
         }
     },
    watch:{},

    components: {},

   

    mounted() {},

    methods: {
        showListHandle(){
            //  提交 $emit 改变父组件中的值
            this.$emit('update:isShow',!this.initshow)
        }
    },

    created() {}


}

</script>
<style lang='less' scoped>
.inputs{border: 1px solid blueviolet;line-height: 36px;}
button{line-height: 36px;padding-left: 15px;padding-right: 15px;cursor: pointer;}
</style>