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
const config = useRuntimeConfig()
// 第一种方法  判断是服务端还是客户端
if(config.isServer){
  console.log('server')
}else{
  console.log('client')
}

// 第二种方法  判断是服务端还是客户端
if(import.meta.client){
  console.log('2==>client')
  console.log(import.meta)
}else{
  console.log('2==> server')
}



</script>
<style>

</style>
