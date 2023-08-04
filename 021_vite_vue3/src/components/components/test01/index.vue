<template>
  <div>
    <h5>vue + ts 语法 编写组件</h5>
    <p>{{ title }}</p>
    <p>{{ newsValue.title }}</p>
    <p class="mt20">
      <button @click="setTtile('改变标题')">改变标题</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
let title = "定义一个字段串";
// 通过接口定义多个字段的类型
interface News {
  title: string;
  des: string;
  count: number | string; // 定义多个类型;
  content?: string; // 可选参数
}
let newsValue: News = {
  title: "标题",
  des: "新闻",
  count: 88,
};
export default defineComponent({
  name: "test01Index",
  data() {
    return {
      title,
      newsValue,
    };
  },
  methods: {
    setTtile(str: string): void {
      this.title = str || "标题改变";
      this.newsValue.title = str;
    },
  },
});
</script>

<style scoped></style>
