<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-03 21:33:05
 * @Description  : 基础标签组件
-->

<template>
  <div class="my-tag">
    <input
      v-focus
      v-if="isEdit"
      ref="inp"
      class="input"
      type="text"
      placeholder="输入标签"
      :value="value"
      @blur="isEdit = false"
      @keyup.enter="saveEdit"
    />
    <div class="text" @dblclick="handleEdit" v-else>{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    handleEdit() {
      this.isEdit = true;
    },
    saveEdit(e) {
      this.isEdit = false;
      if (e.target.value.trim() !== "") {
        this.$emit("input", e.target.value);
      }
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style>
.my-tag {
  display: flex;
  align-items: center;
}
.input {
  width: 100px;
  height: 30px;
}
.text {
  margin-right: 5px;
  background-color: #00be9a;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>