<template>
  <div>
    <BaseTable :data="tableData">
      <template #default="obj">
        <button @click="handleClick(obj.item)">查看</button>
      </template>
    </BaseTable>
    <BaseTable :data="tableData2">
      <template #default="obj">
        <button @click="handleDelete(obj.item)">删除</button>
      </template>
    </BaseTable>
  </div>
</template>

<script>
import BaseTable from "./components/BaseTable.vue";

export default {
  components: {
    BaseTable,
  },
  data() {
    return {
      tableData: [
        { id: 1, name: "张三", age: 18 },
        { id: 2, name: "李四", age: 20 },
        { id: 3, name: "王五", age: 22 },
      ],
      tableData2: [
        { id: 4, name: "赵六", age: 24 },
        { id: 5, name: "钱七", age: 26 },
        { id: 6, name: "孙八", age: 28 },
      ],
    };
  },
  methods: {
    handleClick(item) {
      console.log(item);
    },
    handleDelete(item) {
      this.tableData2 = this.tableData2.filter((i) => i.id !== item.id);
    },
  },
};
</script>

<style scoped>
</style>