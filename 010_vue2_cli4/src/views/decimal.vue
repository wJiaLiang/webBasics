<template>
    <div>
        <div> decimal.js </div>
    </div>
</template>
<script>
import { Decimal } from 'decimal.js';

export default {
    name:"decimal",
    data(){
        return {}
    },
    // props 可以是数组或对象，用于接收来自父组件的数据
    props:[],
    // Vue 实例将会在实例化时调用 watch()，遍历 watch 对象的每一个 property。
    watch:{},
    // 计算属性
    computed:{},
    
    // 在实例创建完成后被立即调用。
    created () {
        this.init();
    },
    // 实例被挂载后调用
    mounted() {},
    // 方法;
    methods:{
        init(){
            /*
            plus  加
            minus 减
            times 乘
            dividedBy 除
            */ 
            let a = Decimal(0.1);
            console.log(a)
            let a1 = Decimal('0.2')
            console.log(a1)

            let sum = a.plus(a1)
            console.log(sum.toNumber())

            let sum1 = a.minus(a1)
            console.log(sum1.toNumber())

            let b = Decimal(1)
            let b1 = Decimal(2)
            console.log(b.dividedBy(b1).toNumber())

            let c = Decimal("599")
            console.log(c.toFixed())

           
        }
    },

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