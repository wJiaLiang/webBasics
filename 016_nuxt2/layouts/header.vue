<template>
    <div>
        <div class="nav fs16 pt20 mt20">
       
        <ul class="clearfix ">
            <li class="fl pl10 pr10"> <nuxt-link to="/index"> index </nuxt-link>     </li>
            <li class="fl pl10 pr10"> <nuxt-link to="/home"> 主页 </nuxt-link>     </li>

            <!-- _id.vue 下划线表示的是一个动态的名称 -->
            <li class="fl pl10 pr10"> <nuxt-link to="/home/1"> 主页详情 </nuxt-link>     </li>

            <li class="fl pl10 pr10"> <a href="/article"> 文章页面 </a> </li>
            <li class="fl pl10 pr10"> <a href="/news"> 新闻页面 </a> </li>
            <li class="fl pl10 pr10"> <a href="/list"> list页面 </a> </li>
            <li class="fl pl10 pr10"> <a href="/order"> server加载 </a> </li>
            <li class="fl pl10 pr10"> <a href="/imglist"> client加载 </a> </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
    validate(){

        
    }
}
</script>

<style scoped>

</style>