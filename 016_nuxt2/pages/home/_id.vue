<template>
    <div>
        home 详情页     
    </div>
</template>
<script>
export default {
    


    data(){
        return {

        }
    },

    // props 可以是数组或对象，用于接收来自父组件的数据
    props:[],

    // Vue 实例将会在实例化时调用 watch()，遍历 watch 对象的每一个 property。
    watch:{},

    // 计算属性
    computed:{},

    // 方法;
    methods:{},

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
<style lang="scss" scoped>
</style>