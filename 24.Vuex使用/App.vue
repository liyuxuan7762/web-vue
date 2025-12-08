<template>
  <div>
    <h2>我是父组件 --> {{ title }}</h2>
    <p>父组件的内容 {{ count }}</p>
    <input type="text" placeholder="请输入内容" :value="title" />
    <Son1 />
    <Son2 />
  </div>
</template>

<script>
import Son1 from '@/components/Son1.vue'
import Son2 from '@/components/Son2.vue'
import { mapState } from 'vuex'

export default {
  name: 'BaseApp',
  components: {
    Son1,
    Son2
  },
  computed: {
    ...mapState(['count', 'title'])
  },
  methods: {
    handleInput (e) {
      this.$store.commit('changeTitle', e.target.value)
    }
  }
}
// 安装vuex的npm命令
// npm install vuex --save
</script>

<style scoped>
div {
  border: 1px solid green;
  padding: 10px;
}
input {
  margin-bottom: 10px;
}
</style>
