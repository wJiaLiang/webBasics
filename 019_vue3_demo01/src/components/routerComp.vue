<template>
	<div>
		<p> router 写法 </p>
		<p>
			<a-button type="primary" @click="gopath"> 跳转 </a-button>
		</p>
	</div>
</template>
<script lang="js">
	import { useRouter } from "vue-router";

	import {defineComponent,reactive, ref, toRefs,watchEffect} from "vue";
	export default defineComponent({
		name:"routerComp",
		props:[],
		setup(props){
			let router = useRouter();
			let gopath= ()=>{
				console.log("aa");
				router.push({path:"/doc"})
			}
			return{gopath}
		},
		components:{}
	})
</script>