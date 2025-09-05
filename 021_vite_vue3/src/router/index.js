import { createRouter, createWebHistory } from "vue-router";
console.log("环境", import.meta.env);
console.log("路由", createWebHistory(import.meta.env.VITE_APP_BASE_URL));
const router = createRouter({
  /**
   base 参数，该参数用于指定应用程序部署在服务器上的基础URL
   base 参数允许你指定应用程序的基础URL。 如果未提供 base 参数，它的默认值通常是 '/'，表示应用程序被部署在服务器的根目录下。
  
  */
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes: [
    {
      path: "/amap",
      name: "amapIndex",
      component: () => import("../views/amap/index/index.vue"),
    },
    {
      path: "/leaflet",
      name: "leaflet",
      component: () => import("../views/leaflet/index.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/my",
      name: "my",
      component: () => import("../views/my/index.vue"),
    },
    {
      path: "/dialog",
      name: "dialog",
      component: () => import("../views/dialog/index.vue"),
    },
    {
      path: "/deepseek",
      name: "deepseek",
      component: () => import("../views/deepseek/index.vue"),
    },
    {
      path: "/pinia",
      name: "pinia",
      component: () => import("../views/pinia/index.vue"),
    }
  ],
});

export default router;
