<template>
  <div>
    <h2>我是子组件 {{ $store.state.title }}</h2>
    <p>子组件1的内容：{{ $store.state.count }}</p>
    <button @click="handleClick(1)">值 + 1</button>
    <button @click="handleDelayClick(666)">点击后1秒钟显示666</button>

    <hr />
    <p>过滤后的列表：{{ filteredList }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseSon1",
  methods: {
    handleClick(payload) {
      this.$store.commit("addCount", payload);
    },
    handleDelayClick(payload) {
      this.$store.dispatch("delayAddCount", payload);
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    title() {
      return this.$store.state.title;
    },
    filteredList() {
      return this.$store.getters.filterdList;
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
  padding: 10px;
}
</style>
