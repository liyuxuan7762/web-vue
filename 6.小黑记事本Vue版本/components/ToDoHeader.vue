<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-01 21:14:24
 * @Description  : 
-->
<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <input
      @keyup.enter="addTodo"
      v-model="newTodo"
      placeholder="请输入任务"
      class="new-todo"
    />
    <button class="add" @click="addTodo">添加任务</button>
  </header>
</template>

<script>
export default {
  props: {
    todos: Array,
  },
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === "") {
        return;
      }

      this.$emit("addTodo", {
        id: +new Date(),
        title: this.newTodo,
        completed: false,
      });

      this.newTodo = "";
    },
  },
};
</script>

<style>
</style>