<template>
    <div>
        <div>  使用和定义Vuex </div>
        <div class="mt20 pl20">
            <h5 class="fs30">简易加法</h5>
            <div>
                <input type="button" @click="delHandle" value="-">
                <span class="fs20">{{num}}</span>
                <input type="button" @click="addHandle" value="+">
            </div>
            <div class="fs20">{{num2}}</div>

        </div>


    </div>
</template>

<script>
/**
 * 安装 vuex 模块;
 * npm install vuex --save;
 *
 * 作为插件使用：
 *  Vue.use(Vuex)
 *
 * 定义容器:   new Vuex.Store();
 *
 * 注入根实例
 * {
 *    store
 * }
 *
 *
 * */

export default {
  name: "",
  data() {
    return {
      count: ""
    };
  },

  props: [],

  watch: {},

  components: {},

  computed: {
    num() {
      return this.$store.state.count;
    },
    num2(){
      return  this.$store.getters.filterCount
    }
  },

  mounted() {},

  methods: {
      delHandle(){
            //    第一个参数数 函数名字，第二个是个对象参数;
            //    this.$store.commit('delIncrement',{m:10})

         
      },
      addHandle(){

        // this.$store.commit('addIncrement',{n:5});
        //   第二种写法
        // this.$store.commit({
        //     type:'addIncrement',
        //     n:5
        // })

        // 触发一个action异步操作
        this.$store.dispatch('addAction',{n:10})

      }
  },

  created() {}
};
</script>
<style lang='less' scoped>

input[type='button']{
    font-size: 20px;
    width:60px;
    height: 60px;
    line-height: 60px;
    border: 1px solid black;
    text-align: center;
    cursor: pointer;
}

</style>