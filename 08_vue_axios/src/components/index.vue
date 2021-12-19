<template>
<div class="warpbox">
  <div class="rightConte">
    <div>
      <ul>
        <li>{{info}}</li>
        <li>{{msg}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      info: "https://www.kancloud.cn/yunye/axios/234845",
      msg: "axios返回的都是一个Promise对象"
    };
  },

  // https://www.easy-mock.com/project/5bfb5eadb88b2a71b0d2d024
  // mock 数据;
  created() { 
    axios({
      method:"post",
      url:"https://www.easy-mock.com/mock/5bfb5eadb88b2a71b0d2d024/axiospost",
      // `data` 是作为请求主体被发送的数据
      // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
      // 在没有设置 `transformRequest` 时，必须是以下类型之一：
      // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      // - 浏览器专属：FormData, File, Blob
      // - Node 专属： Stream
      data: {
        firstName: "Fred",
        lastName: "Flintstone"
      }


    })
      .then(Response => {
        console.log(Response);
      })
      .catch(Error => {
        console.log(Error.data);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
</style>
