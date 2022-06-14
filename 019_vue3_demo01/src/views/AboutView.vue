<template>
	<div class="about">
		<h2> ref,reactive,toRefs 等 响应式方法</h2>
		<div> {{ title }}</div>
		<br>
		<div> {{ userInfo }}</div>
		<hr>
		<br>
		<div>
			<a-button class="ml10" type="primary" @click="getUser"> 按钮 reactive绑定的值</a-button>
			<a-button class="ml10" type="primary" @click="getTitle"> 按钮 ref 绑定的值</a-button>
		</div>
		<div class="mt20">
			<a-button class="ml10" type="primary" @click="setUser"> 按钮 设置reactive</a-button>
			<a-button class="ml10" type="primary" @click="setTitle"> 按钮 设置ref 绑定的值</a-button>
		</div>
		<div class="mt20">
			<p> {{ des }} | {{ time }} </p>
			<a-input type="text" style="width:300px" v-model:value="des"/>
			<input class="br_1_000 " type="text" v-model="time"/>
		</div>
	</div>
</template>
<script>
import {ref, reactive, toRefs} from "vue"
import {message} from 'ant-design-vue';

export default {
	setup() {
		// ref,reactive 都是定义响应试数据,ref是定义单值和数组的，reactive是定义对象数据的
		let title = ref("ref绑定响应式数据")
		let userInfo = reactive({name: "kg", age: 12})
		let art = reactive({
			des: "xxxx",
			time: "2020"
		})

		// 获取值;
		let getUser = () => {
			console.log(this);
			message.info(userInfo.name + "---" + userInfo.age)
		}
		let getTitle = () => {
			message.info(title.value);
		}
		// 设置值，修改值
		let setUser = () => {
			userInfo.name = "changeName"
		}
		let setTitle = () => {
			title.value = "修改 ref 绑定数据值"
		}
		// ...art, // 这样解构 会导致 art失去响应式
		return {
			title,
			userInfo,
			getUser,
			getTitle,
			setUser,
			setTitle,
			...toRefs(art)
		};
	}
}

</script>
