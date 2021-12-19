<template>
<div class="warpbox">
  <div class="rightConte">
      <div> </div>

  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {};
  },

  props: [],

  watch: {},

  components: {},

  computed: {},

  mounted() {},

  methods: {
    getUserAccount() {
      return axios.get(
        "https://www.easy-mock.com/mock/5c7563d05f2ea71602660264/weitest/axios"
      );
    },
    getUserPermissions() {
      return axios.get(
        " https://www.easy-mock.com/mock/5c7563d05f2ea71602660264/weitest/frist"
      );
    }
  },

  created() {
    let that = this;
    axios
      .all([that.getUserAccount(), that.getUserPermissions()])
      .then(res => {
        // 两个请求现在都执行完成 才会执行这个函数;
        console.log(res); // 两个函数执行结果的数组;
        console.log("都执行完成了");
      })
      .catch(error => {
        console.log(error);
      });

    function http1() {
      return axios.get(
        "https://www.easy-mock.com/mock/5c7563d05f2ea71602660264/weitest/get_axios"
      );
    }
    function http2() {
      return axios.get(
        "https://www.easy-mock.com/mock/5c7563d05f2ea71602660264/weitest/axios"
      );
    }
    // axios.spread(); 可以直接拿到每个请求的结果,如果不用 则 拿到的是个结果数组，用下标去取;

    axios
      .all([http1(), http2()])
      .then(
        axios.spread((res1, res2) => {
          console.log(res1);
          console.log(res2);
        })
      )
      .catch(error => {});
  }
};
</script>
<style lang='less' scoped>
</style>