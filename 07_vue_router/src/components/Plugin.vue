<template>
	<div>
		<div>插件安装</div>
		<section>
			<p  class="test"
                @click="$local.save('wei','哈哈')" >
                原型方法中通过 this 获取其他挂载到原型上的方法
            </p>
            <p style="fontSize:18px"> $route </p>

            <div style="border:1px solid red;font-size:17px">
               {{ $route.path }}
               <hr>
               {{ $data }}
               <hr>
               <!-- {{ $mount }} -->

            </div>
		</section>
        <p> 全局组件 </p>
        <!-- <myAlert content="666" /> -->

	</div>
</template>

<script>
import Vue from 'Vue';
import myAlert from '@/components/myAlert';
Vue.use(myAlert);

export default {
	name: "plugin",
	data() {
		return {a:123};
	},

	props: [],

	watch: {},

	components: {
       
    },

	computed: {},

	mounted() {
        console.log('$route',this.$route)
    },

	methods: {
        hand(){
            this.$local.save('kgwei',666);
        }
    },

	created() {
		console.log("挂载到原型上", this.$custom, this.$abc); // 原型上获取自定义属性;
		console.log("plugin--$local", this.$local);
	},
};
</script>

<style lang='less' scoped>
.test {
	border: 1px solid green;
    font-size: 20px;
    cursor: pointer;
}

</style>