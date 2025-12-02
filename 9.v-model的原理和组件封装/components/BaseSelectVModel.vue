<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-02 19:27:57
 * @Description  : 
-->
<template>
  <select :value="value" @change="handleChange">
    <option value="1">选项1</option>
    <option value="2">选项2</option>
    <option value="3">选项3</option>
  </select>
</template>

<script>
export default {
  props: {
    value: String,
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style>
</style>