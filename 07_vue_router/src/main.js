// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 该文件夹下的index 文件 可以省略;

import './assets/css/base.css'
import './assets/css/home.css'
import utils from '@/lib/utils'

Vue.config.productionTip = false  // 生产提示

/*
  Vue.use()需要在 new Vue 调用之前

*/ 

Vue.use(utils.pluginObj,{a:666});

Vue.use(utils.install);

// 注册了全局组件 myAlert
import myAlert from '@/components/myAlert';
Vue.use(myAlert);



/*
下面的这句注释是 跳过eslint 语法检查的; 表示后后面的代码跳过检查;
eslint-disable no-new
*/  


new Vue({ 
  el: '#app', 
  router,   // 简写 router:router,
  components: { App },   // 注册为组件
  template: '<App/>'     // 根组件;
})

/*
  导航守卫 全局前置守卫  全局的导航函数，只要路由切换都会触发;
  进入前  钩子函数都会接受这3个参数;
  https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB
*/ 
router.beforeEach((to, from, next) => {
  console.log("全局导航",to);
  // if(to.meta.login){
  //   next('/login');   // 如果导航中的login 字段为 true 表示这个路径对应的组件需要登录才能进入;
  // }else{
  //   next()
  // }
  
  next();
  
})

// 进入后的全局钩子函数;
router.afterEach((to,from)=>{
    window.document.title = to.meta.title;
})
