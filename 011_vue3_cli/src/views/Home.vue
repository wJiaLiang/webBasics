<template>
	<section>
		<div class="home">
			<img alt="Vue logo" src="../assets/logo.png" />

			<HelloWorld  msg="Welcome to Your Vue.js App">
				<div class="slotele"> HelloWorld 组件插槽内容 </div>
			</HelloWorld>

		</div>
	</section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { h } from "vue";
export default {
	name: "Home",
	components: {
		HelloWorld,
	},
	data() {
		mesg: 888;
	},
};
</script>

<style lang="css" scoped src="@/assets/css/home.css">
</style>
<style lang="scss" scoped >

//  对子组件有效的 .foop类名 有效
:deep(.foop) {
	font-size: 30px;
	color: red;
}

// 插槽内容  子组件中将通过 :slotted(.slotele){}
.slotele{
	background: cadetblue;
	color:pink;
}

// 全局的 .foop 类名有效
:global(.foop) {
	font-size: 50px;
	color: blue;
}



</style>