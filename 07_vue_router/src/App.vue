<template>
  <div id="app">
    <div class="nav_box bg_999">
      <div class="nav main1200 fs30">
          <ul class="clearfix">
            <li class="fl pl20 pr20 pt20 pb20">
                <router-link to="/" exact> home </router-link> 
            </li>
            <router-link :to="{path:'/document#abc'}" 
              event="mouseover" 
              tag="li" 
              active-class="myClass"
              class="fl pl20 pr20 pt20 pb20">
              <i></i>
              <span>document</span>
            </router-link>
            <li class="fl pl20 pr20 pt20 pb20">
                <router-link to="/slider"  > slider </router-link> 
            </li>

            <li class="fl pl20 pr20 pt20 pb20">
                <router-link to="/about"  > about </router-link> 
            </li>
            <li class="fl pl20 pr20 pt20 pb20">
                <router-link to="/user"> user </router-link> 
            </li>
            <li class="fl pl20 pr20 pt20 pb20">
                <router-link to="/Plugin"> Plugin </router-link> 
            </li>

          </ul> 
      </div>
    </div>
      <div class="pl20 pt20 cur_p">
          <input class="fs28" type="button" value="后退" @click="backHandle">
          <input class="fs28" type="button" value="前进" @click="wardHandle">
          <input class="fs28" type="button" value="指定前进步数或后退步数" @click="goHandle">
          <input class="fs28" type="button" value="指定跳转路径" @click="pushHandle">
          <input class="fs28" type="button" value="替换当前路径" @click="replaceHandle">
      </div>
      <div>
        路由元信息作为路由下标：{{$route.meta.index}}
      </div>
    <!-- <transition name='left' mode="out-in"> 
      <router-view name="slider"></router-view>
      <router-view class="fs40 tc"> </router-view>
    </transition> -->

    <!--  离开 进入同时运动 按照自定义的运动模式，不需要mode运动模式 -->
    <transition :name="modes">
      <!-- <router-view name="slider"></router-view> -->
      <router-view class="fs40 tc"> </router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      modes: "right"
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
      if (to.meta.index < from.meta.index) {
        this.modes = "right";
      } else {
        this.modes = "left";
      }
    }
  },
  created() {
	  console.log('环境变量', process.env.NODE_ENV);
  },
  methods: {
    backHandle() {
      this.$router.back();
    },
    wardHandle() {
      this.$router.forward();
    },
    goHandle() {
      this.$router.go(3); // 正数为进,负数为退;
    },
    pushHandle() {
      //  可以是字符串或者对象形式; 与router-link 中的写法一致;
      this.$router.push("/document#abc");
      // this.$router.push({path:'/document'});
    },
    replaceHandle() {
      // 替换当前记录,回退的时候,变了
      this.$router.replace("/about");
    }
  }
};

//  根组件整个APP的入口;

/** 
 router-link  的各项设置:
 :to="index"   变量，定义在data中;
 :to="{path:'/home'}" 对象形式
  tag = 'li'  router-link 默认生成的标签;
  active-class  设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 类名 来全局配置。
  router-view 中设置的类名,会把这类名设置到匹配到的组件的根节点中去;
  router-link 生成的标签默认监听的是点击事件; event  == 
  exact 精确的匹配模式;
  "是否激活" 默认类名的依据是 inclusive match (全包含匹配)。 举个例子，如果当前的路径是 /a 开头的，那么 <router-link to="/a"> 也会被设置 CSS 类名。
  按照这个规则，每个路由都会激活<router-link to="/">！想要链接使用 "exact 匹配模式"，则使用 exact 属性：


*/
</script>

<style>
.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
/* https://cn.vuejs.org/v2/guide/transitions.html */
.v-enter-active {
  transition: 1s;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: 1s;
}

/*  自定义其他运动形式 */
/*  在组件中使用 name=left 字段 */
.left-enter {
  transform: translateX(100%);
}
.left-enter-to {
  transform: translateX(0px);
}
.left-enter-active {
  transition: 1s;
}

.left-leave {
  transform: translateX(0px);
}
.left-leave-to {
  transform: translateX(-100%);
}
.left-leave-active {
  transition: 1s;
}

/* right */
.right-enter {
  transform: translateX(-100%);
}

.right-enter-active,
.right-leave-active {
  transition: 1s;
}

.right-leave-to {
  transform: translateX(100%);
}


</style>
