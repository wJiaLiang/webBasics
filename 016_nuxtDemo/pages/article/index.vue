<template>
  <div class="commtext">this is article page</div>
</template>

<script>
export default {
  name: "",
  props: ["String"],
  methods: {},

  
  created() {
      console.log("this is client data")
  },
  mounted() {
      console.log("this is where data")
  },
  asyncData(){
      console.log("this is server asyncData")
  }
  
};
</script>

<style >
.commtext {
  font-size: 26px;
  text-align: center;
  margin-top: 160px;
  padding-top: 50px;
}
</style>
