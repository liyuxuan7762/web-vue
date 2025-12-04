<!--
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-03 19:50:33
 * @Description  : 基础表格组件
-->
<template>
  <table>
    <tr>
      <th>ID</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>操作</th>
    </tr>
    <tr v-for="(item, index) in data" :key="item.id">
      <td>{{ index + 1 }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.age }}</td>
      <td>
        <slot :item="item" msg="操作"></slot>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
</style>
