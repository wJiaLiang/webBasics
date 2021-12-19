<template>
    <div>
        <div> user 组件</div>
        <div class="fs30 cr_333">{{test}}</div>
        <div>
            <!-- 这里循环的时候 key 必须动态绑定 -->
            <!-- <router-link v-for="(item,index) in userData" class="pl20 pr10 pt20" :to="'/user/'+item.id"  :key="index">
                {{item.userName}}
            </router-link> -->

            <!-- 动态路径可以跟多个 -->
            <!-- <router-link 
            v-for="(item,index) in userData" 
            class="pl20 pr10 pt20" 
            :to="'/user/'+item.tip+'/'+item.id"  
            :key="index">
                {{item.userName}}
            </router-link> -->

            <!-- 默认直接路由匹配到 他的关注  改下成对象的形式 -->
            <router-link 
                v-for="(item,index) in userData" 
                class="pl20 pr10 pt20" 
                :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}"  
                :key="index">
                {{item.userName}}
            </router-link>

            
            <div v-if="userInfo.sex" class="mt20 fs24 mauto tl" style="width:500px;">
                <p>姓名：{{userInfo.userName }}</p>
                <p>性别：{{userInfo.sex }}</p>
                <p>爱好：{{userInfo.hobby }}</p>
            </div>

        </div>
        <div v-show="userInfo.userName">
            <div class="fs24 clearfix pt20 mauto" style="width:500px;">
                <!--  不写就相当当前的路径  -->
                <!-- <router-link class="fl pr20" exact to="?info=follow">他的关注</router-link>
                <router-link class="fl pl20 " exact to="?info=share">他的分享</router-link> -->
                <!--  第二种写法  写成对象像的形式 动态绑定to 值; -->
                <router-link class="fl pr20" exact  :to="{path:'',query:{info:'follow'}}">他的关注</router-link>
                <router-link class="fl pl20 " exact :to="{path:'',query:{info:'share',name:'wei'}}">他的分享</router-link>

            </div>
            <div>
                <hr>
                查询参数：
                <div>{{$route.query}}</div>
            </div>
        </div>
    </div>
</template>
<script>

let data = [
  {
    id: 1,
    tip: "vip",
    userName: "leo1",
    sex: "男",
    hobby: "写代码"
  },
  {
    id: 2,
    tip: "vip",
    userName: "leo2",
    sex: "男",
    hobby: "唱歌"
  },
  {
    id: 3,
    tip: "common",
    userName: "leo3",
    sex: "男",
    hobby: "喝酒"
  },
  {
    id: 4,
    tip: "common",
    userName: "leo4",
    sex: "男",
    hobby: "读书"
  }
];

export default {
  name: "User",
  data() {
    return {
      userData: data,
      userInfo: {},
      test:'组件内导航钩子函数'
    };
  },
  watch: {
    //  监控$route 对象,路由一单发生变化就就从新执行渲染函数;
    $route() {
        console.log('$route',this.$route);
        this.getFilterUserData();
    }
  },
  // 组件编译之前; 组件生成时只执行一次; 生成时只执行一次，复用时不执行;
  created() {
    console.log(this.$route.params.userId);
    this.getFilterUserData();
  },
  methods:{
      getFilterUserData(){
            let id = this.$route.params.userId;
            if (id) {
                let userInfo = this.userData.filter(item => {
                    return item.id == id;
                })[0];
                this.userInfo = userInfo;
            } else {
                this.userInfo = {};
            }
      }
  },
  // 组件执行的第一个生命周期钩子函数;
  beforeCreate(){

  },
  //  进去这个组件前的导航钩子函数;
  beforeRouteEnter(to,from,next){
    console.log('组件中的导航钩子函数 beforeRouterEnter');
    console.log(this); // 此时 this指向的是组件的实例，但是这个时候还没有创建出来，所以是undefind;
    next(vm=>{
      // next 传入一个回调函数，参数就是 该组件的实例对象;
      vm.test = "改变后的test"
    })
  },
  // 导航的URL更新后的 执行的此钩子函数 ，针对于组件中有二级导航的情况
  beforeRouteUpdate(to,from,next){
    console.log('导航更新了,befroeRouteUpdate');
    next();
  },
  //  离开这个组件的时候执行的钩子函数;
  beforeRouteLeave(to,form,next){
    console.log('离开user组件了,执行beforeRouteLeave');
    next()
  }

};
</script>
<style lang="less" scoped>
</style>


