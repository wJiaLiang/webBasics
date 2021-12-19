#### Vue生命周期


所有的生命周期钩子自动绑定 this 上下文到实例中，因此你可以访问数据，对属性和方法进行运算。这意味着你不能使用箭头函数来定义一个生命周期方法 (例如 created: () => this.fetchTodos())。这是因为箭头函数绑定了父上下文，因此 this 与你期待的 Vue 实例不同，this.fetchTodos 的行为未定义。

+beforeCreate
在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
这个时期，this变量还不能使用，在data下的数据，和methods下的方法，watcher中的事件都不能获得到;

+created
实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
这个时候可以操作vue实例中的数据和各种方法，但是还不能对"dom"节点进行操作；

+beforeMount
在挂载开始之前被调用：相关的 render 函数首次被调用。

+mounted
el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果root实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
挂载完毕，这时dom节点被渲染到文档内，一些需要dom的操作在此时才能正常进行
 vm.$nextTick 调用,解决异步操作;

+beforeUpdate

+updated

+activated
keep-alive 组件激活时调用。

+beforeDestroy

+destroyed