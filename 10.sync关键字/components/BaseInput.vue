<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-02 19:34:47
 * @Description  : 
-->
<template>
  <input type="text" :value="inputValue" @input="handleInput" />
</template>

<script>
export default {
  props: {
    inputValue: String,
  },
  methods: {
    handleInput(e) {
      this.$emit("inputUpdate", e.target.value);
    },
  },
};
</script>

<style>
</style>