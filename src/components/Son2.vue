<!--
 * @Author: Li 776239423@qq.com
 * @Date: 2025-12-08 10:47:59
 * @LastEditors: Li 776239423@qq.com
 * @LastEditTime: 2025-12-08 11:55:58
 * @FilePath: \web-vue\src\components\Son2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h2>我是子组件 {{ $store.state.title }}</h2>
    <p>子组件2的内容：{{ $store.state.count }}</p>
    <button>值 - 1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BaseSon2',
  computed: {
    ...mapState(['count', 'title'])
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
  padding: 10px;
}
</style>
