<template>
    <div class="mainboxs">
        <div> vuex 辅助函数 </div>
        <div class="mt20 pl20">
            <h5 class="fs30">简易加法</h5>
            <div>
                <input type="button" @click="delHandle({m:2})" value="-">
                <span class="fs20">{{num}}</span>
                <input type="button" @click="addHandle({n:5})" value="+">
            </div>
            <div class="fs20">{{num2}}</div>

        </div>

        
        <ul class="fs20">
            <li>vux 中全局加载的数据:</li>
            <li v-for="(item,index) in dataList" :key="index">{{item.title}}</li>
        </ul>

    </div>
</template>

<script>
/**
 * mapState
 * mapGetters
 * mapMutations
 * mapActions
 *
 *
 */
import { mapState, mapGetters,mapMutations,mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },

  props: [''],

  watch: {},

  components: {},

  //  通过mapState 去全局数据中去取值 mapState 返回的是一个对象;   // 取值的几种方法;
  /*
  computed: mapState({
      num:state=> state.count,
      num:'count',
      num(state){
          return state.count+10;
      }
  }),
  */ 

  // computed:mapState(['count']) // 如果名字一样 还可以写成数组形式

  //  用扩展运算符把他扩展到这里;
  computed: {
    abc() {
      return 666;
    },
    dataList(){
       return this.$store.state.dataList
    },
    ...mapGetters({
      num2: "filterCount"
    }),
    ...mapState({ num: "count" })
  },

  mounted() {},

  methods: {
    
    // delHandle() {
    //   //    第一个参数数 函数名字，第二个是个对象参数;
    //   this.$store.commit("delIncrement", { m: 10 });
    // },

    //  这的key 是 当前组件定义的函数名,value 是 vuex 中actions中定义的函数 要传递参数的化就要页面绑定的位置写入参数
    ...mapActions({
        delHandle:"delAction"
    }),
    ...mapMutations({
        addHandle:'addIncrement'
    }),


    //addHandle() {
      // this.$store.commit('addIncrement',{n:5});
      //   第二种写法
      // this.$store.commit({
      //     type:'addIncrement',
      //     n:5
      // })

      // 触发一个action异步操作
      //this.$store.dispatch("addAction", { n: 10 });
    //}
  },

  created() {
      this.$store.dispatch('getDataList');

  }
};
</script>
<style lang='less' scoped>
input[type="button"] {
  font-size: 20px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
}
.mainboxs{
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid burlywood;
}
</style>