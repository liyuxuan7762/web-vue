<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-02 20:26:35
 * @Description  : 
-->
<template>
  <div>
    <input v-model="name" placeholder="姓名" />
    <input v-model="age" type="text" placeholder="年龄" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    getFormData() {
      return {
        name: this.name,
        age: this.age,
      };
    },
    clearFormData() {
      this.name = "";
      this.age = "";
    },
  },
};
</script>

<style>
</style>