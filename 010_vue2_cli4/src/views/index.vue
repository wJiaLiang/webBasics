<template>
    <div>
        <section>
            <h2> vue-cli4.xxx 的一些配置 测试项目 </h2>
            <p> 主要测试 vue-cli 的 多环境配置,多页面配置,proxy 代理跨域设置</p>
            <a href="https://zhuanlan.zhihu.com/p/109952157"> 参考资料 </a>
            <br>
            <a href="https://github.com/staven630/vue-cli4-config"> github 地址  </a>
        </section>
        <div>
            <router-link to="/list"> list 页面 </router-link>
        </div>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    
    name:"Index",
    data(){
        return {
            list:[],
        }
    },

    // props 可以是数组或对象，用于接收来自父组件的数据
    props:[],

    // Vue 实例将会在实例化时调用 watch()，遍历 watch 对象的每一个 property。
    watch:{},

    // 计算属性
    computed:{},

    // 方法;
    methods:{},

    // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
    beforeCreate () {},

    // 在实例创建完成后被立即调用。
    created () {
        console.log('.envAll',process.env);
        console.log('process',process.env.abc);
        console.log('baseUrl',process.env.BASE_URL);
        console.log('vue_app_api',process.env.VUE_APP_API);

        // 根据时间戳返回该时间点前或后的笑话列表
        // this.appfunc.ajax('/api/content/list.php','get')
        // .then(res=>{
        //     console.log('list result',res);
        // })

        // 随机获取笑话
        this.appfunc.ajax('/api/randJoke.php','post')
        .then(res=>{
            console.log('rand result',res)
        })
        
        // 获取最新的笑话
        axios.get("/api/content/text.php",
                {   baseURL:process.env.NODE_ENV=="development"?'/':process.env.VUE_APP_API,
                    params:{key:'19a578542216aeb8a23ccf5b05a61449'},
                    headers:{'Content-Type':'application/json;charset=UTF-8'}
                })
            .then(res=>{
                console.log('text result',res);
            })

    },

    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
    beforeMount () {},

    // 实例被挂载后调用
    mounted() {},

    // 被 keep-alive 缓存的组件激活时调用。
    activated () {},

    //被 keep-alive 缓存的组件停用时调用。
    deactivated () {},

    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    beforeDestroy () {},

    // 实例销毁后调用
    destroyed () {},

    // 组件
    components:{},

    // 过滤器
    filters: {},

    // 自定义指令
    directives:{},

    //mixins 选项接收一个混入对象的数组
    mixins:[],
    // 进入这个路由时调用
    beforeRouteEnter(to,from,next){
        window.document.body.style.backgroundColor=""
        window.document.title="vue-cli4 配置参数测试"
        next()
    },

    // 离开这个路由时调用
    beforeRouteLeave(to,from,next){
        window.document.body.style.backgroundColor=""
        window.document.title="vue-cli4 配置参数测试"
        next()
    }
}
</script>
<style lang="less" scoped>
</style>