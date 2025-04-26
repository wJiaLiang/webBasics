<template>
    <div id="app">
        <div id="nav" class="fs18 flex_r f_ai_c f_jc_s main1200 br_b_1_999">
            <router-link class="pl20 pr20" to="/">Home</router-link> |
            <router-link class="pl20 pr20" to="/about">About</router-link>|
            <router-link class="pl20 pr20" to="/el-upload">el-upload</router-link>|
            <router-link class="pl20 pr20" to="/leaflet">leaflet</router-link>|
            <router-link class="pl20 pr20" to="/Decimal">Decimal</router-link>|
            <router-link class="pl20 pr20" to="/vuex">vuex</router-link>
        </div>
        <router-view />
        <div class="bg_red">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {

    },
    watch: {

    },

    created() {

    },

}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
