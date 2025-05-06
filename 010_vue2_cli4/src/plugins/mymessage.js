import Vue from 'vue'
import MyMessageComponent from '@/plugins/components/mymessage.vue'

const MyMessageConstructor = Vue.extend(MyMessageComponent)

const MyMessage = function(options) {
  // 支持字符串形式调用
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  
  // 创建实例并挂载
  const instance = new MyMessageConstructor({
    data: options
  })
  
  // 将实例挂载到新创建的div上
  instance.$mount()
  document.body.appendChild(instance.$el)
  
  // 显示对话框
  instance.dialogVisible = true
  
  // 返回Promise，以支持then调用
  return new Promise((resolve) => {
    // 监听确定按钮事件
    instance.$on('okHand', (res) => {
      instance.dialogVisible = false
      document.body.removeChild(instance.$el)
      resolve(res)
    })
    
    // 监听关闭事件
    const originalClose = instance.handleClose
    instance.handleClose = (done) => {
      originalClose && originalClose(done)
      document.body.removeChild(instance.$el)
      resolve('close')
    }
  })
}

export default {
  install(Vue) {
    Vue.prototype.$mymessage = MyMessage
  }
}