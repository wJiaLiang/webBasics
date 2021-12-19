<template>
<div class="warpbox">
  <div class="rightConte">
    
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "get",
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
    axios.get("https://www.easy-mock.com/mock/5bfb5eadb88b2a71b0d2d024/query",{params:{name:'666',password:'123'}})
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang='less' scoped>
</style>