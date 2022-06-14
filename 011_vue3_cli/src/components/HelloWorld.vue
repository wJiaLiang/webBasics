<template>
	<div class="hello">
		<h1> {{ msg }} </h1>
		<p class="foop">Hello word 组件</p>

		<slot> </slot>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}

// 从父级传入的广告位内容不再受子级作用域样式的影响。相反，子级现在需要使用新的::v-slotted()伪元素来专门定位广告位内容：
:slotted(.slotele) {
	font-size: 40px;
	color: green;
}


</style>
