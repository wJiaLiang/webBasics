<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ul v-if="list.length>0">
      <li  v-for="(item,index) in list" :key=index>
        <p> {{item.tite}}</p>
        <p>{{item.company}}</p>
        <p>{{item.attention_degree}}</p>
        <p><img :src="item.photo" alt=""></p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      list:[]
    }
  },
  beforeMount () {
    this.getList();
  },
  methods: {
    getList(){
      axios({
        method:'post',
        url: "/api/data",
      }).then(res=>{
        console.log("结果",res.data.data);
        this.list = res.data.data;

      })
    }
  }
}
</script>
