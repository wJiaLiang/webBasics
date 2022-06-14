<template>
	<div class="br_1_000">
		<div class="">子组件中的 inject :{{ title }}</div>
		<input class="br_1_666" type="text" v-model="title">
		<a-button @click="setTitle"> 改变 title</a-button>
	</div>
</template>

<script>
import {inject} from "vue";

export default {
	name: "injectComp",
	setup() {
		let title = inject("title")
		let setTitle = () => {
			title.value = "xxxxx"
		}
		return {
			title,
			setTitle,
		}
	}

}

</script>