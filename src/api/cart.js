/**
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-11 20:39:09
 * @Description  : 购物车相关接口
*/

import request from "@/utils/request";

// 将商品添加到购物车
export const addToCart = (goods) => {
  return request({
    url: 'cart/add',
    method: 'post',
    headers: {
      platform: 'h5',
    },
    data: goods
  })
}

// 获取购物车商品总数量
export const getCartTotal = () => {
  return request({
    url: 'cart/total',
    method: 'get',
    headers: {
      platform: 'h5',
    },
  })
}

// 获取购物车中商品列表
export const getCartList = () => {
  return request.get('cart/list')
}

// 更新购物车商品数量
export const updateCartQty = ({ goodsId, goodsSkuId, goodsNum }) => {
  return request({
    url: 'cart/update',
    method: 'post',
    headers: {
      platform: 'h5',
    },
    data: {
      goodsId,
      goodsSkuId,
      goodsNum
    }
  })
}

// 删除商品
export const deleteCartItem = (cartIdList) => {
  return request({
    url: '/cart/clear',
    method: 'post',
    data: {
      cartIdList
    }
  })
}