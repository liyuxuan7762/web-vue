<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-02 20:21:19
 * @Description  : 
-->
<template>
  <div class="base-box" ref="baseBox">这是一个盒子</div>
</template>

<script>
export default {
  mounted() {
    // 如果使用querySelector 是在整个页面上查找，而不是在当前组件的DOM中查找
    // 所有很大概率出现UI冲突
    // 因此最好使用$refs 来获取当前组件的DOM元素

    // const box = document.querySelector(".base-box");
    // 设置背景色
    const box = this.$refs.baseBox;
    box.style.backgroundColor = "red";
  },
};
</script>

<style scoped>
</style>