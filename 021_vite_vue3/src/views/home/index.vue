<template>
  <div class="pl30 pr30 pt30 pb30">
    <div class="flex_r f_ai_c f_jc_a">
        <div class="tc">home</div>
    </div>
    <div class="">
      <router-link class="pl10 pr10" to="/dialog">弹框</router-link>
      <router-link class="pl10 pr10" to="/deepseek"> deepseek </router-link>
      <router-link class="pl10 pr10" to="/pinia">  pinia 类似vuex </router-link>
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
