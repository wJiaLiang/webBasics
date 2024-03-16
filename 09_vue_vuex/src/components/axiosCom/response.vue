<template>
    <div class="warpbox">
        <div class="rightConte">  
            <div> response </div>
            <div>
            某个请求的响应包含以下信息 <br>
            {
            // `data` 由服务器提供的响应 <br>
            data: {}, <br>

            // `status` 来自服务器响应的 HTTP 状态码 <br>
            status: 200,<br>

            // `statusText` 来自服务器响应的 HTTP 状态信息<br>
            statusText: 'OK',<br>

            // `headers` 服务器响应的头<br>
            headers: {},<br>

            // `config` 是为请求提供的配置信息<br>
            config: {} <br>
            } <br>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "response",
  data() {
    return {};
  },

  props: [],

  watch: {},

  components: {},

  computed: {},

  mounted() {},

  methods: {},

  created() {}

};
</script>
<style lang='less' scoped>
</style>