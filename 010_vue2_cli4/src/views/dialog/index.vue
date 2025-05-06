<template>
    <div>
        <div> 改成直接用 this 实例 调用页面弹框 </div>
        <div style="border-top: 1px solid red;">
            <el-button type="primary" @click="openDialog">打开弹框</el-button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            imgList: []
        }
    },
    methods: {
        async openDialog() {
            let res = await this.$mymessage({
                message: 'Hello Vue!',
                type: 'success'
            })
            console.log("res",res)
            let res2 = await this.$mymessage({
                message: '第二次调用',
                type: 'warning'
            })
            console.log("res2",res2)
        }
    }

}
</script>