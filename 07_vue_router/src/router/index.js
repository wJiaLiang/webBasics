import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  // @表示在 webpack.base.config.js 中配置的变量 表示的是src;

Vue.use(Router);

//  引入组件;
import Home from '@/components/home'
import About from '@/components/about'
import Document from '@/components/document'
import noFindele from '@/components/404'
import slider from '@/components/slider'

import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
import User from '@/components/user'
import login from '@/components/login'
import Plugin from '@/components/Plugin'


export default new Router({
  mode: "history",  // history 模式, 区别于hash 模式   用 router-link 跳转的是时候兼容两种模式,
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
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/index',   // 别名，当访问 index的时候就能够匹配到home组件; 注意点,路由可以匹配到，但是router-link中用的home 就匹配不到了
      // meta 就相当于自定义的一些字段,
      meta: {
        index: 1,
        title: '主要'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        index: 1,
        title: '主要'
      }
    },
    { 
      path:'/slider',
      name:'slider',
      component:slider,
      meta:{
        title:"slider"
      }
    },
    {
      path: '/document',
      name: 'Document',
      //  document 路由对应多个视图，组件
      components: {
        default: Document,  // 默认渲染的路由，对应没有名字的router-view; 
        slider: slider,   // 对应名字为 router-view 中name 为 slider 
      },
      meta: {
        index: 2,
        title: '文档页面'
      },
      beforeEnter(to, from, next) {
        console.log('进入到了document组件中了 beforeEnter');
        next();
      }
    },
    {
      path: '/about',
      // name: 'About',
      component: About,
      //  当子组件渲染出来后默认的父组件也始终被渲染出来;
      // 设置了默认的子路由 父路由的name 属性不要写; name 属性直接给到默认的子路由;
      // 默认的子路由  path 中什么都不写就可以了;  注意 组件中的路径名字同步
      children: [{
        path: '',
        name: 'About',
        component: study,
        meta: {
          index: 3,
          title: '关于',
          login: true,  // 表示该页面需要登录，才能进入;作为一个标示：
        }
      },
      {
        path: 'work',
        name: 'Work',
        component: work
      }, {
        path: 'hobby',
        name: 'Hobby',
        component: hobby
      }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    //  动态路径传参;
    // ?表示可以匹配0次;既 /user 也算配配到 将URL后面的动态参数给 userId,然后再组件中获取;
    {
      // path:'/user/:userId?',     //  /user/1   /user/2   /user 
      path: '/user/:tip?/:userId?',  // 可以多级  /user/vip/1   /user/vip/2   /user 
      name: 'User',
      component: User,
      meta: {
        index: 4,
      }
    },
    {
      path: '/Plugin',
      name: 'Plugin',
      component: Plugin
    },
    {
      path: '*',      // * 号通配符,上面的路径都没有匹配上就会匹配到这个;
      // component: noFindele
      //  重定向
      // redirect : '/home',
      // redirect :{path:'/home'},
      // redirect:{name:'About'}    // name 指的是 路由中的name 字段;
      redirect: (to,) => {
        // 目标路由对象，访问的路径路由信息;
        console.log(to);
        // return '/home'    // 函数返回一个要重定向的页面；
        if (to.path === '/123') {
          return '/home';
        } else if (to.path === '/456') {
          return { path: '/document' }
        }

      }
    }
  ]
})


/**
 *
 * 前端路由
 * 在web 开发中 路由是指根据URL 分配到对应的处理程序;
 *
 * vue-router
 * 作用：通过管理URL实现URL和组件的对应和通过URL进行组件之间的切换;
 * 单页 spa:  加载单个html 页面，并在用户与应用程序交互时动态更新该页面;
 *
 * 使用步骤:
 * 安装模块 npm install vue-router --save;
 * 引入模块 import VueRouter from 'vue-router'
 * 作为Vue的插件 Vue.use(VueRouter);
 * 创建路由实例对象;
 *  new VueRouter({
 *      ...配置参数
 * })
 * 注入到Vue 选项参数:
 * new Vue({
 *    router
 * })
 * 告诉路由渲染位置;
 * <router></router>
 *
//  * **************************************************************************************
 *

   动态路径：
   匹配到的所有路由，全部都映射到同一个组件
   路由：/user/:userId    userId 为动态路径参数；
   获取参数 :路由信息对象的params;

    $router   router 实例对象；
    $route     当前激活的路由信息对象，每个组件实例都会有;
    beforeRouteEnter() // 进入组件前的钩子函数;
    beforeRouteLeave() // 离开组件的钩子函数;

  路由信息对象;
  一个路由信息对象表示当前激活的路由的状态信息，每次成功的导航后都会产生一个新的对象;
  path 字符串，对应当前路由的路径
  params 对象，包含动态路径参数;
  query 对应， URL查询参数；
  hash 字符串，URL包含查询参数和hash 的完整路径;
  fullPath 字符串， URL包含查询参数和hash 的完整路径：
  matched 数组， 包含当前路由的所有嵌套路径片段的路由记录：
  name 字符串，当前路由的名称;


  过渡动效
  Vue 提过了 transition 的封装,添加过渡动画;
  添加删除 css 类名;

  v-enter 定义进入过渡的开始状态;
  v-enter-active 定义进入活动状态;
  v-enter-to  定义进入的结束状态;

  v-leave 定义离开过渡的开始状态
  v-leave-active 定义离开活动状态;
  v-leave-to 定义离开的结束状态;

  使用 name 属性 改变类名前缀;

  过渡模式
  in-out 新元素先进行过渡,完成之后当前元素过渡离开;
  out-in 当前元素先进行过渡,完成之后新元素过渡进入;

   路由元信息:
   在路由信息配置对象中 meta 可以配置一些数据,用在来路由信息对象中访问meta 中的数据：$route.meta;


  编程式导航;
    借助于router的实例方法，通过编写代码来实现导航的切换：
   back 回退一步
   forward 前进一步
   go 指定前进或回退步数;
   push 导航到不同的URL,向history 栈添加一个新的记录;
   replace 导航到不同的URL,替换 history 栈中当前记录;

   导航的钩子函数:
   当导航发生变化的时候，导航钩子函数主要是用来拦截导航，让它完成跳转或取消;
    执行钩子函数位置:
         router 全局     单个路由     组件中

   钩子函数：
    router实例上：beforeEach,afterEach,
    单个路由中：  beforeEnter,
    组件内的钩子：beforeRouteEnter,beforeRouteUpdate,beforeRouteLeave;

   钩子函数接收的参数：
     to 要进入的目标路由对象，到哪里去;
     from 正要离开导航的路由对象， 从哪里来;
     next  用来决定跳转或取消导航;


  */