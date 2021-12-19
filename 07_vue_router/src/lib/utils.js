
/** 
    Vue的插件

    插件安装,所谓插件就是把对象方法放到vue的原型上;
    写法一：  Vue.prototype.$custom = '这是插件属性';

    写法二：  参数是vue 和 options; options是我们要传递到插件内部的参数;

    外部调用: Vue.use(utils.pluginObj,{a:666});

    外部调用: Vue.use(utils.install);

 */ 

 let local = {
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value))
        console.log("方法被调用$local.save");
    },
    fetch(key,value){
      return JSON.parse( localStorage.getItem(key)||{} );
    }
 }


 let pluginObj = {
    install:function(Vue,options){
        Vue.prototype.$custom = 'abc';
        Vue.prototype.$abc = 123;
        console.log('插件参数',options);
    }
  }

 export default {
     install(vm){
         vm.prototype.$local = local;
     },
     pluginObj:pluginObj


 }