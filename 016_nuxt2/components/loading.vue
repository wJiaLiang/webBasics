<template>
		<div  v-if="loading" class="loading">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
</template>

<script>
export default {
	 data: () => ({
        loading: false
    }),
	// start 和 finish 这个俩个方法是nuxt 定义的
	methods: {
		start() {
			this.loading = true;
		},
		finish() {
			this.loading = false;
		},
	},
};
</script>
<style lang="css" scoped>
.loading {
	width: 80px;
	height: 40px;
    margin: 0 auto;
    border: 1px solid greenyellow;
    border-radius: 10000px;
    position:fixed;
    top:50%;
    margin-top:-30px;
    left: 50%;
    margin-left:-40px;
}
.loading span {
	display: inline-block;
	width: 8px;
	height: 100%;
	border-radius: 4px;
	background: lightgreen;
	-webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load {
	0%,
	100% {
		height: 40px;
		background: lightgreen;
	}
	50% {
		height: 70px;
		margin: -15px 0;
		background: lightblue;
	}
}
.loading span:nth-child(2) {
	-webkit-animation-delay: 0.2s;
}
.loading span:nth-child(3) {
	-webkit-animation-delay: 0.4s;
}
.loading span:nth-child(4) {
	-webkit-animation-delay: 0.6s;
}
.loading span:nth-child(5) {
	-webkit-animation-delay: 0.8s;
}
</style>