<template>
	<div class="br_1_000">
		ts 组件的一些设置和注意点
		<div>title==> {{title}} </div>
		<a-button class="mr10" type="button" @click="setTitle"> 修改数据 </a-button>
		<input class="br_1_000" style="width: 200px" type="text" v-model="title" />

		<hr>
		<div class="mt20">
			users:==>{{name}}
			<a-button @click="setName"> 修改name </a-button>
		</div>
	</div>

</template>

<script lang="ts">
	// import HelloWorld from "@/components/HelloWorld.vue";
	import {defineComponent, reactive, ref, toRefs} from "vue";
	let age = 12;
	export default defineComponent({
		/**
		 * 1.加上defineComponent 就可以有ts的语法检查
		 * 2.引入组件 时必须加上 .vue 的后缀名称
		 *
		 */
		setup(){
			// 指定类型;
			let count = ref<number|string>("2000")
			let title = ref("this is title")
			let setTitle = ()=>{
				title.value = "aaaassss";
			}
			let users = reactive({
				name:"zs",
				age:10,
				setName(){
					console.log(this); //undefind
					// this.name = "ls"
				}
			})
			return{
				count,
				title,
				setTitle,
				...toRefs(users)
			}
		},

	})

</script>