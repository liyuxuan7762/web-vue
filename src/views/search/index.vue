<!--
 * @Author: Li 776239423@qq.com
 * @Date: 2025-12-10 09:41:18
 * @LastEditors: Li 776239423@qq.com
 * @LastEditTime: 2025-12-11 14:06:55
 * @FilePath: \web-vue\src\views\search\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="search">
    <van-nav-bar title="商品搜索" left-arrow @click-left="$router.go(-1)" />
    <van-search v-model="keyword" show-action placeholder="请输入搜索关键词" clearable>
      <template #action>
        <div @click="handleSearch(keyword)">搜索</div>
      </template>
    </van-search>

    <!-- 搜索历史 -->
    <div class="search-history">
      <div class="title">
        <span>最近搜索</span>
        <van-icon v-if="searchHistory.length > 0" @click="removeSearchHistory" name="delete-o" size="16" />
      </div>
      <div class="list">
        <div class="list-item" v-for="item in searchHistory" :key="item" @click="handleSearch(item)">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchHistory, setSearchHistory } from '@/utils/storage'
export default {
  name: 'SearchIndex',
  data() {
    return {
      searchHistory: getSearchHistory(),
      keyword: ''
    }
  },
  methods: {
    handleSearch(item) {
      if (this.searchHistory.includes(item)) {
        this.searchHistory.splice(this.searchHistory.indexOf(item), 1)
      }
      this.searchHistory.unshift(item)
      setSearchHistory(this.searchHistory)
      this.$router.push(`/searchlist?keyword=${item}`)
    },
    removeSearchHistory() {
      this.searchHistory = []
      setSearchHistory(this.searchHistory)
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  .searchBtn {
    background-color: #fa2209;
    color: #fff;
  }

  ::v-deep .van-search__action {
    background-color: #c21401;
    color: #fff;
    padding: 0 20px;
    border-radius: 0 5px 5px 0;
    margin-right: 10px;
  }

  ::v-deep .van-icon-arrow-left {
    color: #333;
  }

  .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }

  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 10px;
    gap: 5%;
  }

  .list-item {
    width: 30%;
    text-align: center;
    padding: 7px;
    line-height: 15px;
    border-radius: 50px;
    background: #fff;
    font-size: 13px;
    border: 1px solid #efefef;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
}
</style>