<!--
 * @Author: Li 776239423@qq.com
 * @Date: 2025-12-02 14:17:45
 * @LastEditors: Li 776239423@qq.com
 * @LastEditTime: 2025-12-02 14:29:33
 * @FilePath: \web-vue\src\components\BaseSon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h1>我是子组件</h1>
    <BaseGrandSon />
  </div>
</template>

<script>
import BaseGrandSon from "./BaseGrandSon.vue";
export default {
  components: {
    BaseGrandSon,
  },
}
</script>

<style scoped>
div {
  border: 1px solid red;
  margin: 10px;
}
</style>