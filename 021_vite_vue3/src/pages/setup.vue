<template>
  <div>
    <h3>计算属性</h3>
    <div>
      <ul class="br_1_000">
        <li>
          <input
            class="br_1_666"
            type="text"
            v-model="firstName"
            placeholder="firstName"
          />
        </li>
        <li>
          <input
            class="br_1_666"
            type="text"
            v-model="lastName"
            laceholder="lastName"
          />
        </li>
        <li>
          <p>{{ firstName }} ---- {{ lastName }}</p>
        </li>
        <li>{{ fullName }}</li>
        <input class="br_1_666" type="text" v-model="score" />
        <li>{{ pass }}</li>
      </ul>
      <ul class="br_1_000">
        <li>原始对象</li>
        {{
          lastName
        }}
      </ul>
      <ul class="br_1_000">
        <li>watchEffect 方法使用</li>
        <li>num: {{ num }}</li>
        <li>num2:{{ num2 }}</li>
      </ul>
      <ul class="br_1_000">
        <li>watch 方法使用</li>
        <li>count: {{ count }}</li>
        <li>count2:{{ count2 }}</li>
        <a-button type="primary" @click="clearTimer">关闭定时器</a-button>
      </ul>
    </div>
  </div>
</template>
<script>
import {
  computed,
  reactive,
  ref,
  toRefs,
  readonly,
  watchEffect,
  watch,
} from "vue";

export default {
  name: "setUp",
  props: ["mesg"],
  setup(props) {
    console.log("接收父组件的值==>", props);
    let age = ref("20");
    let userInfo = reactive({
      firstName: "kg",
      lastName: "wei",
      score: 90,
    });
    // 计算属性 computed 用法;
    let fullName = computed(() => {
      return userInfo.firstName + "---" + userInfo.lastName;
    });
    let pass = computed(() => {
      if (userInfo.score >= 80) {
        return "优秀";
      } else if (userInfo.score > 60) {
        return "及格";
      } else {
        return "不及格";
      }
    });
    // readonly 传入一个对象,或者 ref,返回一个原生对象的只读代理;
    // 将响应式对象改变成原始对象，实现响应功能
    userInfo = readonly(userInfo);

    // watchEffect
    let data = reactive({
      num: 1,
      num2: 3,
    });
    // 不管是否改变 num 值，都会执行一次
    watchEffect(() => {
      console.log("num改变" + data.num);
    });
    setInterval(() => {
      data.num++;
    }, 1000);

    //watch
    let data2 = reactive({
      count: 1,
      count2: 4,
    });
    // 只能监听到 data2的变化，不能监听到里面的具体某个值的变化;
    watch(data2, (newData, oldData) => {
      console.log(newData, oldData);
      console.log("watch监听count:", data2.count);
    });
    let timer = setInterval(() => {
      data2.count++;
    }, 1000);
    function clearTimer() {
      clearInterval(timer);
    }

    // watch 可以返回新旧值
    let data3 = ref("66");
    watch(data3, (newV, oldV) => {
      console.log(newV, oldV);
    });
    setInterval(() => {
      data3.value++;
    }, 1000);

    return {
      age,
      fullName,
      pass,
      ...toRefs(userInfo),
      ...toRefs(data),
      ...toRefs(data2),
      clearTimer,
    };
  },
};
</script>
