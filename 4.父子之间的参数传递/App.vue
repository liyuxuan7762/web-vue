<template>
  <div class="app">
    <!-- STEP01 将要传递的数据写入到子组件中 -->
    <BaseSon :title="myTitle" @changeTitle="handleChangeTitle"></BaseSon>
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
      myTitle: "Hello Son",
    };
  },
  methods: {
    handleChangeTitle(newTitle) {
      this.myTitle = newTitle;
    },
  },
};
</script>

<style>
</style>