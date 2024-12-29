<template>
    <div class="main1200">
        <AppHeader></AppHeader>
        <header class="header tc fs16">
            <ul class="flex_r f_ai_c">
                <li><NuxtLink to="/">首页</NuxtLink>  </li>
                <li><NuxtLink to="/home"> home页 </NuxtLink></li>
                <li><NuxtLink to="/home/home"> home/home页 </NuxtLink></li>
            </ul>   
        </header>     
        <div class="fs20">
            {{ data.page }}
        </div>
    </div>
</template>
<script setup>
let data = reactive({
    page:'首页',
})

</script>
<style lang="scss" scoped>
.header {
    width:1200px;
    margin: 0 auto;
    border:1px solid greenyellow;
    li{
    padding: 0px 20px;
}}
</style>
