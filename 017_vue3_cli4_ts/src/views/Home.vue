<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="mt40">
      <router-link class="pl20" to="/test01">test01</router-link>
      <router-link class="pl20" to="/test02">test02</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },
});
</script>
