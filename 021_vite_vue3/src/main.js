import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
import store from "./store";
// 引入插件方法，挂载到vue实例上的方法
import { install as utils  } from "./utils/index"
app.use(router);
app.use(store);
app.use(utils)

app.mount("#app");
