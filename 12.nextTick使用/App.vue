<template>
  <div>
    <button @click="show">显示表单</button> <br />
    <input
      ref="inputRef"
      v-show="visible"
      type="text"
      placeholder="请输入内容"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    show() {
      this.visible = true;
      this.$nextTick(() => {
        this.$refs.inputRef.focus();
      });
    },
  },
};
</script>

<style>
</style>