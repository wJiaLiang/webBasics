<template>
	<nav>
		<router-link to="/">Home</router-link>
		|
		<router-link to="/about">响应式api</router-link>
		|
		<router-link to="/doc"> 计算属性</router-link>
		|
		<router-link to="/created"> 生命周期</router-link>
		|
		<router-link to="/vuexComp"> vuex</router-link>
		|
		<router-link to="/router"> router</router-link>
	</nav>
	<router-view/>
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	font-size: 16px;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>