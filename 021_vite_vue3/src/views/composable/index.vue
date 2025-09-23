<template>
    <section class="pl30 pr30 pt30 pb30">

        <div class="pl20 pr20 pt20 pb20" style="border:1px solid lightblue;">
            <p>计数：{{ count }}</p>
            <a-button type="" @click="increment">增加</a-button>
        </div>

    </section>

</template>
<script setup>
import {
    getCurrentInstance,
    reactive,
    ref, computed,
    onMounted,
    shallowRef,
    watch,
    nextTick
} from 'vue';
let data = reactive({})
import { useCounter } from './useCounter'
const { count, increment } = useCounter()

/*


1. 代码组织更灵活
可以将相关逻辑按功能分组，而不是按生命周期、data、methods 等分散组织。
更易于复用和维护。

2. 组件封装更强
可以通过自定义 composable（组合函数）复用逻辑，减少重复代码。

3. 可读性更高
相关逻辑集中在一起，便于理解和维护。




*/ 



</script>
<style lang="scss" scoped></style>