<template>
	<div class="pt40">
		<header class="pb10 tc fs20">组合API</header>
		<div>
			<p>{{ count }}</p>
			<button @click="myFunc">按钮</button>
			<form action="">
				<input
					class="br_1_000 pt5 pb5"
					type="text"
					v-model="state2.stu.id"
				/>
				<input
					class="br_1_000 pt5 pb5"
					type="text"
					v-model="state2.stu.name"
				/>
				<input
					class="br_1_000 pt5 pb5"
					type="text"
					v-model="state2.stu.age"
				/>
				<input class="br_1_000 pt5 pb5" type="submit" @click="addStu" />
			</form>
			<ul>
				<li
					v-for="(item, index) in state.stus"
					:key="index"
					@click="remStu(index)"
				>
					{{ item.name }}----{{ item.age }}
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import { ref, reactive } from "vue";

// 抽离成一个独立的函数  解决数据与逻辑分离的情况; 还可以抽离到其他文件中
let useRemoveStudent = () => {
	let state = reactive({
		stus: [
			{ id: 1, name: "zs", age: 10 },
			{ id: 2, name: "zs1", age: 11 },
			{ id: 3, name: "zs2", age: 12 },
		],
	});

	let remStu = (index) => {
		console.log(index);
		state.stus = state.stus.filter((stu, key) => {
			return key != index;
		});
	};
	return {
		state,
		remStu,
	};
};

// 添加学生的函数， 还可以抽离到其他文件中
let useAddStudent = (state) => {
	let state2 = reactive({
		stu: {
			id: "",
			name: "",
			age: "",
		},
	});
	let addStu = (e) => {
		e.preventDefault();
		console.log(state2);
		let stu = Object.assign({}, state2.stu);
		state.stus.push(stu);

		state2.stu.id = "";
		state2.stu.name = "";
		state2.stu.age = "";
	};
	return { state2, addStu };
};

export default {
	name: "setup",
	data() {
		return {};
	},

	/*
    本质上导入出去的函数 也会注入到选项对象中; 
     setup 函数注意点
     beforeCreate 之前执行;
     - 无法使用data和 methods 
     - 无法使用this
     - setup 函数只能是同步 不能写成异步

    */

	setup() {
		/*
            ref 只能监听 简单数据类型的变化
        */
		let count = ref(0);

		let myFunc = () => {
			console.log(count);
			count.value += 1;
		};
		/*  删除时的数据与逻辑
		let state = reactive({
			stus: [
				{ id: 1, name: "zs", age: 10 },
				{ id: 2, name: "zs1", age: 11 },
				{ id: 3, name: "zs2", age: 12 }
			]
		});

		let remStu = index => {
			console.log(index);
			state.stus = state.stus.filter((stu, key) => {
				return key != index;
			});
        };

        */

		let { state, remStu } = useRemoveStudent();
		let { state2, addStu } = useAddStudent(state);

		/* 添加的数据与业务逻辑
		let state2 = reactive({
			stu: {
				id: "",
				name: "",
				age: ""
			}
		});
		let addStu = e => {
			e.preventDefault();
			console.log(state2);
			let stu = Object.assign({}, state2.stu);
			state.stus.push(stu);
			state2.stu.id = "";
			state2.stu.name = "";
			state2.stu.age = "";
		};
        */

		return {
			count,
			myFunc,

			state,
			remStu,

			state2,
			addStu,
		};
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
	},
};
</script>
<style lang="scss" scoped>
</style>