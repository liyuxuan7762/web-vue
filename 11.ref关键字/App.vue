<template>
  <div>
    <div class="base-box">这是一个捣乱的盒子</div>
    <BaseBox></BaseBox>
    <BaseForm ref="baseForm"></BaseForm>
    <button @click="getFormData">获取表单数据</button>
    <button @click="clearFormData">清空表单数据</button>
  </div>
</template>

<script>
import BaseBox from "./components/BaseBox.vue";
import BaseForm from "./components/BaseForm.vue";
export default {
  components: {
    BaseBox,
    BaseForm,
  },
  methods: {
    getFormData() {
      const formData = this.$refs.baseForm.getFormData();
      console.log(formData);
    },
    clearFormData() {
      this.$refs.baseForm.clearFormData();
    },
  },
};
</script>

<style>
</style>