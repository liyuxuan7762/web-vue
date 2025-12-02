<template>
  <div>
    <h1>我是孙子组件</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ person.name }}</h1>
    <button @click="changeName">点击我</button>
  </div>
</template>

<script>
export default {
  inject: ["msg", "person"],
  methods: {
    changeName() {
      this.person.name = "李四";
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
  margin: 10px;
}
</style>