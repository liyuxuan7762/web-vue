<template>
  <div class="app">
    <BaseCounter></BaseCounter>
    <BaseCounter></BaseCounter>
  </div>
</template>

<script>
import BaseCounter from "./components/BaseCounter.vue";
export default {
  components: {
    BaseCounter,
  },
};
</script>

<style>
</style>