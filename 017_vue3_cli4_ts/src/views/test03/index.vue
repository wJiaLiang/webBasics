<template>
  <div>
    <h5>vue 组合式api 结合ts</h5>
    <p>{{ users.username }}</p>
    <p>{{ reversName }}</p>
    <p class="mt20">
      <button @click="setUsername('改变标题')">改变标题</button>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";

interface User {
  username: string;
  age: number;
  setUsername(name: string): void;
  getUsername(): string;
}

export default defineComponent({
  name: "index",
  data() {
    return {};
  },
  methods: {},
  setup() {
    // 在 setup函数里面去  第一种 实现这个接口;
    let users: User = reactive({
      username: "张三",
      age: 123,
      setUsername(name: string) {
        this.username = "李四";
      },
      getUsername(): string {
        return this.username;
      },
    });

    // 第二种实现接口
    // let u = reactive<User>({});

    // 第二种实现接口
    // let users: User = reactive({}) as User;

    // 计算属性的写法;
    let reversName = computed((): string => {
      return users.username.split("").reverse().join("");
    });

    return { users, reversName };
  },
});
</script>

<style scoped></style>
