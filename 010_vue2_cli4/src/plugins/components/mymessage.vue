<template>
    <div>
        <el-dialog :title="title" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>{{ message || '这是一段信息' }}</span>
            <span slot="footer" class="dialog-footer flex_r f_jc_c">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button :type="type || 'primary'" @click="okHand">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        
    },
    data() {
        return {
            dialogVisible: false,
            message: '',
            title: '',
            type: 'primary',
        }
    },
    methods: {
        okHand(){
            this.$emit('okHand',{success:true});
        },
        handleClose(done) {
            done();
        }
    },
    computed: {

    }

}

</script>
