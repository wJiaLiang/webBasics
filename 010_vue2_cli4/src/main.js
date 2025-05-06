import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import appfunc from './utils/hp.js'
import 'amfe-flexible'
// require("./mock")

// 引入自定义消息框插件
import MyMessage from './plugins/mymessage'

// 引入 elementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.appfunc = appfunc
Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import "@/assets/css/base.css"
import "leaflet/dist/leaflet.css"
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
Vue.use(MyMessage);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
