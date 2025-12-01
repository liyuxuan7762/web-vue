<template>
  <div class="app">
    <!-- STEP01 将要传递的数据写入到子组件中 -->
    <BaseSon
      :age="myage"
      :car="car"
      :hobbies="hobbies"
      @changeAge="handleChangeAge"
    ></BaseSon>
  </div>
</template>

<script>
import BaseSon from "./components/BaseSon.vue";
export default {
  components: {
    BaseSon,
  },
  data() {
    return {
      age: 12,
      hobbies: ["篮球", "足球", "跑步"],
      car: {
        brand: "奔驰",
        price: 1000000,
      },
    };
  },
  methods: {
    handleChangeAge(newage) {
      this.myage = newage;
    },
  },
};
</script>

<style>
</style>