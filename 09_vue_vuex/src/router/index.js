import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Select from '@/components/select'
import Install from '@/components/install'
import Ac_get from '@/components/ac_get'
import Auxiliary from '@/components/auxiliary'
import Model from '@/components/model'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:"/render",
      name:"render",
      component:()=>import("@/components/render")
    },
    {
      path:'/Select',
      name:'Select',
      components:{
        default:Select,
        a:Index
      }
    },
    {
      path:'/Install',
      name:'Install',
      component:Install
    },
    {
      path:'/Ac_get',
      name:'Ac_get',
      component:Ac_get
    },
    {
      path:'/Auxiliary',
      name:'Auxiliary',
      component:Auxiliary
    },
    {
      path:'/Model',
      name:'Model',
      component:Model
    }
  ]
})
