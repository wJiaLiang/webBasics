
export const useUserStore = defineStore('user', {
  state: () => ({
    appid: 0,
    token: '',
    userInfo: {},
  }),
  actions: {    
    setAppid(appid) {
      this.appid = appid
    },
    setToken(token) {
      this.token = token
    },
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    },
  },

})