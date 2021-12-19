<template>
    <div>
        <div> 我是关于页面 </div> 
        <hr>
        <div class="nav main1200 pt20 pb20">
            <ul class="fs30 clearfix fs16">
                <!--  命名视图  如何路径长,不方便管理,这时可以动态绑定 路由中的name 字段 -->
                <!-- <router-link class="fl pl2 pr20 pt20 pb20" exact to="/about" tag="li"> study </router-link>
                <router-link class="fl pl2 pr20 pt20 pb20" to="/about/work" tag="li"> work </router-link>
                <router-link class="fl pl2 pr20 pt20 pb20" to="/about/hobby" tag="li"> hobby </router-link> -->

                <router-link class="fl pl2 pr20 pt20 pb20" exact :to="{name:'About'}" tag="li"> study </router-link>
                <router-link class="fl pl2 pr20 pt20 pb20" :to="{name:'Work'}" tag="li"> work </router-link>
                <router-link class="fl pl2 pr20 pt20 pb20" :to="{name:'Hobby'}" tag="li"> hobby </router-link>
            </ul>
        </div>
        <hr>

        <router-view> </router-view>
        
    </div>
</template>
<script>
export default {
    name:'about',
    data(){
        return {

        }
    }
}
</script>
<style scoped>

</style>

