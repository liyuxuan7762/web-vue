<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-01 21:14:45
 * @Description  : 底部导航栏
-->
<template>
  <!-- 统计和清空 -->
  <footer class="footer">
    <!-- 统计 -->
    <span class="todo-count"
      >合 计:<strong> {{ todos.length }} </strong></span
    >
    <!-- 清空 -->
    <button class="clear-completed" @click="clear">清空任务</button>
  </footer>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
  methods: {
    clear() {
      this.$emit("clear");
    },
  },
};
</script>

<style>
</style>