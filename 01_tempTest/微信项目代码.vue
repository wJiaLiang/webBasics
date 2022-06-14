<template>
	<div>wx代码记录</div>
</template>
<script>

import share from "@/utils/share";
export default {
	name: "",
	data() {
		return {};
	},

	props: [],

	watch: {},

	computed: {
		
	},
	created() {
		let wxToken = this.$ls.get("WX_TOKEN2");
		// eslint-disable-next-line no-console
		console.log("WX_TOKEN2==>", wxToken);
		if (wxToken) {
			this.anonymityVoting(wxToken);
		} else {
			this.getwxcode();
		}
	},
	methods: {
		// 微信分享 功能连接 
		share({
          title: title,
          desc: describe,
          // path,
          appId: this.$store.getters.wxId,
          path: `/numberResource/detail?appId=${this.$store.state.site.appId}&id=${this.id}`,
          imgUrl: this.shareUrl,
          success: () => {
            this.postBehavior({
              contentName: this.detail.title,
              status: 1,
              viewType: 4,
              id: this.id
            }); // 浏览行为请求
          }
        }),
		getwxcode() {
			let wxappId = this.$store.getters.wxId;
			let code = this.getQueryString("code");
			// eslint-disable-next-line no-console
			console.log("code:==>", code);
			if (code) {
				this.getWxUserInfo(wxappId, code);
			} else {
				const local = encodeURIComponent(window.location.href);
				// window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxappId}&redirect_uri=${local}&response_type=code&scope=snsapi_base&state=1#wechat_redirect`;
				window.location.href = `https://b.dataesb.com/get-wechat-code.html?appid=${wxappId}&redirect_uri=${local}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`;
			}
		},
		// 获取wxtoken,给到后台 解析 openid;
		getWxUserInfo(appid, code) {
			this.$axios
				.get(`tcc-weixin/wx/mp/redirect/${appid}/greet?code=${code}`)
				.then((res) => {
					if (res.code === 200) {
						this.$ls.set(
							"WX_TOKEN2",
							res.data.wxToken,
							11 * 60 * 60 * 1000
						);
						// eslint-disable-next-line no-console
						console.log("==", res.data.wxToken);
						// 投票接口
						this.anonymityVoting(res.data.wxToken);
					} else {
						this.$toast(res.desc);
					}
				});
		},
		getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		},
		// 匿名投票接口
		anonymityVoting(openId) {
			this.$axios({
				url: `tcc-mes-service/client-api/works/activityWorks/${this.id}/anonymousVoting`,
				method: "get",
				headers: {
					"WX-TOKEN": openId,
				},
			}).then((res) => {
				if (res.code == 200) {
					this.getActivvity();
					this.$toast.success(res.desc);
				} else {
					this.$toast.fail(res.desc);
				}
			});
		},
	},
	beforeCreate() {},
	beforeMount() {},
	mounted() {},
	activated() {},
	deactivated() {},
	beforeDestroy() {},
	destroyed() {},
	components: {},
	filters: {},
	directives: {},
	mixins: [],
	beforeRouteEnter(to, from, next) {
		window.document.body.style.backgroundColor = "";
		window.document.title = "title";
		next();
	},
	beforeRouteLeave(to, from, next) {
		window.document.body.style.backgroundColor = "";
		window.document.title = "title";
		next();
	},
};
</script>
<style lang="scss" scoped>
</style>