<template>
	<h5> docment 组件</h5>
	<div>{{ abc.b }}</div>
	<br>
	<div>
		<p> {{abc.c.d.e.f}} </p>
		<p>{{abc.c.d.e.f2}}</p>
		<input type="text" class="br_1_666" v-model="abc.c.d.e.f">
		<a-button class="ml20" type="primary" @click="addArrHand">按钮</a-button>
	</div>
	<br/>
	<hr>
	<div>
	<div class="mt20 pt20 pb20 br_1_000">
		<p class="fw600">  provide,inject 可以在父子组件中实现双向传递</p>
		<input class="br_1_666" v-model="title"/>
		<p> 父组件中的值：{{title}}</p>
		<injectsComp></injectsComp>
	</div>
	</div>
</template>
<script>
import {reactive, provide, ref} from "vue";
import injectsComp from "@/components/inject.vue"
export default {
	name: "docMent",
	setup() {
		let abc = reactive({
			a: 1,
			b: 2,
			c: {
				d: {
					e: {f: 666,f2:[1,2,3,4]},
				}
			}
		})
		let addArrHand = ()=>{
			abc.c.d.e.f2.push("尾部")
			abc.c.d.e.f2.unshift("头部")
		}
		let title = ref("父组件注入方法");
		provide("title",title)
		return {
			abc,
			title,
			addArrHand
		}
	},
	components:{injectsComp}

}
</script>