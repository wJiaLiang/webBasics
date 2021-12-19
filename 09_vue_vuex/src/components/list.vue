<template>
    <div>
        <ul>
            <li v-for="(item,index) in data" :key="index"  @click="getHandle(item.title)">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name:'',
    props:["data"],
    data () {
        return {

        }
    },
    watch:{},

    components: {},

    computed: {
        ...mapGetters(['filterCount','filterCount2'])
    },

    mounted() {},

    methods: {
        getHandle(t){
            // t 会传递到父组件自定义的事件函数;
            this.$emit('changeTitle',t)
        }
    },

    created() {}


}

</script>
<style lang='less' scoped>
    ul{
        
        li{
        border: 1px solid #ccc;
        width: 280px;
        height: 45px;
        line-height: 45px;
        font-size: 24px;
        text-align: center;
        border-radius: 3px;
        cursor: pointer;
    }
    }
    
</style>