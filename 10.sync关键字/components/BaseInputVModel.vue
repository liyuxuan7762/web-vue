<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-02 19:39:38
 * @Description  : 
-->
<template>
  <input :value="value" @input="handleInput" />
</template>

<script>
export default {
  props: {
    value: String,
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style>
</style>