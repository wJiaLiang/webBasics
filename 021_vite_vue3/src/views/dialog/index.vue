<template>
  <div class="pl30 pr30 pt30">
    <a-button type="primary" @click="openDialog">打开弹框</a-button>
    <div style="margin-top: 20px;">
      <p v-if="dialogResult">弹框结果: {{ JSON.stringify(dialogResult) }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref,getCurrentInstance } from 'vue';

// 获取当前实例，用于访问全局属性
const { proxy } = getCurrentInstance();
const dialogResult = ref(null);

// 打开弹框并使用Promise处理结果
const openDialog = async () => {
  try {
    // 第一次调用
    const res = await proxy.$myDialog({
      message: 'Hello Vue3!',
      title: '提示信息',
      type: 'primary'
    });
    console.log('第一次弹框结果:', res);
    dialogResult.value = res;
    
    // 如果用户点击了确定，可以继续弹出第二个弹框
    if (res.success) {
      const res2 = await proxy.$myDialog({
        message: '您点击了确定按钮，这是第二次调用',
        title: '操作成功',
        type: 'success'
      });
      console.log('第二次弹框结果:', res2);
      dialogResult.value = res2;
    }
  } catch (error) {
    console.error('弹框操作出错:', error);
  }
};
</script>
