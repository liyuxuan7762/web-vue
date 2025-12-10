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
    <button @click="subCount(1)">值 - 1</button>
    <button @click="delayAddCount(666)">点击后1秒钟显示666</button>

    <hr />

    <div>
      <p>过滤后的列表：{{ filterdList }}</p>
    </div>

    <p>名字： {{ name }}</p>

    <button @click="setUserInfo({ name: 'ww', age: 20 })">修改名字</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "BaseSon2",
  computed: {
    ...mapState(["count", "title"]),

    ...mapState("user", ["name"]),

    ...mapGetters("user", ["UpperName"]),

    ...mapGetters(["filterdList"]),
  },
  methods: {
    ...mapMutations(["subCount"]),
    ...mapActions(["delayAddCount"]),
    ...mapMutations("user", ["setUserInfo"]),
    ...mapActions("user", ["updateDelay"]),
  },
};
</script>

<style scoped>
div {
  border: 1px solid blue;
  padding: 10px;
}
</style>
