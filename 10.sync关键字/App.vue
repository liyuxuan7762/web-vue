<template>
  <div>
    <BaseInput :value="inputValue" @inputUpdate="handleInputUpdate"></BaseInput>
    <BaseInputVModel v-model="inputValue"></BaseInputVModel>
    <BaseCheckbox v-model="isChecked"></BaseCheckbox>
    <div>复选框是否选中：{{ isChecked }}</div>
  </div>
</template>

<script>
import BaseInput from "./components/BaseInput.vue";
import BaseInputVModel from "./components/BaseInputVModel.vue";
import BaseCheckbox from "./components/BaseCheckbox.vue";

export default {
  components: {
    BaseCheckbox,
    BaseInput,
    BaseInputVModel,
  },
  data() {
    return {
      inputValue: "请输入内容2",
      isChecked: false,
      buttonEnabled: true,
    };
  },
  methods: {
    handleInputUpdate(value) {
      console.log(value);
      this.inputValue = value;
    },
  },
};
</script>

<style>
</style>