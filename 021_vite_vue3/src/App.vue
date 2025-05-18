<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import zhCN from "ant-design-vue/es/locale/zh_CN";
import en_GB from "ant-design-vue/es/locale/en_GB";
// let locale = zhCN;
let locale = en_GB;
</script>

<template>
  <a-config-provider :locale="locale">
    <RouterView />
  </a-config-provider>
</template>

<style scoped>

</style>
