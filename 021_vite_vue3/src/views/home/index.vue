<template>
  <div>
    <div class="flex_r f_ai_c f_jc_a pl20 pr20 pt10 pb10">
        <div class="tc">home</div>
    </div>
    <div>
      <router-link to="/dialog">弹框</router-link>
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
