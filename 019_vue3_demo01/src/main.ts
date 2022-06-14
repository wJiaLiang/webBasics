import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import "@/assets/css/base.css"


createApp(App)
    .use(store)
    .use(router)
    .use(Antd)
    .mount('#app')
