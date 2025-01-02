<template>
    <div class="warpBox" style="border:1px solid red;">
        <header class="header tc fs16">
            <ul class="flex_r f_ai_c">
                <li>
                    <NuxtLink to="/">首页</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/home"> home/index页 </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/home/home"> home/home页 </NuxtLink>
                </li>
            </ul>
            <div>
                
            </div>
        </header>
    </div>
</template>
<script setup>
let current = ref(['home']);



</script>

<style lang="scss" scoped>
.header {
    width: 1200px;
    margin: 0 auto;
    border: 1px solid greenyellow;

    li {
        padding: 0px 20px;
    }
}

.warpBox {
    text-align: center;
    width: 100vw;
    line-height: 60px;
}
</style>