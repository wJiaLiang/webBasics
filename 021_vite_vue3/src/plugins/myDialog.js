import { createVNode, render } from 'vue';
import MyDialog from '../components/MyDialog/MyDialog.vue';

export default {
  install: (app) => {
    // 创建一个调用方法挂载到app.config.globalProperties上
    app.config.globalProperties.$myDialog = (options) => {
      // 创建容器
      const container = document.createElement('div');
      document.body.appendChild(container);
      
      // 创建组件VNode
      const vnode = createVNode(MyDialog);
      
      // 渲染组件到容器
      render(vnode, container);
      
      // 调用组件的open方法并返回Promise
      return vnode.component.exposed.open(options).finally(() => {
        // 清理DOM
        render(null, container);
        document.body.removeChild(container);
      });
    };
    
    // 也可以注册为全局组件
    app.component('MyDialog', MyDialog);
  }
};