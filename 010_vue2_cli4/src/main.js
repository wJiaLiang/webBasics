import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import appfunc from './utils/hp.js'
import 'amfe-flexible'
require("./mock")

Vue.prototype.appfunc = appfunc
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
