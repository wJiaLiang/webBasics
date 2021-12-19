<template>
    <div class="warpbox">
        <div class="rightConte">
            <div> 拦截器 和 配合Vue使用</div>
            <div>


            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

var HTTP = axios.create({
  baseURL: " https://www.easy-mock.com/mock/5c7563d05f2ea71602660264/weitest",
  timeout: 2000,
  responseType: "json",
  params: { book: "123" }, // 查询字符串;无论get还是post都会在 url跟在后面
  // 发送之前数据的处理  只是对put post patch 有用; 一定要有返回值
  transformRequest: [
    function(data) {
      console.log(data); //如果不return 将不作为发送数据
      return data;
    }
  ],
  //  返回回来后可以统一处理
  transformResponse: [
    function(data) {
      console.log("transformRseponse"); // 如果不return 外面拿不到请求的数据结果;
      return data;
    }
  ],
  // 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus(status) {
    console.log(status);
    // 如果 返回true 即使错误也会走 then函数;表示成功;
    if (status <= 500) {
      return true;
    }
  },
  headers: {
    "custom-header": "wei", // 自定义的请求头;
    "content-type": "application/x-www-form-urlencoded" // 自动转换数据格式
  }
});

//  全局拦截器 拦截请求;
// 这里的HTTP为 axios 的一个实例;
HTTP.interceptors.request.use(
  function(config) {
    //  在发送请求之前做某件事；
    console.log("拦截成功");
    console.log(config); // config 就是配置项 axios 的配置项;
    return config; // 如果return 表示 还会继续请求, 不return 请求将不会发送
  },
  function(error) {
    // 请求错误时做的事;
    return Promise.reject(error);
  }
);
// 拦截响应;
HTTP.interceptors.response.use(function(data) {
  console.log("拦截到响应");
  console.log(data);
});

// 取消拦截
// HTTP.interceptors.request.eject(myInterceptor);

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

  methods: {},

  created() {
    HTTP.get("/axios")
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang='less' scoped>
</style>