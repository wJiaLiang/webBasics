<template>
<div class="warpbox">
  <div class="rightConte">
      <div v-for="(item,index) in result" :key="index">{{item}}</div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "post",
  data() {
    return {
      result: ""
    };
  },

  props: [],

  watch: {},

  components: {},

  computed: {},

  mounted() {},

  methods: {},

  created() {
    let that = this;
    //  url 后面直接跟要发送的参数
    axios.post("https://www.easy-mock.com/mock/5bfb5eadb88b2a71b0d2d024/upload",{name:'wei',password:123})
      .then(function(res) {
        console.log(res.data);
        console.log('this:',this);  // undefined;
        that.result = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang='less' scoped>
</style>