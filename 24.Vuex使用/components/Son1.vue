<template>
  <div>
    <h2>我是子组件 {{ $store.state.title }}</h2>
    <p>子组件1的内容：{{ $store.state.count }}</p>
    <button @click="handleClick(1)">值 + 1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BaseSon1',
  methods: {
    handleClick (payload) {
      this.$store.commit('addCount', payload)
    }
  },
  computed: {
    ...mapState(['count', 'title'])
  },
  
}

</script>

<style scoped>
div {
  border: 1px solid red;
  padding: 10px;
}
</style>
