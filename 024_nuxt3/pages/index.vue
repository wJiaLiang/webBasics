<template>
    <div class="main1200">
        <div class="fs20">
            {{ data.page }}
        </div>
        <div v-for="(item, index) in data.imgs" :key="index">
            <!-- <img style="width:100%;height:320px;" :src="convertHttpsToHttp(item.imageUrl)" alt="" /> -->
            <a href="">{{ item.title }}</a>
        </div>

        <a-space class="flex_r f_ai_s" style="border: 1px solid red;padding: 10px 10px;">
            <a-button type="primary" @click="hand1"> Primary hand1 </a-button>
            <a-button> Default </a-button>
            <a-button type="dashed"> Dashed </a-button>
            <a-button type="text"> Text </a-button>
            <a-button type="link"> Link </a-button>
        </a-space>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { $request } from '@/utils/request.js';
const config = useRuntimeConfig()

let data = reactive({
    page: "首页",
    result: null,
    imgs: [],
})
const convertHttpsToHttp = (url) => {
    if (!url) return url;
    return url.replace(/^https:/, 'http:');
}
// const { data: gdata, pending, error, refresh } = await useAsyncData(
//     'getBaner',
//     async () =>{ const {data} = await $http.get("/frontend/bannerV2/list");return data.value;},
//     {
//         server: true,  // 只在服务端执行
//         lazy: false    // 立即执行
//     }
// );
// console.log('data', gdata.value);
// data.imgs = gdata.value.rows;


let { data: res } = await $http.get("/frontend/bannerV2/list", {key:'banner',query:{id:"123"}});
console.log('srr-res', res.value);
data.imgs = res&&res.value.rows||[];


// 客户端发起请求
let hand1 = () => {
    $request("/frontend/bannerV2/list", { method: "get",query:{id:"666"} }).then(res => {
        console.log('res', res);
    })

}

</script>
<style lang="scss" scoped>
.ba {
    color: gray;
}
</style>
