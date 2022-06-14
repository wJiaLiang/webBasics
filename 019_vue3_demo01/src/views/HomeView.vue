<template>
	<div class="home">
		<setUp mesg="props参数"></setUp>
	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import setUp from "@/pages/setup.vue"

export default defineComponent({
	name: 'HomeView',
	components: {
		setUp
	},
});
</script>
