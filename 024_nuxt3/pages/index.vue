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
$http.get("/frontend/bannerV2/list").then(res => {
    console.log('res', res);
    if (res.code == 200) {
        data.imgs = res.rows
    }
})

let hand1 = () => {
    $http.get("/frontend/bannerV2/list").then(res => {
        console.log('hand1', res);
    })
}

onMounted(() => {
    // init()
})




</script>
<style lang="scss" scoped>
.ba {
    color: gray;
}

/* For demo */
:deep(.slick-dots) {
    position: relative;
    height: auto;
}

:deep(.slick-slide img) {
    border: 5px solid #fff;
    display: block;
    margin: auto;
    max-width: 80%;
}

:deep(.slick-arrow) {
    display: none !important;
}

:deep(.slick-thumb) {
    bottom: 0px;
}

:deep(.slick-thumb li) {
    width: 60px;
    height: 45px;
}

:deep(.slick-thumb li img) {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    display: block;
}

:deep .slick-thumb li.slick-active img {
    filter: grayscale(0%);
}
</style>
