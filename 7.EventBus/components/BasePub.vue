<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-01 22:36:24
 * @Description  : 
-->

<template>
  <!-- 发布 -->
  <div class="pub">
    <button class="pub-btn" @click="handlePub">发布</button>
  </div>
</template>

<script>
import bus from "../utils/EventBus.js";
export default {
  methods: {
    handlePub() {
      bus.$emit("pub", "Hello Vue");
    },
  },
};
</script>

<style>
</style>