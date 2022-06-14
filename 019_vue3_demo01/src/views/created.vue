<template>
	<div>
		生命周期
	</div>
	<div class="tl w10 mauto">
		<p> 执行结构顺序 </p>
		1.setup, <br/>
		2.beforeCreate, <br/>
		3.created, <br/>
		4.onMounted <br/>
	</div>
	<div>
		<tsc></tsc>
	</div>
</template>
<script>
import {onMounted} from "vue";
import tsc from "@/components/tsComp"
export default {
	name: "createdComP",
	setup() {
		console.log("setup");
		onMounted(() => {
			console.log("onMounted")
		})
	},
	beforeCreate() {
		console.log("beforeCreate")
	},
	created() {
		console.log("created")
	},
	components:{
		tsc
	}
}
</script>