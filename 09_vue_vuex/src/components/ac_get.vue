<template>
    <div>
        <div> action 异步操作和getter 计算状态 </div>
    </div>
</template>

<script>
export default {
    name:'',
    data () {
        return {}
    },

    props:[],

    watch:{},

    components: {},

    computed: {},

    mounted() {},

    methods: {
        delHandle(){
            //    第一个参数数 函数名字，第二个是个对象参数;
            //   this.$store.commit('delIncrement',{m:10})

         
      },
      addHandle(){

        // this.$store.commit('addIncrement',{n:5});
        //   第二种写法
        // this.$store.commit({
        //     type:'addIncrement',
        //     n:5
        // })

        // 触发一个action异步操作
        this.$store.dispatch('addAction',{n:10})

      }


    },

    created() {}


}

</script>
<style lang='less' scoped>

</style>