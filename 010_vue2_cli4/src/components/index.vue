<template>
    <div>
        <div> <el-button>按钮</el-button> </div>   
        <div>
            <!-- :filetList="ffList"  -->
            <upload v-model="ffList" ></upload>  
        </div>

        <div class="mt20 mauto contentWarp" style="min-height:500px;width:auto;">
            <ul>
                <li v-for="(item,index) in ffList" :key="index" class="mt10 mr10">
                    <p v-show="item.status == 'uploading'" class="fs16 tc "> 上传中。。。 </p>
                    <img style="width:200px;height:150px;" :src="item.url" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import upload from "./myupload.vue"
export default {
    name:"eluploads",
    data(){
        return {
            ffList:[],
        }
    },
    // 方法;
    methods:{},
    // 在实例创建完成后被立即调用。
    created () {
    },
    components:{upload}
}
</script>
<style scoped lang="less">
.contentWarp{
    background-color: blanchedalmond;
}
</style>