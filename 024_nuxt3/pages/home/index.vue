<template>
    <div class="main1200">
        <div>
            <h3>home 页面</h3>    
        </div>
    </div>
</template>
<script setup>


// 在SSR中数据将被获取两次，一次在服务器端，一次在客户端。
// const dataTwice = await $fetch('/api/item')
 
// 在SSR中，数据仅在服务器端获取并传递到客户端。
// const { data } = await useAsyncData('item', () => $fetch('/api/item'))
 
// 你也可以使用useFetch作为useAsyncData + $fetch的快捷方式
// const { data2 } = await useFetch('/api/item')

</script>
<style lang="scss" scoped>
</style>