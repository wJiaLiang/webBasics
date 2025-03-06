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
const config = useRuntimeConfig()
if(import.meta.server){
  console.log(config.isServer)
}else{
  console.log('客户端')
}



</script>
<style>

</style>
