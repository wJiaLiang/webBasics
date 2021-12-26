<template>
  <div class="commtext">  this is home page </div>
</template>

<script>
import {testHand,testHand2} from "@/utils/test.js"
export default {
    created () {
        // testHand();
    },
    mounted () {
        testHand2();
    },
    asyncData(){
        
    }
}
</script>

<style>
.commtext {
  font-size: 26px;
  text-align: center;
  margin-top: 160px;
  padding-top: 50px;
}
</style>