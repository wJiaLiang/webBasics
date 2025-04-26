import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import app from './app'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user
  },
  plugins: [createPersistedState({
    // key属性用于指定存储在localStorage中的键名
    // 当多个项目使用相同的localStorage时，可以通过不同的key来区分数据
    // 默认值是'vuex'，这里我们显式设置为'vuex'
    key: 'vuex-cilent',
    storage: window.localStorage,
    // paths 配置指定了需要持久化存储的状态路径
    // 'app.app' 表示只持久化 app 模块下的 app 状态
    // 'user' 表示持久化整个 user 模块的状态
    // 这些路径决定了哪些状态会被保存到 localStorage 中
    paths: ['app.app', 'user']
  })]
})
