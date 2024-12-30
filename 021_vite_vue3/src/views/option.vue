<template>
    <section class="pt20" style="border:1px solid red">
        <div class="tc">
           <p> {{ data }} </p>
           <p> {{ data1 }}</p>
        </div>
        <div class="tc fs20 pt20">
            <button @click="change">修改</button>
        </div>
    </section>
</template>
<script>
import {getCurrentInstance, reactive,ref, computed, onMounted, shallowRef, watch,nextTick} from 'vue';
let data = reactive({})
export default {
    data(){
        return {
            data:"123456",
            data1:"777",
        }
    },
    computed:{
        data1(){
            return this.data1
        }
    },
    methods:{
        change(){
            this.data = "666"
            setTimeout(() => {
                this.data1 = "888";
            },2000);
        }
    }
}


</script>
<style lang="scss" scoped>
</style>