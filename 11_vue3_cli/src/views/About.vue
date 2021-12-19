<template>
  <section> 
    <div class="setfontSize">
		<p> {{a}} </p>
		<p>{{abs}}</p>
		<p class="mt10"> v-model  <input class="br_1_000 pt5 pb5" type="text" v-model="abs"> </p>
    </div>
  </section>
  
</template>

<script>
import {ref,reactive,watch,computed } from 'vue'

export default {
	name:"about",
	data(){
		return{
			msg:'',
			abs:'请输入'
		}
	},
	props:{
		user:{
			type:String,
		}
	},
	watch:{
		abs(newv,oldv){
			console.log(newv+'===>'+oldv);
		}
	},

	/**
	 * 组合式api:
	 * 
	 * setup 组件选项在创建组件之前执行，一旦 props 被解析，并充当合成 API 的入口点。
	 * setup 选项中没有 this。这意味着，除了 props 之外，你将无法访问组件中声明的任何属性——本地状态、计算属性或方法。
	 * setup 返回的所有内容都将暴露给组件的其余部分 (计算属性、方法、生命周期钩子等等) 以及组件的模板
	 * 
	 * ref 函数使任何响应式变量在任何地方起作用
	 * 
	 * 
	 * 
	 */
	setup(props){
		
		let a = ref('这个变量动态更新到视图');

		setInterval(()=>{
			a.value = '修改啊的值'
		},3000)

		// a 改变后就执行后面的函数
		watch(a,(newValue,oldValue)=>{
			console.log('新值==>',newValue)
			console.log('旧值==>',oldValue)
		})

		return{
			a,
		}
	}
}

</script>

<style scoped src="@/assets/css/about.css"></style>
<style lang="sass" scoped>


</style>