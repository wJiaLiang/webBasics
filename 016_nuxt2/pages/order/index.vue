<template>
	<div tc>
		<div class="tc ">this is order pages</div>
		<div class="fs16 tc">服务器端加载数据</div>
		<div style="border:1px solid red"> 
        <ol class="tc">
          <li v-for="(item,index) in list" :key="index"> {{item}} </li>
        </ol>
    </div>
    <div>
      vuex 状态：
      <button @click="getstore"> 更新 vuex stroe </button>
      <!--  -->
      <p> 全局模块 </p>
      <div>list: {{list}} </div>
      <div>mapState name: {{name}} --- {{name2}}</div>
      <div>mapState age: {{age}} --- {{age2}}</div> 
      <div>mapGetters name: {{getName2}} --- {{getName2user}}  </div>

      <button @click="getstoreMutations"> 更新 name </button>
      <button @click="getstoreMutations2"> 更新user/name </button>

      <hr>
      <div>
        list666 :{{list666}}
        user-list:{{list777}}
      </div>
      <button @click="getaction"> 更新 list </button>
      <button @click="getaction2"> 更新 user/list </button>
    </div>
	</div>
</template>

<script>
import {mapActions,mapGetters,mapMutations,mapState} from 'vuex'
export default {
  data () {
    return {
      list:'',
    }
  },
 async asyncData({$axios,app,store}) {
     let result = '';
     await $axios.get(`/api/tools/hengpi/`,{params:{shanglian:'星河漫漫',xialian:'历史悠长'}})
      .then(res=>{
         result = res;
      });
      store.commit('Aadd', result)
     return {
        list:result
     }

  },
  mounted () {
    console.log("路由信息对象",  this.$route  );
    console.log("路由实例对象",  this.$router );
  },

  computed: {
    list666(){
      return this.$store.state.list
    },
    list777(){
      return this.$store.state.user.list
    },
    ...mapState({
        name: state => state.name,
        age:state => state.age,
        name2: state => state.user.name,
        age2: state => state.user.age,
     }),
     ...mapGetters({
        getName2:'getName',
        getName2user:"user/getName"
     })
  },
  methods: {
     getstore(){
       this.$store.dispatch('Aadd', "aa")
     },
     getstoreMutations(){
        // this.$store.commit('M_update',88)
        this.M_update("nnnn")
     },
    getstoreMutations2(){
        // this.$store.commit('M_update',88)
        this.M_update2("nnnn2")
     },
     getaction(){
       this.Aadd("ffffff")
     },
     getaction2(){
       this.Aadd2("gggggg")
     },

     ...mapMutations({
          M_update:'M_update',
          M_update2:'user/M_update'
     }),

     ...mapActions({
          Aadd:'Aadd',
          Aadd2:'user/Aadd'
     })
  }


};
</script>

<style scoped></style>