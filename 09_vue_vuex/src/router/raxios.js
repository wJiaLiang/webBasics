import index from '@/components/axiosCom/index'
import install from '@/components/axiosCom/install'
import get from '@/components/axiosCom/get'
import post from '@/components/axiosCom/post'
import all from '@/components/axiosCom/all'
import response from '@/components/axiosCom/response'
import custom from '@/components/axiosCom/custom'
import cancel from '@/components/axiosCom/cancel'
import intercept from '@/components/axiosCom/intercept'


let axiosroutes = [
    {
      path: '/axiosCom/',
      name: 'index',
      component: index
    },
    {
      path: '/axiosCom/install',
      name: 'install',
      component: install
    },
    {
      path: '/axiosCom/get',
      name: 'get',
      component: get
    },
    {
      path: '/axiosCom/post',
      name: 'post',
      component: post
    },
    {
      path: '/axiosCom/all',
      name: 'all',
      component: all
    },
    {
      path: '/axiosCom/response',
      name: 'response',
      component: response
    },
    {
      path: '/axiosCom/custom',
      name: 'custom',
      component: custom
    },
    {
      path: '/axiosCom/cancel',
      name: 'cancel',
      component: cancel
    },
    {
      path:'/axiosCom/intercept',
      name:'intercept',
      component:intercept
    },
    {
       path:"/axiosCom/rem",
       name:"rem",
       component:()=>import("@/components/axiosCom/rem")
    },

    {
      path: '*',
      component: index,
      redirect(to){
        return {path:'/'}
      }
    }
  ]

export default axiosroutes