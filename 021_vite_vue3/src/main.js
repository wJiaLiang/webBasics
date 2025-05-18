import { createApp } from "vue";
import myDialog from "./plugins/myDialog";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "leaflet/dist/leaflet.css";
import "vant/lib/index.css";
import "./assets/main.css";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";

import * as icons from "@ant-design/icons-vue";
import Vant from 'vant';

import { install as utils  } from "./utils/index"

import VConsole from "vconsole";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);
app.use(icons);
app.use(Vant);
app.use(utils);
app.use(myDialog)
for (const i in icons) {
  app.component(i, icons[i]);
}
// 判断环境显示;
// console.log("a",import.meta.env.MODE ==="" || "porduction");
if (import.meta.env.MODE === "development") {
  // const vConsole = new VConsole({ theme: "light" });
}
app.mount("#app");
