<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
    <ToDoHeader @addTodo="addTodo"></ToDoHeader>
    <!-- 列表区域 -->
    <ToDoList :todos="todos" @removeTodo="removeTodo"></ToDoList>
    <!-- 统计和清空 -->
    <ToDoFooter
      v-show="todos.length"
      :todos="todos"
      @clear="clear"
    ></ToDoFooter>
  </section>
</template>

<script>
import ToDoHeader from "./components/ToDoHeader.vue";
import ToDoList from "./components/ToDoList.vue";
import ToDoFooter from "./components/ToDoFooter.vue";

export default {
  components: {
    ToDoHeader,
    ToDoList,
    ToDoFooter,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "吃饭饭12",
          completed: false,
        },
        {
          id: 2,
          title: "吃饭饭2",
          completed: false,
        },
      ],
    };
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
    clear() {
      this.todos = [];
    },
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
  },
};
</script>

<style>
</style>
