<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-02 19:54:45
 * @Description  : 复选框组件
-->
<template>
  <input type="checkbox" :checked="isChecked" @change="handleChange" />
</template>

<script>
export default {
  props: {
    isChecked: Boolean,
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.checked);
    },
  },
};
</script>

<style>
</style>
