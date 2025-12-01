<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-01 20:20:36
 * @Description  : 子组件
-->
<template>
  <!-- STEP03 子组件中使用props接收父组件传递过来的数据 -->
  <div class="app">
    <div>中学生的年龄是：{{ age }}</div>
    <div>学生的爱好是：{{ hobbies.join(",") }}</div>
    <div>学生的车是：{{ car.brand }}</div>
    <button @click="changeAge">点击修改数据</button>
  </div>
</template>

<script>
export default {
  // STEP02 使用props接收父组件传递过来的数据
  props: {
    hobbies: Array,
    car: Object,
    // age: Number,
    age: {
      type: Number,
      default: 18,
      validator(value) {
        if (value >= 15 && value <= 18) {
          return true;
        } else {
          console.error("年龄必须在15到18岁之间");
          return false;
        }
      },
    },
  },
  methods: {
    changeAge() {
      // 子组件中不能直接修改props中的数据
      // this.age = "Hello Vue";
      // 正确的做法是通过触发事件，通知父组件修改数据
      this.$emit("changeAge", "Hello Vue");
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