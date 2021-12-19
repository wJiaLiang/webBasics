<template>
    <div class="fs20">
        <div> vuex 按功能划分模块 </div>
        {{title}}
    </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },

  props: [],
  computed: {
    title() {
        // state 里面就不能直接取了，要加一个模块名字
     return this.$store.state.modleSelect.title;
    }
  },

  watch: {},

  components: {},

  mounted() {},

  methods: {},

  created() {}
};
</script>
<style lang='less' scoped>
</style>