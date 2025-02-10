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
let data = reactive({
    page: "首页"
})
onMounted(()=>{
    

})
if(import.meta.client){
    let res = await useFetch("/ofa-admin/open-api/webpageapp/config",{});
    console.log("res",res);
}




</script>
<style lang="scss" scoped>
.ba {
    color: gray;
}
</style>
