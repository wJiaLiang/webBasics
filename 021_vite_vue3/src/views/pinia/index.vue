<template>
    <div class="pinia-demo">
    <h2>Pinia 状态管理演示</h2>
    
    <!-- Composition API 风格 store 演示 -->
    <div class="demo-section">
      <h3>Composition API 风格 (app.js 中的写法)</h3>
      <div class="user-info">
        <p>用户信息: {{ appStore.getUserInfo.name }}, {{ appStore.getUserInfo.age }}岁</p>
        <p>已完成任务数: {{ appStore.doneTodosCount }}</p>
        <button @click="appStore.fetchUserInfo" :disabled="appStore.isLoading">
          {{ appStore.isLoading ? '加载中...' : '获取用户信息' }}
        </button>
        <button @click="appStore.resetState">重置状态</button>
      </div>
      
      <div class="todo-list">
        <h4>待办事项</h4>
        <ul>
          <li v-for="todo in appStore.todos" :key="todo.id">
            <input 
              type="checkbox" 
              :checked="todo.done" 
              @change="appStore.toggleTodo(todo.id)"
            >
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
          </li>
        </ul>
        <div>
          <input v-model="newTodoText" placeholder="添加新任务">
          <button @click="addTodo">添加</button>
        </div>
      </div>
      <div>
        <p>爱好: {{ appStore.hobby }}</p>
        <ul>
          <li v-for="value in appStore.userInfo?.hobby?.class3" :key="value">{{ value }}</li>
        </ul>
        <button @click="appStore.updateHobby()">新增爱好</button>
      </div>

    </div>
    
    <!-- Options API 风格 store 演示 -->
    <div class="demo-section">
      <h3>Options API 风格 (user-options)</h3>
      <div class="user-info">
        <p>用户信息: {{ userOptionsStore.user.name }}, {{ userOptionsStore.user.age }}岁</p>
        <p>全名: {{ userOptionsStore.fullName }}</p>
        <button @click="userOptionsStore.fetchUser">获取用户信息</button>
        <div>
          <input v-model="newName" placeholder="输入新名字">
          <button @click="updateName">更新名字</button>
        </div>
      </div>
    </div>
    
    <!-- Composition API 风格 (user-setup) 演示 -->
    <div class="demo-section">
      <h3>Setup 函数式风格 (user-setup)</h3>
      <div class="user-info">
        <p>用户信息: {{ userSetupStore.user.name }}, {{ userSetupStore.user.age }}岁</p>
        <p>全名: {{ userSetupStore.fullName }}</p>
        <button @click="resetUser">重置用户</button>
        <div>
          <input v-model="updateUserData" placeholder="输入用户数据 (JSON格式)">
          <button @click="updateUser">更新用户</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import {getCurrentInstance, reactive,ref, computed, onMounted, shallowRef, watch,nextTick} from 'vue';
import { useAppStore } from '@/stores/app.js'
import { useUserStoreOptions, useUserStoreSetup } from '@/stores/user.js'


/*
在模板中，ref 会被自动解包，所以不需要使用 .value

总的来说，ref 更适合处理基本类型和需要完全替换的场景，
而 reactive 更适合处理对象和数组，特别是当只需要修改对象属性而不需要替换整个对象时。

*/ 

// 使用不同写法定义的 stores
const appStore = useAppStore()
const userOptionsStore = useUserStoreOptions()
const userSetupStore = useUserStoreSetup()

// 表单数据
const newTodoText = ref('')
const newName = ref('')
const updateUserData = ref('')

// 方法
const addTodo = () => {
  if (newTodoText.value.trim()) {
    appStore.addTodoAsync(newTodoText.value)
    newTodoText.value = ''
  }
}

const updateName = () => {
  if (newName.value.trim()) {
    userOptionsStore.updateName(newName.value)
    newName.value = ''
  }
}

const updateUser = () => {
  try {
    console.log('upV',JSON.parse(updateUserData.value));

    const userData = JSON.parse(updateUserData.value)
    userSetupStore.updateUser(userData)
  } catch (e) {
    alert('请输入有效的 JSON 格式数据')
  }
}

const resetUser = () => {
  userSetupStore.resetUser()
}


let data = reactive({
    title: 'Pinia 状态管理演示',
})


onMounted(() => {
    console.log('onMounted')

})

</script>
<style lang="scss" scoped>
.pinia-demo {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.demo-section h3 {
  margin-top: 0;
  color: #333;
}

.user-info {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 15px;
}

.user-info p {
  margin: 5px 0;
}

.todo-list ul {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  padding: 5px 0;
  display: flex;
  align-items: center;
}

.todo-list li .done {
  text-decoration: line-through;
  color: #999;
}

.todo-list li input[type="checkbox"] {
  margin-right: 10px;
}

button {
  background-color: #409eff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px 5px 5px 0;
}

button:disabled {
  background-color: #a0cfff;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #66b1ff;
}

input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

</style>