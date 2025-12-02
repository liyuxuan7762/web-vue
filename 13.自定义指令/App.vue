<template>
  <div>
    <!-- 利用自定义指令实现输入框自动获取焦点 -->
    <input v-focus type="text" placeholder="请输入内容" />

    <h1 v-color="'red'">使用传值的自定义指令修改文字颜色</h1>
    <h1 v-color="color">使用传值的自定义指令修改文字颜色</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "yellow",
    };
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    color: {
      inserted(el, binding) {
        el.style.color = binding.value;
      },
      update(el, binding) {
        el.style.color = binding.value;
      },
    },
  },
};
</script>

<style>
</style>