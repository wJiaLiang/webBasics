<template>
  <div class="pl30 pr30 pt30 pb30">
    <div class="flex_r f_ai_c f_jc_a">
        <div class="tc">home 页面</div>
    </div>
    <div class="pt20 pb20 pl20 pr20" style="border:1px solid burlywood;">
      <router-link class="pl10 pr10 dis_b" to="/dialog">弹框</router-link>
      <router-link class="pl10 pr10 dis_b" to="/deepseek"> deepseek </router-link>
      <router-link class="pl10 pr10 dis_b" to="/pinia"> pinia </router-link>
      <router-link class="pl10 pr10 dis_b" to="/composable"> composable组合式API </router-link>
      <div class="pl10 pt10 dis_b">
        <a href="https://uri.amap.com/marker?position=104.069356,30.578654">打开高德定位到成都</a>
      </div>
    </div>


    <Tabbar :active="0"></Tabbar>

  </div>
</template>
<script lang="js">
import { defineComponent, getCurrentInstance, reactive, ref, toRefs, watchEffect, onMounted } from "vue";
import Tabbar from "../../components/Tabbar/Tabbar.vue";
export default defineComponent({
  props: {},
  components: { Tabbar },
  setup(props) {
    onMounted(() => { })
    const onChange = (pageNumber) => {
      console.log('Page: ', pageNumber);
    };
    let onShowSizeChange = (current, pageSize) => {
      console.log(current, pageSize);
    };
    return {
      current1: ref(6),
      onChange,
      onShowSizeChange
    }
  },
})
</script>
<style lang="scss" scoped>
.homePage {
  padding: 0px;
}
</style>
