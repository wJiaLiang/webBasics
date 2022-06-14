import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: "/doc",
        name: "doc",
        component: () => import("@/views/document.vue")
    },
    {
        path: "/created",
        name: "createds",
        component:()=>import("@/views/created.vue")
    },
    {
        path:"/vuexComp",
        name:"vuexComp",
        component:()=>import("@/components/vuexComp.vue")
    },
    {
        path:"/router",
        name:"routerComp",
        component:()=>import("@/components/routerComp.vue")
    }
]

/*
* 安装 npm install vue-router@4
* history 模式要 发布到服务器的时候要配置一个 伪静态
*
*
* */


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
