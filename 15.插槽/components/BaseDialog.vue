<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-03 19:31:57
 * @Description  : 基础弹窗组件
-->
<template>
  <div class="dialog">
    <div class="header">
      <slot name="header">对话框</slot>
    </div>
    <div class="content">
      <slot name="content">你确定要关闭吗</slot>
    </div>
    <div class="footer">
      <slot name="footer">这里应该放按钮</slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.content {
  padding: 10px;
}
.footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
.btn {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>