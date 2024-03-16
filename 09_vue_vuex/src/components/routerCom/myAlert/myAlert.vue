<template>
    <div>
        <div class="mask">
            <div :style="style">
                <p> 信息弹窗组件 </p>
                <div>
                    内容。。。内容部分
                    <hr>
                    {{content}}
                </div>
                <p>
                    <button @click="handclose"> 取消 </button>
                    <button> 关闭 </button>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"myAlert",
    data(){
        return {
           
        }
    },

    // props 可以是数组或对象，用于接收来自父组件的数据
    props:{
         content:{
                type:String,
                required:true
            }
    },
   // 方法;
    methods:{
        handclose(e){
            e.preventDefault()
            this.$emit('close')
        }
    },
    // 计算属性
    computed:{ 
        style(){
            return{
                width:"500px",
                height:"260px",
                border:"1px solid green",
                backgroundColor:"pink",
                textAlign:"center",
                fontSize:"20px",
                position:"absolute",
                top:"60px",
                left:"200px"
            }
        }
    },

    // 在实例创建完成后被立即调用。
    created () {},

    // 实例被挂载后调用
    mounted() {},

}
</script>
<style lang="less" scoped>

.mask{
    width:100%;
    height: 100%;
    position: absolute;
    background: rgba(1,1, 1, .3);
    
}
</style>