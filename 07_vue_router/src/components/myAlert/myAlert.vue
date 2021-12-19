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

    // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
    beforeCreate () {},

    // 在实例创建完成后被立即调用。
    created () {},

    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount () {},

    // 实例被挂载后调用
    mounted() {},

    // 被 keep-alive 缓存的组件激活时调用。
    activated () {},

    //被 keep-alive 缓存的组件停用时调用。
    deactivated () {},

    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy () {},

    // 实例销毁后调用
    destroyed () {},

    // 组件
    components:{},

    // 过滤器
    filters: {},

    // 自定义指令
    directives:{},

    //mixins 选项接收一个混入对象的数组
    mixins:[],
    // 进入这个路由时调用
    beforeRouteEnter(to,from,next){
        window.document.body.style.backgroundColor=""
        window.document.title="title"
        next()
    },

    // 离开这个路由时调用
    beforeRouteLeave(to,from,next){
        window.document.body.style.backgroundColor=""
        window.document.title="title"
        next()
    }
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