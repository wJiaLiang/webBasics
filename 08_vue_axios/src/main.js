// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,Axios);  // use 里面的顺序不能变;

import '@/assets/css/base.css'
import '@/assets/css/common.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/*** 
 * Axios
 * 基于 Promise 用于 浏览器和nodejs的与服务器端的通信库;
 * 
 * 特征:
 * 支持 Promise APi;
 * 拦截请求和响应;
 * 转换请求和响应数据;
 * 取消请求;
 * 自动转换json数据：
 * 使用   node install axios --save;
 * 
 * 语法：
 * 1.axios(config)
 * 2.axios[method]();
 * 返回值为 Promise;
 * 
 *支持的请求方式:
   axios.get(url [,config]);
 * axios.post(url,[,data[,config]]);
   axios.delete();
   axios.head(url,[,config]);
   axios.options(url,[config]);
   axios.put(url,[,data,[,config]])
   axios.patch(url,[,data[,config]])
 * 
 * 
 * */ 