<template>
  <div>
    <div v-if="cartList.length > 0" class="cart">
      <van-nav-bar title="购物车" fixed />
      <!-- 购物车开头 -->
      <div class="cart-title">
        <span class="all"
          >共<i>{{ totalCount }}</i
          >件商品</span
        >
        <span class="edit" @click="handleEdit">
          <van-icon name="edit" />
          编辑
        </span>
      </div>

      <!-- 购物车列表 -->
      <div class="cart-list">
        <div
          class="cart-item"
          v-for="item in cartList"
          :key="item.goods.goods_id"
        >
          <van-checkbox
            @click="handleChange(item)"
            :value="item.selected"
            icon-size="18"
          ></van-checkbox>
          <div class="show">
            <img :src="item.goods.goods_image" alt="" />
          </div>
          <div class="info">
            <span class="tit text-ellipsis-2">{{ item.goods.goods_name }}</span>
            <span class="bottom">
              <div class="price">
                ¥ <span>{{ item.goods.goods_price_min }}</span>
              </div>
              <van-stepper
                :value="item.goods_num"
                @change="changeQty($event, item)"
              />
            </span>
          </div>
        </div>
      </div>

      <div class="footer-fixed">
        <div class="all-check">
          <van-checkbox
            v-model="checkAll"
            @click="handleCheckAll"
            icon-size="18"
          ></van-checkbox>
          全选
        </div>

        <div class="all-total">
          <div class="price">
            <span>合计：</span>
            <span
              >¥ <i class="totalPrice">{{ totalPrice }}</i></span
            >
          </div>
          <van-button
            :disabled="!payButtonEnabled"
            class="goPay"
            v-if="!isEdit"
            round
            type="info"
            @click="handlePay"
            >结算({{ totalCount }})</van-button
          >
          <div
            v-else
            :class="['delete', { disabled: !payButtonEnabled }]"
            @click="handleDelete"
          >
            删除
          </div>
        </div>
      </div>
    </div>
    <div class="empty-cart" v-else>
      <van-nav-bar title="购物车" fixed />
      <img src="@/assets/empty.png" alt="" />
      <div class="tips">您的购物车是空的, 快去逛逛吧</div>
      <div class="btn" @click="$router.push('/')">去逛逛</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { verifyLogin } from "@/utils/utils";
export default {
  name: "CartIndex",
  data() {
    return {
      checkAll: false,
      payButtonEnabled: false,
      isEdit: false,
    };
  },
  computed: {
    ...mapState("cart", ["cartList"]),
    ...mapGetters("cart", [
      "totalCount",
      "totalPrice",
      "isCheckAll",
      "selectedItems",
    ]),
  },
  methods: {
    handleChange(item) {
      this.updateCartChecked({
        goodsId: item.goods.goods_id,
        selected: !item.selected,
      });
      this.checkAll = this.cartList.every((item) => item.selected);
      this.handlePayButtonEnabled();
    },
    handleCheckAll() {
      this.setCheckStatusToAll(this.checkAll);
      this.handlePayButtonEnabled();
    },
    handlePayButtonEnabled() {
      this.payButtonEnabled = this.cartList.some((item) => item.selected);
    },
    changeQty(value, item) {
      this.updateQty({
        goodsId: item.goods.goods_id,
        goodsSkuId: item.goods_sku_id,
        goodsNum: value,
      });
    },
    handleEdit() {
      this.isEdit = !this.isEdit;

      if (this.isEdit) {
        // 编辑状态下，全选按钮取消选中
        this.checkAll = false;
      } else {
        this.checkAll = true;
      }
      this.handleCheckAll();
    },
    handleDelete() {
      const cartIds = this.selectedItems.map((item) => item.id);
      this.deleteCartItem(cartIds);
    },
    handlePay() {
      // 这里是通过购物车过去的支付请求，因此需要传递相关参数
      this.$router.push({
        path: "/pay",
        query: {
          mode: "cart",
          cartIds: this.selectedItems.map((item) => item.id).join(","),
        },
      });
    },
    ...mapActions("cart", ["getCartList", "updateQty", "deleteCartItem"]),
    ...mapMutations("cart", ["updateCartChecked", "setCheckStatusToAll"]),
  },
  async created() {
    // 检查用户是否登录
    if (!verifyLogin()) {
      return;
    }

    // 获取购物车列表 写入Vuex
    await this.getCartList();

    // 利用getter获取购物车是否全选
    this.checkAll = this.isCheckAll;

    this.handlePayButtonEnabled();

    console.log(this.selectedItems);
  },
};
</script>

<style lang="less" scoped>
// 主题 padding
.cart {
  padding-top: 46px;
  padding-bottom: 100px;
  background-color: #f5f5f5;
  min-height: 100vh;
  .cart-title {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-size: 14px;
    .all {
      i {
        font-style: normal;
        margin: 0 2px;
        color: #fa2209;
        font-size: 16px;
      }
    }
    .edit {
      .van-icon {
        font-size: 18px;
      }
    }
  }

  .cart-item {
    margin: 0 10px 10px 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 5px;

    .show img {
      width: 100px;
      height: 100px;
    }
    .info {
      width: 210px;
      padding: 10px 5px;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .bottom {
        display: flex;
        justify-content: space-between;
        .price {
          display: flex;
          align-items: flex-end;
          color: #fa2209;
          font-size: 12px;
          span {
            font-size: 16px;
          }
        }
        .count-box {
          display: flex;
          width: 110px;
          .add,
          .minus {
            width: 30px;
            height: 30px;
            outline: none;
            border: none;
          }
          .inp {
            width: 40px;
            height: 30px;
            outline: none;
            border: none;
            background-color: #efefef;
            text-align: center;
            margin: 0 5px;
          }
        }
      }
    }
  }
}

.footer-fixed {
  position: fixed;
  left: 0;
  bottom: 50px;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  .all-check {
    display: flex;
    align-items: center;
    .van-checkbox {
      margin-right: 5px;
    }
  }

  .all-total {
    display: flex;
    line-height: 36px;
    .price {
      font-size: 14px;
      margin-right: 10px;
      .totalPrice {
        color: #fa2209;
        font-size: 18px;
        font-style: normal;
      }
    }

    .goPay,
    .delete {
      min-width: 100px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      background-color: #fa2f21;
      color: #fff;
      border-radius: 18px;
      border: 0;
      &.disabled {
        background-color: #ff9779;
      }
    }
  }
}

.empty-cart {
  padding: 80px 30px;
  img {
    width: 140px;
    height: 92px;
    display: block;
    margin: 0 auto;
  }
  .tips {
    text-align: center;
    color: #666;
    margin: 30px;
  }
  .btn {
    width: 110px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background-color: #fa2c20;
    border-radius: 16px;
    color: #fff;
    display: block;
    margin: 0 auto;
  }
}
</style>