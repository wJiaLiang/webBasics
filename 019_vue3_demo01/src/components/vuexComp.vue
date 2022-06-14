<template>
	<div>
		<p>count:==> {{count}} </p>
		<p> getters:==> {{reverseMesg}}</p>
		<div>
			<a-button @click="addN">  count+1  </a-button>
			<a-button class="ml10" @click="setCount">  setCount  </a-button>
		</div>
	</div>
	<div class="br_1_000 pt20 pb20">
		<p> mesg=> {{mesg}}</p>
	</div>
</template>
<script lang="ts">
	import {defineComponent,reactive, ref, toRefs,watchEffect} from "vue";
	import {useStore} from "vuex"
	export default defineComponent({
		name:"vuexComp",
		props:[],
		setup(props){
			// 通过 useStore 获取 store;
			let store = useStore()
			let mesg = store.state.mesg
			return{
				mesg
			}
		},
		methods:{
			addN(){
				this.$store.commit("addCount",2)
			},
			setCount(){
				this.$store.commit("setCount",23)
			}
		},
		computed:{
			count(){
				return this.$store.state.count
			},
			reverseMesg(){
				return this.$store.getters.reverseMesg;
			}
		},
		components:{}
	})
</script>