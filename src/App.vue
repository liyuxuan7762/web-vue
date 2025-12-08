<template>
  <div id="apa">
    <BankCard
      name="Gega Smith"
      role="OverBridge Expert"
      card-number="4756999988889018"
      balance="3.469.52"
    />
  </div>
</template>

<script>
import BankCard from "@/components/BankCard.vue";
export default {
  name: "h5-wrapper",
  components: {
    BankCard,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
      &.router-link-active {
        color: #fa0;
      }
    }
  }
}
</style>