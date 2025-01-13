<template>
    <div class="main1200">
        <div class="fs15 cr_red">
            home/home页面
        </div>
        <div>手机号脱敏:{{ $maskPhone('13800138000') }}</div>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
let data = reactive({
    info:"",
})

onMounted(async () => {
    if (import.meta.client) {
    console.log('$http',$http)
        const res = await $http.get('/ofa-admin/open-api/webpageapp/config')
        console.log(res)
        data.info = res.data
    }
})

</script>
<style lang="scss" scoped>
</style>
