<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-01 22:36:10
 * @Description  : 
-->
<template>
  <!-- 订阅 -->
  <div class="sub">
    <h2>订阅消息：{{ msg }}</h2>
  </div>
</template>

<script>
import bus from "../utils/EventBus.js";
export default {
  data() {
    return {
      msg: "",
    };
  },
  created() {
    bus.$on("pub", (msg) => {
      this.msg = msg;
    });
  },
};
</script>

<style>
</style>