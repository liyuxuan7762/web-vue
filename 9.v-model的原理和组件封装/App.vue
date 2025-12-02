
<template>
  <div>
    <BaseSelect :value="selectId" @handleChange="setSelectId" /><br />
    <BaseSelectVModel v-model="selectId" />
  </div>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue";
import BaseSelectVModel from "./components/BaseSelectVModel.vue";
export default {
  components: {
    BaseSelect,
    BaseSelectVModel,
  },
  data() {
    return {
      selectId: "2",
    };
  },
  methods: {
    setSelectId(id) {
      console.log(id);
      this.selectId = id;
    },
  },
};
</script>

<style>
</style>