import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/Decimal',
        name: 'Decimal',
        component: () => import('../views/decimal.vue')
    },
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/index.vue')
    },

    {
        path: '/list', name: 'List', component: () => import('../views/list.vue')
    },
    {
        path: '/detail', name: 'Detail', component: () => import('../views/detail.vue')
    },
    {
        path: '/leaflet', name: 'leaflet', component: () => import('../views/leafletMap.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/indexaaa',
        name: 'indexaaa',
        component: () => import(/* webpackChunkName: "about" */ '../views/swiper.vue')
    },
    {
        path:"/el-upload",
        name:"/el-upload",
        component:()=>import('../components/index.vue')
    },
    {
        path:"/vuex",
        name:"/vuex",
        component:()=>import('../views/vuex/index.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
