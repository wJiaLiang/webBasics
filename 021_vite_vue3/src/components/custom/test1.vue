<template>
  <div>
    <p style="text-align: center; font-size: 20px"></p>
    <section> <span @click="addHand"> test 值:  {{ aa }} </span></section>
    <input v-model="aa" />
    <div class="main1200 mt20 fs18" @click="conutHand">count:{{store.count}}</div>
    <div class="main1200 mt20 fs18" @click="conutHand">arr:{{store.arr}}</div>
    <div class="main1200 mt20 fs18"> getters: {{store.countPow}}</div>
    <hr>
    <h5 class="pt20 pb20 fs18">更新 store 数据</h5>
    <div style="border:1px solid blanchedalmond">
       <p @click="changestore">// 方法一 store.count++ </p>
       <p @click="changestore2">  // 方法二，需要修改多个数据，建议用 $patch 批量更新，传入一个对象</p>
       <p @click="changestore3"> // 方法三，还是$patch，传入函数，第一个参数就是 state </p>
    </div>
  </div>
</template>
<script setup name="test1">
import { getCurrentInstance, ref } from "vue";
import {useStore} from "../../store/store";
const store = useStore();
//
let conutHand = function(){
  store.countPlus(2)
}
let changestore = function(){
  store.count++
}
let changestore2 = function(){
  store.$patch({
    count:store.count++,
    arr:[...store.arr, 1]
  })
}
let changestore3 = function(){
  store.$patch(state=>{
    state.count++
    state.arr.push(66)
  })
}


/*-------------------------------------------------------------*/
let aa = ref(234);
const {proxy} = getCurrentInstance();
console.log("proxy",proxy); // proxy vue的实例
console.log(proxy.$getDate('0')) // 读取插件的$getDate方法
let addHand = function(){
  console.log(aa.value);
  aa.value +=aa.value;
}
</script>
<style lang="scss" scoped></style>
