<template>
  <div>
    <!-- 
      https://nuxt.com.cn/modules/ant-design-vue#extractstyle-141 
      a-extract-style 解决UI库样式闪烁的问题;
    -->
    <a-extract-style>
      <NuxtLayout>
        <NuxtPage></NuxtPage>
      </NuxtLayout>
    </a-extract-style>

  </div>
</template>

<script setup>
console.log('app.vue')

</script>
<style>

</style>
