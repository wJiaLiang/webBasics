<template>
    <a-modal :title="title" :visible="dialogVisible" :closable="true" @cancel="handleClose" :maskClosable="false"
        :width="width">
        <template #default>
            <div>{{ message || '这是一段信息' }}</div>
        </template>
        <template #footer>
            <div class="dialog-footer" style="display: flex; justify-content: center;">
                <a-button @click="handleClose">取 消</a-button>
                <a-button :type="type || 'primary'" @click="okHand" style="margin-left: 10px;">确 定</a-button>
            </div>
        </template>
    </a-modal>
</template>

<script setup>
import { ref, defineExpose,defineProps } from 'vue';
import {  Modal as AModal, Button as AButton } from 'ant-design-vue'

let props = defineProps({
    message: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: '提示'
    },
    type: {
        type: String,
        default: 'primary'
    },
    width: {
        type: String,
        default: '30%'
    }
})

// 组件状态
const dialogVisible = ref(false);
const message = ref('');
const title = ref('');
const type = ref('primary');
const width = ref('30%');

// 回调函数
let resolvePromise = null;

// 确认按钮处理
const okHand = () => {
    dialogVisible.value = false;
    if (resolvePromise) {
        resolvePromise({ success: true });
        resolvePromise = null;
    }
};

// 关闭处理
const handleClose = () => { 
    dialogVisible.value = false;
    if (resolvePromise) {
        resolvePromise({ success: false, canceled: true });
        resolvePromise = null;
    }
};

// 打开弹框方法
const open = (options = {}) => {
    message.value = options.message || '';
    title.value = options.title || '提示';
    type.value = options.type || 'primary';
    width.value = options.width || '30%';
    dialogVisible.value = true;

    // 返回Promise
    return new Promise((resolve) => {
        resolvePromise = resolve;
    });
};

// 暴露方法给父组件
defineExpose({
    open
});
</script>