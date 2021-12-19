<template>
	<div class="fs20">
		<div class="br_1_000">
			<ul class="nav clearfix">
				<router-link
					tag="li"
					class="cur_p pt20 pb20 pl20 pr20 fl"
					to="/select"
				>
					组件传参例子
				</router-link>
				<router-link
					tag="li"
					class="cur_p pt20 pb20 pl20 pr20 fl"
					to="/install"
				>
					使用和定义vuex
				</router-link>
				<router-link
					tag="li"
					class="cur_p pt20 pb20 pl20 pr20 fl"
					to="/ac_get"
				>
					action异步操作和getter计算状态
				</router-link>
				<router-link
					tag="li"
					class="cur_p pt20 pb20 pl20 pr20 fl"
					to="/auxiliary"
				>
					vuex辅助函数
				</router-link>
				<router-link
					tag="li"
					class="cur_p pt20 pb20 pl20 pr20 fl"
					to="/model"
				>
					vuex模块化
				</router-link>
				<router-link
					tag="li"
					class="cur_p pt20 pb20 pl20 pr20 fl"
					to="/render"
				>
					render函数
				</router-link>
				
			</ul>
		</div>
		<div class="fs20 tc">首页</div>
		<div class="tc">{{ test }}</div>
		<!--  https://segmentfault.com/q/1010000010022922  -->
		<hr style="background-color: #ccc; height: 10px" />
		<main class="pl10 pr10 pt10 pb20">
			<div v-for="(item, index) in valueData" :key="index">
				<el-checkbox v-model="item.checked"
					>备选项{{ index }}</el-checkbox
				>
			</div>

			<div class="pt10">
				<el-cascader
					:options="options"
					:show-all-levels="false"
					v-model="selectOptions[0].iss[0].ai"
					@change="changeHander"
				>
				</el-cascader>
			</div>
		</main>
	</div>
</template>

<script>
/** 
 Vuex是什么：
  专为Vue.js 应用程序开发的状态管理模式，采用集中式存储管理应用的所有组件的状态,
  以相应的规则保证状态以一种可预测的方式发生变化;

  状态：
  组件内部状态：仅在一个组件内部使用的状态(data)字段

  什么情况下使用Vuex:
  多个视图依赖于同一状态，
  来自不同视图的行为需要改变同一状态;
*/
export default {
	name: "",
	data() {
		return {
			test: "hehe",
			valueData: [
				{ checked: true },
				{ checked: false },
				{ checked: true },
				{ checked: false },
			],
			istrue: true,
			selectOptions: [
				{
					iss: [
						{
							ai: [],
						},
					],
				},
			],

			options: [
				{
					value: "zhinan",
					label: "指南",
					children: [
						{
							value: "shejiyuanze",
							label: "设计原则",
							children: [
								{
									value: "yizhi",
									label: "一致",
								},
								{
									value: "fankui",
									label: "反馈",
								},
								{
									value: "xiaolv",
									label: "效率",
								},
								{
									value: "kekong",
									label: "可控",
								},
							],
						},
						{
							value: "daohang",
							label: "导航",
							children: [
								{
									value: "cexiangdaohang",
									label: "侧向导航",
								},
								{
									value: "dingbudaohang",
									label: "顶部导航",
								},
							],
						},
					],
				},
				{
					value: "zujian",
					label: "组件",
					children: [
						{
							value: "basic",
							label: "Basic",
							children: [
								{
									value: "layout",
									label: "Layout 布局",
								},
								{
									value: "color",
									label: "Color 色彩",
								},
								{
									value: "typography",
									label: "Typography 字体",
								},
								{
									value: "icon",
									label: "Icon 图标",
								},
								{
									value: "button",
									label: "Button 按钮",
								},
							],
						},
						{
							value: "form",
							label: "Form",
							children: [
								{
									value: "radio",
									label: "Radio 单选框",
								},
								{
									value: "checkbox",
									label: "Checkbox 多选框",
								},
								{
									value: "input",
									label: "Input 输入框",
								},
								{
									value: "input-number",
									label: "InputNumber 计数器",
								},
								{
									value: "select",
									label: "Select 选择器",
								},
								{
									value: "cascader",
									label: "Cascader 级联选择器",
								},
								{
									value: "switch",
									label: "Switch 开关",
								},
								{
									value: "slider",
									label: "Slider 滑块",
								},
								{
									value: "time-picker",
									label: "TimePicker 时间选择器",
								},
								{
									value: "date-picker",
									label: "DatePicker 日期选择器",
								},
								{
									value: "datetime-picker",
									label: "DateTimePicker 日期时间选择器",
								},
								{
									value: "upload",
									label: "Upload 上传",
								},
								{
									value: "rate",
									label: "Rate 评分",
								},
								{
									value: "form",
									label: "Form 表单",
								},
							],
						},
						{
							value: "data",
							label: "Data",
							children: [
								{
									value: "table",
									label: "Table 表格",
								},
								{
									value: "tag",
									label: "Tag 标签",
								},
								{
									value: "progress",
									label: "Progress 进度条",
								},
								{
									value: "tree",
									label: "Tree 树形控件",
								},
								{
									value: "pagination",
									label: "Pagination 分页",
								},
								{
									value: "badge",
									label: "Badge 标记",
								},
							],
						},
						{
							value: "notice",
							label: "Notice",
							children: [
								{
									value: "alert",
									label: "Alert 警告",
								},
								{
									value: "loading",
									label: "Loading 加载",
								},
								{
									value: "message",
									label: "Message 消息提示",
								},
								{
									value: "message-box",
									label: "MessageBox 弹框",
								},
								{
									value: "notification",
									label: "Notification 通知",
								},
							],
						},
						{
							value: "navigation",
							label: "Navigation",
							children: [
								{
									value: "menu",
									label: "NavMenu 导航菜单",
								},
								{
									value: "tabs",
									label: "Tabs 标签页",
								},
								{
									value: "breadcrumb",
									label: "Breadcrumb 面包屑",
								},
								{
									value: "dropdown",
									label: "Dropdown 下拉菜单",
								},
								{
									value: "steps",
									label: "Steps 步骤条",
								},
							],
						},
						{
							value: "others",
							label: "Others",
							children: [
								{
									value: "dialog",
									label: "Dialog 对话框",
								},
								{
									value: "tooltip",
									label: "Tooltip 文字提示",
								},
								{
									value: "popover",
									label: "Popover 弹出框",
								},
								{
									value: "card",
									label: "Card 卡片",
								},
								{
									value: "carousel",
									label: "Carousel 走马灯",
								},
								{
									value: "collapse",
									label: "Collapse 折叠面板",
								},
							],
						},
					],
				},
				{
					value: "ziyuan",
					label: "资源",
					children: [
						{
							value: "axure",
							label: "Axure Components",
						},
						{
							value: "sketch",
							label: "Sketch Templates",
						},
						{
							value: "jiaohu",
							label: "组件交互文档",
						},
					],
				},
			],
		};
	},

	props: [],

	watch: {},

	components: {},

	computed: {},

	mounted() {
		setTimeout(() => {
			this.valueData = [
				{ checked: true },
				{ checked: true },
				{ checked: true },
				{ checked: true },
			];

			this.selectOptions = [
				{
					iss: [
						{
							ai: ["yizhi"],
						},
					],
				},
			];
		}, 3000);
	},

	methods: {
		changeHander(v) {
			console.log("I,m", v);
		},
	},

	created() {
		this.test = "aaaaa";
	},
};
</script>
<style lang='less' scoped>
.nav li {
	width: 200px;
	height: 45px;
	margin-left: 20px;
	background-color: cadetblue;
}
</style>