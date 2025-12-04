<template>
  <div class="table-case">
    <BaseTable :goods="goods">
      <template #header>
        <th>编号</th>
        <th>名称</th>
        <th>图片</th>
        <th width="100px">标签</th>
      </template>
      <template #item="{ item, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>
          <img :src="item.picture" />
        </td>
        <td>
          <BaseTag v-model="item.tag"></BaseTag>
        </td>
      </template>
    </BaseTable>
    <BaseTag v-model="testData"></BaseTag>
  </div>
</template>

<script>
import BaseTag from "../src/components/BaseTag.vue";
import BaseTable from "../src/components/BaseTable.vue";
export default {
  name: "TableCase",
  components: {
    BaseTag,
    BaseTable,
  },
  data() {
    return {
      testData: "123",
      goods: [
        {
          id: 101,
          picture:
            "https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg",
          name: "梨皮朱泥三绝清代小品壶经典款紫砂壶",
          tag: "茶具",
        },
        {
          id: 102,
          picture:
            "https://yanxuan-item.nosdn.127.net/221317c85274a188174352474b859d7b.jpg",
          name: "全防水HABU旋钮牛皮户外徒步鞋山宁泰抗菌",
          tag: "男鞋",
        },
        {
          id: 103,
          picture:
            "https://yanxuan-item.nosdn.127.net/cd4b840751ef4f7505c85004f0bebcb5.png",
          name: "毛茸茸小熊出没，儿童羊羔绒背心73-90cm",
          tag: "儿童服饰",
        },
        {
          id: 104,
          picture:
            "https://yanxuan-item.nosdn.127.net/56eb25a38d7a630e76a608a9360eec6b.jpg",
          name: "基础百搭，儿童套头针织毛衣1-9岁",
          tag: "儿童服饰",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.table-case {
  width: 1000px;
  margin: 50px auto;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }

  .my-tag {
    cursor: pointer;
    .input {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
      &::placeholder {
        color: #666;
      }
    }
  }
}
</style>