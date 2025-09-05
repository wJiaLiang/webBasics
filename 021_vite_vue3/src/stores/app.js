import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 写法一：函数式写法（Composition API 风格）


// Pinia 状态管理示例，展示如何实现 Vuex 的功能
export const useAppStore = defineStore('app', () => {
  // state - 相当于 Vuex 的 state
  const userInfo = ref({
    name: '王五',
    age: 25,
    email: 'zhangsan@example.com',
    hobby:{class1: '学习', class2: '旅行', class3: ['阅读', '旅行', '音乐']}
  })
  
  const todos = ref([
    { id: 1, text: '学习 Vue 3', done: true },
    { id: 2, text: '学习 Pinia', done: false },
    { id: 3, text: '完成项目', done: false }
  ])
  
  const isLoading = ref(false)
  
  // getters - 相当于 Vuex 的 getters
  const doneTodos = computed(() => {
    return todos.value.filter(todo => todo.done)
  })
  
  const doneTodosCount = computed(() => {
    return doneTodos.value.length
  })
  
  const getUserInfo = computed(() => {
    return userInfo.value
  })
  
  // mutations - 在 Pinia 中直接修改 state (函数式写法)
  function setUserInfo(newUserInfo) {
    userInfo.value = { ...userInfo.value, ...newUserInfo }
  }
  
  function setLoading(loading) {
    isLoading.value = loading
  }
  
  function addTodo(todo) {
    todos.value.push(todo)
  }
  
  function toggleTodo(id) {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.done = !todo.done
    }
  }
  
  function updateHobby(name){
    userInfo.value.hobby.class3.push(name||'新爱好')
  }

  // actions - 相当于 Vuex 的 actions (异步操作)
  async function fetchUserInfo() {
    setLoading(true)
    try {
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 1000))
      setUserInfo({
        name: '李四',
        age: 30,
        email: 'lisi@example.com'
      })
    } catch (error) {
      console.error('获取用户信息失败:', error)
    } finally {
      setLoading(false)
    }
  }
  
  async function addTodoAsync(text) {
    setLoading(true)
    try {
      // 模拟 API 调用
      await new Promise(resolve => setTimeout(resolve, 500))
      addTodo({
        id: Date.now(),
        text,
        done: false
      })
    } catch (error) {
      console.error('添加待办事项失败:', error)
    } finally {
      setLoading(false)
    }
  }
  
  // 重置状态
  function resetState() {
    userInfo.value = {
      name: '张三',
      age: 25,
      email: 'zhangsan@example.com'
    }
    todos.value = [
      { id: 1, text: '学习 Vue 3', done: true },
      { id: 2, text: '学习 Pinia', done: false },
      { id: 3, text: '完成项目', done: false }
    ]
  }

  // 返回 state、getters 和 actions
  return {
    // state
    userInfo,
    todos,
    isLoading,
    
    // getters
    doneTodos,
    doneTodosCount,
    getUserInfo,
    
    // mutations
    setUserInfo,
    setLoading,
    addTodo,
    toggleTodo,
    updateHobby,
    
    // actions
    fetchUserInfo,
    addTodoAsync,
    
    // 其他方法
    resetState
  }
},{
    // 配置持久化插件
    persist:{
      key: 'app-store',
      storage: localStorage,
      paths: ['userInfo.hobby'] // 只持久化 hobby
    }
  }
)