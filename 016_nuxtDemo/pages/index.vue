<template>
	<div class="container">
		<div>
			<Logo />

      
			<div>
				<p>{{ a }}</p>

				<hr />
				<p class="fs18 cr_red">客户端渲染：诗词</p>
				<ul class="tl pl20 fs17 lh24 pb36">
					<li v-for="(item, index) in b" :key="index">{{ item }}</li>
				</ul>

				<hr />
				<p class="cr_red fs18">百度热榜：服务端渲染</p>
				<ul class="tl cr_blue fs16 pl20 lh24">
					<li v-for="(item, index) in c" :key="index">
						<a :href="item[1]">{{ index }}、 {{ item[0] }} </a>
					</li>
				</ul>
			</div>


		</div>
	</div>
</template>

<script>
export default {
	middleware(context) {
		console.log("index 首页 middleware");
	},
	data() {
		return {
			a: 1111,
			b: "",
			c: "",
		};
	},
	/*
    主要校验一些传递过来的参数
    返回 false 表示参数校验失败,就不会进入到该页面
  */
	validate({ params, query }) {
		console.log("index--page---validate,params", params);
		console.log("index--page---validate,query", query);

		return true;
	},
	// 请求异步数据
	async asyncData({ app, $axios, store }) {
		let result = null;
		await $axios
			.get(`/api/tools/baidutop/`, { params: { type: 1 } })
			.then((res) => {
				console.log("index pages 异步数据", res);
				result = res.data;
				app.c = result;
			})
			.catch((err) => {
				console.log("index pages 异步错误", err);
			});

		//  返回的数据会合并到 data 中
		return {
			c: result,
		};
	},
	// 也可以执行 执行异步操作
	fetch({ store }) {
		console.log("fetch");
	},

	// 服务端和客户端都可以执行
	beforeCreate() {
		console.log("index---pages---beforeCreate 服务端和客户端都可以执行");
	},
	created() {
		console.log("index---pages----created 服务端和客户端都可以执行");
	},
	// 浏览器中执行的钩子函数
	beforeMount() {
		this.$axios
			.get(`/api/tools/jjs/`, { params: { keywords: "才女", len: 7 } })
			.then((res) => {
				console.log("浏览器 res", res);
				this.b = res;
			})
			.catch((err) => {
				console.error("浏览器 err", err);
			});
	},
};
</script>

<style>
.nav {
	border: 1px solid blue;
}
.container {
	margin: 0 auto;
	/* min-height: 100vh; */
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: "Quicksand", "Source Sans Pro", -apple-system,
		BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
		sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
