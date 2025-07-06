<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <!-- 字体使用示例 -->
    <div class="font-examples">
      <h1 class="font-alimama">欢迎使用阿里妈妈字体</h1>
      <h2 class="font-alimama-thin">细体字重示例</h2>
      <p class="font-alimama">这是使用阿里妈妈字体的正文内容，具有良好的可读性和美观性。</p>
      <p class="font-alimama-thin">这是使用阿里妈妈字体细体版本的文字，适合用于副标题或强调内容。</p>
      
    </div>
    
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

<style scoped>
.font-examples {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.font-examples h1 {
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.font-examples h2 {
  color: #42b983;
  margin-bottom: 15px;
}

.font-examples p {
  margin-bottom: 10px;
  line-height: 1.6;
}

.font-size-examples {
  margin-top: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.font-size-examples p {
  margin: 8px 0;
  color: #333;
}
</style>
