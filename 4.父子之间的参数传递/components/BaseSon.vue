<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-01 20:20:36
 * @Description  : 子组件
-->
<template>
  <!-- STEP03 子组件中使用props接收父组件传递过来的数据 -->
  <div class="app">
    <div>{{ title }}</div>
    <button @click="changeTitle">点击修改数据</button>
  </div>
</template>

<script>
export default {
  // STEP02 使用props接收父组件传递过来的数据
  props: ["title"],
  methods: {
    changeTitle() {
      // 子组件中不能直接修改props中的数据
      // this.title = "Hello Vue";
      // 正确的做法是通过触发事件，通知父组件修改数据
      this.$emit("changeTitle", "Hello Vue");
    },
  },
};
</script>
<style>
div {
  border: 1px solid red;
  margin: 20px auto;
}
</style>