####  vue 中实例选项函数和组件生命周期函数的调用顺序;

+ 在页面首次加载执行顺序有如下:
```
beforeCreate        //在实例初始化之后、创建之前执行
created             //实例创建后执行
beforeMounted       //在挂载开始之前调用
filters             //挂载前加载过滤器
computed            //计算属性
directives-bind     //只调用一次，在指令第一次绑定到元素时调用
directives-inserted //被绑定元素插入父节点时调用
activated           //keek-alive组件被激活时调用，则在keep-aliv包裹的嵌套的子组件中触发
mounted             //挂载完成后调用
```


+ 组件销毁时，执行顺序如下:
```
beforeDestroy         //实例销毁之前调用
directives-unbind     //指令与元素解绑时调用，只调用一次
deactivated           //keep-alive组件停用时调用
destroyed             //实例销毁之后调用

```
*   生命周期钩子

|生命周期钩子|详细|
|:--|:--|
|beforeCreate| 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。 |
|created| 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。 |
|beforeMount|在挂载开始之前被调用：相关的 render 函数首次被调用。|
|mounted|el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。|
|beforeUpdate|数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。|
|updated|由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。|
|activated|keep-alive 组件激活时调用。|
|deactivated|keep-alive 组件停用时调用。|
|beforeDestroy|实例销毁之前调用。在这一步，实例仍然完全可用。|
|destroyed|Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。|




