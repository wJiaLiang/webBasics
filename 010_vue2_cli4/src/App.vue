<template>
    <div id="app">
        <div id="nav" class="fs18 flex_r f_ai_c f_jc_s main1200 br_b_1_999">
            <router-link class="pl20 pr20" to="/">Home</router-link> |
            <router-link class="pl20 pr20" to="/about">About</router-link>|
            <router-link class="pl20 pr20" to="/el-upload">el-upload</router-link>|
            <router-link class="pl20 pr20" to="/leaflet">leaflet</router-link>|
            <router-link class="pl20 pr20" to="/Decimal">Decimal</router-link>|
            <router-link class="pl20 pr20" to="/vuex">vuex</router-link>
            <router-link class="pl20 pr20" to="/dialog">dialog</router-link>
        </div>
        <router-view />
        
        <!-- 字体展示区域 -->
        <div class="font-demo-section">
            <h2 class="font-alimama-bold">成都加粗</h2>
            <h2 class="font-alimama">使用阿里妈妈字体的标题</h2>
            <p class="font-alimama-thin">这是使用阿里妈妈字体（细体）的段落文字</p>
            <p class="font-alimama">这是使用阿里妈妈字体的普通段落文字</p>
            <div class="font-comparison">
                <p class="default-font">默认字体效果</p>
                <p class="font-alimama">阿里妈妈字体效果</p>
            </div>
        </div>
        
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
    font-family: 'AlimamaFangYuanTiVF', Avenir, Helvetica, Arial, sans-serif;
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

/* 字体展示区域样式 */
.font-demo-section {
    padding: 40px 20px;
    background: #f8f9fa;
    margin: 20px 0;
    border-radius: 8px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.font-demo-section h2 {
    color: #333;
    margin-bottom: 20px;
    font-size: 28px;
}

.font-demo-section p {
    margin: 15px 0;
    font-size: 16px;
    line-height: 1.6;
}

.font-comparison {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    padding: 20px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.font-comparison p {
    flex: 1;
    text-align: center;
    padding: 15px;
    margin: 0 10px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
}

.default-font {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #666;
}

.font-alimama {
    color: #2c3e50;
}

.font-alimama-thin {
    color: #42b983;
}
</style>
