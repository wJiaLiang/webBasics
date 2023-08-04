<template>
    <div>
        <!-- :http-request="httpRequest" -->
        <el-upload class="avatar-uploader"  :action="requrl" :show-file-list="true" :multiple="true" list-type="picture-card"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :on-progress="progressHand"
            :on-change="changeHand">
            <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "myupload",
    data() {
        return {
            imageUrl: "",
            requrl: "http://hn216.api.yesapi.cn/?s=App.CDN.UploadImg&app_key=E193F0DA5D69237067BD2D7AE55612BF"
        }
    },
    // props 可以是数组或对象，用于接收来自父组件的数据
    props: {
        value: {
            type: Array,
            default: () => [],
        },
        // filetList:{
        //     type:Array,
        //     default:()=>[],
        // },
    },
    computed: {
        filetList() {
            return this.value;
        }
    },
    methods: {
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            console.log(isJPG);
            // const isLt2M = file.size / 1024 / 1024 < 200;
            // if (!isJPG) {
            //     this.$message.error('上传头像图片只能是 JPG 格式!');
            // }
            // if (!isLt2M) {
            //     this.$message.error('上传头像图片大小不能超过 2MB!');
            // }
            // return isJPG && isLt2M;
            return true;
        },
        progressHand(event, file, fileList) {
            console.log("progress", event, file, fileList);
            // let prog = Math.floor((event.loaded / event.total) * 100) + "%";
            // console.log("pp", prog)
            // file.url = URL.createObjectURL(file.raw);
            // this.filetList.push(file);

        },
        handleAvatarSuccess(res, file) {
            console.log(res.data, file);
            // file.path = res.data.url;
        },
        changeHand(file, fileList) {
            console.log("change", file.status, fileList)
            if (file.status == "ready") {
                console.log("rrr", file)
                file.url = URL.createObjectURL(file.raw);
                // [...this.value, file]
                this.$emit('input', fileList)
            }
        },
        httpRequest(param) {
            console.log("==>", param);
            let fileObj = param.file;
            let form = new FormData();
            form.append("file", fileObj);
            axios({
                method: 'post',
                url: this.requrl,
                data: form,
                // onUploadProgress:function(progressEvent){
                //     // param.file.percent = event.loaded / event.total * 100;
                //     let t = progressEvent.loaded / progressEvent.total * 100;
                //     console.log("进度",t);
                // }
            }).then(res => {
                console.log(res);
            })
        }
    }
}
</script>
<style scoped lang="less">
::v-deep .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 150px;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 150px;
    line-height: 150px;
    text-align: center;
}

.avatar {
    width: 200px;
    height: 150px;
    display: block;
}
</style>