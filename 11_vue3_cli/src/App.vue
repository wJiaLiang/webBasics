<template>
	<section>
		<div id="nav" class="fs26">
			<router-link class="fs26" to="/"> Home </router-link> |
			<router-link class="fs26" to="/about"> About</router-link> |
			<router-link class="fs26" to="/setup"> setup</router-link> |
			<router-link class="fs26" to="/ref"> ref和 reactvie</router-link> |
			<router-link class="fs26" to="/toRaw"> toRaw </router-link> |
		</div>

		<!-- 
            vue3 中不能像这样
            <transition name="alis" mode="in-out">
			    <router-view />
		    </transition> 
        
        -->

		<router-view  v-slot="{ Component }">
			<transition name="alis" mode="in-out">
				<keep-alive>
					<component v-if="$route.meta.keepAlive" :is="Component"></component>
				</keep-alive>
			</transition>
		</router-view>

		<router-view v-slot="{ Component }">
			<component v-if="!$route.meta.keepAlive"  :is="Component"></component>
		</router-view>



	</section>
</template>

<style src="./assets/css/base.css"></style>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

/* 定义进入时的动画 */
.alis-enter-from {
	opacity: 0;
	// position: absolute;
	// transform: rotateX(0px);
}
.alis-enter-active {
	transition: 1s;
}
.alis-enter-to {
	opacity: 1;
	// position: absolute;
	// transform: rotateX(100px);
}

/* 定义离开时的动画 */
.alis-leave-from {
	opacity: 1;
}
.alis-leave-active {
	transition: 1s;
}
.alis-leave-to {
	opacity: 0;
}
</style>
