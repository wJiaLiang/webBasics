import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'

// 写法二：选项式写法（Options API 风格）- 类似 Vuex 的写法

export const useUserStoreOptions = defineStore('user-options', {
 // 在选项式写法中，state 函数返回的对象本身就是响应式的

  state: () => ({
    user: {
      name: '张三',
      age: 25
    }
  }),

  getters: {
    fullName: (state) => `用户: ${state.user.name}`
  },

  actions: {
    updateName(name) {
      this.user.name = name
    },

    async fetchUser() {
      try {
        // 模拟 API 调用
        const data = await new Promise(resolve => 
          setTimeout(() => resolve({ name: '张三', age: 30 }), 1000)
        )
        this.user = data
      } catch (error) {
        console.error('获取用户信息失败:', error)
      }
    }
  }
},{persist: true})

// 写法三：Setup 函数式写法（可以结合使用 Vue 的组合式 API）
export const useUserStoreSetup = defineStore('user-setup', () => {
    //   在函数式写法中，通常使用 ref 来定义状态

  const user = ref({
    name: '李四',
    age: 25
  })
  

  // 使用 Vue 的组合式 API
  const updateUser = (newUser) => {
    Object.assign(user.value, newUser)
  }

  const resetUser = () => {
    user.value = {
      name: '李四',
      age: 25
    }
  }

  // 可以使用 watch、watchEffect 等 Vue 组合式 API
  // watch(user, (newUser) => {
  //   console.log('用户信息更新:', newUser)
  // }, { deep: true })

  return {
    user,
    updateUser,
    resetUser,
    // 计算属性可以直接返回
    fullName: computed(() => `用户: ${user.value.name}`)
  }
},{persist: true})