<template>
  <div>
    <h1>我是父组件</h1>
    <h1>{{ person.name }}</h1>
    <h1>{{ person.age }}</h1>
    <BaseSon />
  </div>
</template>

<script>

import BaseSon from "./components/BaseSon.vue";

export default {
  provide() {
    return {
      msg: this.msg,
      person: this.person
    }
  },
  components: {
    BaseSon,
  },

  data() {
    return {
      msg: "我是父组件的消息",
      person: {
        name: "张三",
        age: 18,
      }
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