<template>
    <div>
        <div class="eleBox">
            <!--  自定义属性 像子组件传递 参数 -->
            <select_input :title="title" :isShow.sync="isShow"> </select_input>
            <!--  自定义事件，接收 子组件提交 的 emit 触发 父组件的 自定义事件 -->
            <list v-show="isShow" :data="dataList" @changeTitle="titleHandle" ></list>
        </div>
    </div>
</template>

<script>
import select_input from "@/components/select_input";
import list from "@/components/list";

let dataList = [
  {
    title: "语文"
  },
  {
    title: "数学"
  },
  {
    title: "化学"
  },
  {
    title: "物理"
  },
  {
    title: "地理"
  },
  {
    title: "科学"
  }
];

export default {
  name: "",
  data() {
    return {
      isShow: false,
      title: "",
      dataList: dataList
    };
  },
  computed: {},
  watch: {},
  components: {
    select_input,
    list
  },

  mounted() {},

  methods: {
    titleHandle(title) {
      console.log(title);
      this.title = title;
    }
  },

  created() {}
};
</script>
<style lang='less' scoped>
.eleBox {
  padding: 20px;
  border: 1px solid black;
  margin-top: 20px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
}
</style>