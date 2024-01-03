<template>
    <div>
        <h2> {{obj}} </h2>
        <h2> {{state}} </h2>
        <h3> {{page}} </h3>
        <button class="mt20" @click="myFn">按钮</button>
        <div ref="box"> 我是div </div>

    </div>
</template>

<script>

import {ref,toRaw,reactive,markRaw,onMounted} from 'vue'

export default {
    name:"toRaw",
    data(){
        return {

        }
    },
    setup(){
        let page = {name:'test',age:99}; // markRaw 标记一个对象，使其永远不会转换为代理。返回对象本身。
        page = markRaw(page)


        let obj = {name:'lnj',age:18}
        let state = reactive(obj); 
        let state2 = ref(obj);      // 如果是ref 创建的数据 要获取原始数据 要 使用value    toRaw(state.value)
        console.log(obj === state)  // false 
        let obj2 = toRaw(state);    // 拿到 obj，包装之前的原始数据   （返回 reactive 或 readonly 代理的原始对象）

        console.log(obj === obj2)   // true

        let box = ref(null)  // 获取元素
        onMounted(()=>{
            console.log(box.value); // <div data-v-98bb38fa=""> 我是div </div>

        })

        let myFn = ()=>{
            // obj.name = 'sz';
            // console.log(obj);

            state.name = 'sz1';
            console.log(state);

            page.name="ok";
            console.log(page)
            
        }



        return{
            obj,
            myFn,
            page,
            state,
            box
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
    beforeUnmount () {},

    // 实例销毁后调用
    unmounted () {},

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