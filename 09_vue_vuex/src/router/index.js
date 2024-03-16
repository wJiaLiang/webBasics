import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Select from '@/components/select'
import Install from '@/components/install'
import Ac_get from '@/components/ac_get'
import Auxiliary from '@/components/auxiliary'
import Model from '@/components/model'

import axiosroutes from './raxios'
import rrouter from './rrouter'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass:'nav_isActive',
  linkActiveClass: 'is_active',  // 默认的导航选择样式类,路由匹配上自动在router-link 上加上;
  //  滚动行为
  scrollBehavior(to, form, savePosition) {
    console.log(to);   // 目标路由对象：
    console.log(form); // 离开的路由对象;
    console.log(savePosition); // 记录滚动条的坐标，点击前进后退的时候记录，注意是点击浏览的前进后退按钮;才记录;
    if(savePosition){
      return savePosition;
    }else{
      return{x:0,y:0}
    }

    // 利用 hash 也可记录,滚动到位置;在路由后写上 页面路由后跟上#abc;页面原始写上 id= abc;
    // console.log(to.hash);  // #abc;
    // if (to.hash) {
    //   return {
    //     selector: to.hash
    //   }
    // }
  },
  routes: [
    ...axiosroutes,
    ...rrouter,
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
