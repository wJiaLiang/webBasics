import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //设置根路径
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/test1",
      name: "test1",
      component: () => import("@/components/custom/test1.vue"),
    },
    {
      path:'/setup',
      name:'setup',
      component:()=> import("../views/setup.vue"),
      meta: {
        keepAlive:true
       }
    },
    {
      path:'/ref',
      name:'ref',
      component:()=> import("../views/ref.vue")
    },
    {
      path:'/toRaw',
      name:'toRaw',
      component:()=> import("../views/toRaw.vue")
    }
  ],
});

export default router;
