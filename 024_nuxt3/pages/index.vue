<template>
    <div class="main1200">
        <div class="fs20">
            {{ data.page }}
        </div>
        <a-space class="flex_c f_ai_s" style="border: 1px solid red;">
            <a-button type="primary">Primary Button</a-button>
            <a-button>Default Button</a-button>
            <a-button type="dashed">Dashed Button</a-button>
            <a-button type="text">Text Button</a-button>
            <a-button type="link">Link Button</a-button>
        </a-space>
        <div>

        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
const config = useRuntimeConfig()

let data = reactive({
    page: "首页"
})
onMounted(() => {
    if(import.meta.client){
        init()
    }
})
const init = async () => {
    console.log("config", config.public);
    let baseURL = config.public.baseURL;
    let url = "/system-service/open-api/config/1873658569976037378";
    const { data: apiData } = await useFetch(baseURL + url, {
        method: "get",
        headers: { appid: '1873658569976037378' }
    });
    console.log("result", apiData.value);
}




</script>
<style lang="scss" scoped>
.ba {
    color: gray;
}
</style>
