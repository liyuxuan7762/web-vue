<template>
  <!-- 发布订阅 -->
  <div class="pub-sub">
    <BasePub />
    <BaseSub />
    <BaseSub />
  </div>
</template>

<script>
import BasePub from "./components/BasePub.vue";
import BaseSub from "./components/BaseSub.vue";
export default {
  components: {
    BasePub,
    BaseSub,
  },
};
</script>

<style>
</style>