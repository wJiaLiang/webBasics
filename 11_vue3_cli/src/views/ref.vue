<template>
	<div>
		<header class="pb20 fs30"> ref 和 reactive </header>
        <p> {{state}} </p>
        <p> {{state2}} </p>
        <p>{{state3.name}}</p>
        <p> {{state4.a}} </p>
        <p> {{state4.gr}} </p>
        <p> {{state4.gr.b}} </p>
        <p> {{state4.gr.f.c}} </p>

        <p>
            <button type="button" @click="myFunc"> button </button>
        </p>

	</div>
</template>
<script>
import { ref, reactive,isRef,isReactive,shallowReactive,shallowRef,triggerRef} from "vue";

export default {
	name: "ref",
	data() {
		return {};
	},
	/*
        reactive 注意点
        - 本质就是将传入的 数据包装成 一个 Proxy 对象
        - ref 和 reactive 默认 都是递归监听
        - shallowReactive,shallowRef 来创建非递归监听 
        - shallowRef 监听的是 state.value 只有这个变化了才更新
        
    */
    setup() {
        let state = ref(123)
        let state2 = reactive([1,4,7])
        let state3 = reactive({name:'test',age:23,class:'三班'})
        let state4 = reactive({
            a:'a',
            gr:{
                b:'b',
                f:{
                    c:'c',
                    s:{
                        d:'d'
                    }
                }
            }
        })
        let state5 = ref({a:'a',b:'b'});

        let myFunc = ()=>{
            state = 666
            state2.push(9)
            state3.name = 'change'

            console.log(state);
            console.log(state2);
            console.log(state3);

            // 判断 是 ref类型 和 reactive 类型
            console.log(isRef(state))
            console.log(isRef(state2))
            console.log(isReactive(state2))

            console.log(state5);
            
 
        }
        return{
            state,
            state2,
            state3,
            state4,
            state5,
            myFunc
        }
    },
    




	// props 可以是数组或对象，用于接收来自父组件的数据
	props: [],

	// Vue 实例将会在实例化时调用 watch()，遍历 watch 对象的每一个 property。
	watch: {},

	// 计算属性
	computed: {},

	// 方法;
	methods: {},

	// 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
	beforeCreate() {},

	// 在实例创建完成后被立即调用。
	created() {},

	// 在挂载开始之前被调用：相关的 render 函数首次被调用。
	beforeMount() {},

	// 实例被挂载后调用
	mounted() {},

	// 被 keep-alive 缓存的组件激活时调用。
	activated() {},

	//被 keep-alive 缓存的组件停用时调用。
	deactivated() {},

	// 实例销毁之前调用。在这一步，实例仍然完全可用。
	beforeUnmount() {},

	// 实例销毁后调用
	unmounted() {},

	// 组件
	components: {},

	// 过滤器
	filters: {},

	// 自定义指令
	directives: {},

	//mixins 选项接收一个混入对象的数组
	mixins: [],
	// 进入这个路由时调用
	beforeRouteEnter(to, from, next) {
		window.document.body.style.backgroundColor = "";
		window.document.title = "title";
		next();
	},

	// 离开这个路由时调用
	beforeRouteLeave(to, from, next) {
		window.document.body.style.backgroundColor = "";
		window.document.title = "title";
		next();
	}
};
</script>
<style lang="scss" scoped>
</style>