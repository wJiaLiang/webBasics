<template>
    <div class="">
        <van-tabbar v-model="Props.active" :placeholder="true" @change="changeHand">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search">高德</van-tabbar-item>
            <van-tabbar-item icon="friends-o">传单</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script setup>
import { getCurrentInstance, reactive, ref, computed, onMounted, shallowRef, watch, nextTick } from 'vue';
import { useRouter,useRoute } from 'vue-router';  
const router = useRouter();  
const route = useRoute();  
let data = reactive({
    a:12
});
let list = [
     "/",
    "/amap",
    "/leaflet",
    "/my"
]
let Props = defineProps({
    active: { type: Number, default: 0 },
});
onMounted(() => {
    console.log(router)
    console.log(route)

})
let changeHand = (e)=>{
    console.log(e)
    router.push(list[e])
    
}
</script>
<style lang="scss" scoped></style>