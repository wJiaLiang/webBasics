import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '@/components/index'
import install from '@/components/install'
import get from '@/components/get'
import post from '@/components/post'
import all from '@/components/all'
import response from '@/components/response'
import custom from '@/components/custom'
import cancel from '@/components/cancel'
import intercept from '@/components/intercept'

export default new Router({
  mode:'history',
  linkActiveClass:'nav_isActive',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/install',
      name: 'install',
      component: install
    },
    {
      path: '/get',
      name: 'get',
      component: get
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/all',
      name: 'all',
      component: all
    },
    {
      path: '/response',
      name: 'response',
      component: response
    },
    {
      path: '/custom',
      name: 'custom',
      component: custom
    },
    {
      path: '/cancel',
      name: 'cancel',
      component: cancel
    },
    {
      path:'/intercept',
      name:'intercept',
      component:intercept
    },
    {
       path:"/rem",
       name:"rem",
       component:()=>import("@/components/rem")
    },

    {
      path: '*',
      component: index,
      redirect(to){
        return {path:'/'}
      }
    }
  ]
})
