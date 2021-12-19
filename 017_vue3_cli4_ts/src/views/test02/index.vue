<template>
  <div>
    <br />
    <div>
      <p>{{ title }}</p>
      <p>{{ userInfo.username }}</p>
    </div>
    <div><button @click="getUsername">获取值</button></div>
    <div><button @click="gettitle">获取值title</button></div>
    <input style="border: 1px solid red" type="text" v-model="title" />
    <p>{{ a }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRef, computed } from "vue";
export default {
  name: "index",
  setup() {
    //ref 定义响应式数据        单值，数组
    // reactive 定义响应式数据  对象
    var title = ref("标题111");
    var userInfo = reactive({ username: "aaaa", sex: 30 });
    var users = reactive({ a: 123, b: 567 });
    var getUsername = () => {
      alert(userInfo.username);
    };
    // ref 的值要用 value来访问
    let gettitle = () => {
      alert(title.value);
    };
    // 计算属性;
    let fullName = computed(() => {
      return userInfo.username + "===" + userInfo.sex;
    });
    return {
      title,
      userInfo,
      getUsername,
      gettitle,
      ...users, // 直接结构 出去就不是响应式的
      ...toRef(users),
    };
  },
  data() {
    return {
      b: "bbbbbbbbbbb",
    };
  },
  methods: {},
};
</script>

<style scoped></style>
