<template>
    <div>
        <div class="content tc" v-for="(item,index) in data.list" :key="index">
            个人中心{{item}} {{ index }}
        </div>
    </div>
    <Tabbar :active="3"></Tabbar>
</template>
<script setup>
import {getCurrentInstance, reactive,ref, computed, onMounted, shallowRef, watch,nextTick } from 'vue';
import Tabbar from '@/components/Tabbar/Tabbar.vue';

let data = reactive({
    list:[]
});
onMounted(() => {
    for (let i = 0; i < 100; i++) {
        data.list.push(i)
    }
   
});

</script>
<style lang="scss" scoped>
</style>