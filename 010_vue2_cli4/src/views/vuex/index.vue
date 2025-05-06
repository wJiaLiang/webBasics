<template>
    <div>
        <div>
            vuex 测试
        </div>
        <div class="main1200 mt20 br_1 p20">
            <h3>App模块状态</h3>
            <div class="mb10">
                <p>应用名称: {{ appName }}</p>
                <p>应用版本: {{ app.version }}</p>
                <p>当前主题: {{ currentTheme }}</p>
                <p>加载状态: {{ isLoading ? '加载中' : '未加载' }}</p>
                <p>侧边栏状态: {{ sidebarStatus ? '打开' : '关闭' }}</p>
            </div>
            <div class="mb20">
                <button @click="setLoading(!isLoading)" class="btn mr10">切换加载状态</button>
                <button @click="setTheme(theme === 'light' ? 'dark' : 'light')" class="btn mr10">切换主题</button>
                <button @click="toggleSidebar" class="btn">切换侧边栏</button>
            </div>
            <div class="mb20">
                <button @click="setHand" class="btn mr10">实例上方法切换加载状态</button>
                
            </div>

            <h3 class="mt20">User模块状态</h3>
            <div class="mb10">
                <p>登录状态: {{ isAuthenticated ? '已登录' : '未登录' }}</p>
                <p v-if="userInfo">用户信息: {{ userInfo.name || '无名称' }}</p>
                <p>Token: {{ token || '无' }}</p>
            </div>
            <div class="mb20">
                <button @click="login({name: '测试用户', token: 'test-token-123'})" class="btn mr10">登录</button>
                <button @click="logout" class="btn mr10">登出</button>
                <button @click="updateUserInfo({name: '更新后的用户', token: token})" class="btn">更新用户信息</button>
            </div>
        </div>
    </div>
</template>

<script>
// 导入Vuex辅助函数
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: "vuexindex",
    data() {
        return {
            imgList: []
        }
    },
    computed: {
        // 使用mapState辅助函数映射state
        // 从app模块映射state
        ...mapState('app', {
            app: state => state.app,
            theme: state => state.theme
        }),
        // 从user模块映射state
        ...mapState('user', ['userInfo']),
        
        // 使用mapGetters辅助函数映射getters
        // 从app模块映射getters
        ...mapGetters('app', [
            'isLoading',
            'currentTheme',
            'sidebarStatus'
        ]),
        // 从user模块映射getters
        ...mapGetters('user', [
            'isAuthenticated',
            'token'
        ]),
        
        // 自定义计算属性
        appName() {
            return this.app.name
        }
    },
    mounted() {
        // 初始化时不再调用getImgList
        console.log('Vuex组件已挂载')
    },
    methods: {
        // 使用mapActions辅助函数映射actions
        // 从app模块映射actions
        ...mapActions('app', [
            'setLoading',
            'setTheme',
            'toggleSidebar'
        ]),
        // 从user模块映射actions
        ...mapActions('user', [
            'login',
            'logout',
            'updateUserInfo'
        ]),
        setHand() {
            // 通过$store直接调用app模块的setLoading方法
            this.$store.dispatch('app/setLoading', true)
            this.$store
        }
    },

}
</script>
<style lang="less" scoped>
.btn {
    padding: 8px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.btn:hover {
    background-color: #45a049;
}
h3 {
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
}
</style>