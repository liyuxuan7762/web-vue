<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-01 21:14:36
 * @Description  : 
-->
<template>
  <!-- 列表区域 -->
  <section class="main">
    <ul class="todo-list">
      <li v-for="(item, index) in todos" :key="item.id" class="todo">
        <div class="view">
          <span class="index">{{ index + 1 }}</span>
          <label>{{ item.title }}</label>
          <button class="destroy" @click="removeTodo(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    removeTodo(id) {
      this.$emit("removeTodo", id);
    },
  },
};
</script>

<style>
</style>