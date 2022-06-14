import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home 
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
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


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
