<template>
    <div class="main1200">
        <div class="fs20">
            {{ data.page }}
        </div>
        <a-space wrap>
            <a-button type="primary">Primary Button</a-button>
            <a-button>Default Button</a-button>
            <a-button type="dashed">Dashed Button</a-button>
            <a-button type="text">Text Button</a-button>
            <a-button type="link">Link Button</a-button>
        </a-space>
    </div>
</template>
<script setup>
let data = reactive({
    page: "首页"
})

</script>
<style lang="scss" scoped>
.ba {
    color: gray;
}
</style>
