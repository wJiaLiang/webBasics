<template>
<div>
    <div class="clearfix">
        <div class="nav clearfix fs20 fl">
            <ul class>
                <router-link class="pl20 pr20 pt20" tag="li" exact to="/">首页axios配置</router-link>
                <router-link class="pl20 pr20 pt20" tag="li" to="/install">安装</router-link>
                <router-link class="pl20 pr20 pt20" tag="li" to="/get">get</router-link>
                <router-link class="pl20 pr20 pt20" tag="li" to="/post">post</router-link>
                <router-link class="pl20 pr20 pt20" tag="li" to="/all">执行多个并发请求</router-link>
                <router-link class="pl20 pr20 pt20" tag="li" to="/custom">自定义实例方法</router-link>
                <router-link class="pl20 pr20 pt20" tag="li" to="/response">响应结构</router-link>
                <router-link class="pl20 pr20 pt20" tag="li" to="/intercept">axios拦截器配合vue使用</router-link>
                <router-link class="pl20 pr20 pt20" tag="li" to="/cancel">取消</router-link>
                <router-link class="pl20 pr20 pt20" tag="li" to="/rem">rem</router-link>
            </ul>
        </div>

        <router-view></router-view>
    </div>

    <div class="main rem">
        <p class="fs20"> aaafff</p>
    </div>
    </div>
</template>

<script>
//  快速向下复制一行  ctrl+shift+ ↓
//  向上下移动一行    alt + ↓
// https://www.kancloud.cn/yunye/axios/234845
export default {
    name: "App",
    data: {
        app: "",
    },
    methods: {
        init() {
            console.log("33333");
        },
    },
};
</script>

<style lang="less" scoped src="./assets/css/base.css">

</style>
<style lang="less"></style>
