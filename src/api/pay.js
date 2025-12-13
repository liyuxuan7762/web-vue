import request from '@/utils/request'

// 如果mode = cart 则需要传递cartIds
// 如果mode = buyNow 则需要传递goodsId, goodsNum, goodsSkuId
export const createPay = (mode, obj) => {
  return request({
    url: '/checkout/order',
    method: 'GET',
    params: {
      mode,
      delivery: 10,
      shopId: 0,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}

// 如果mode = cart 则需要传递cartIds remark
// 如果mode = buyNow 则需要传递goodsId, goodsNum, goodsSkuId rework
export const summitOrder = (mode, obj) => {
  return request({
    url: '/checkout/submit',
    method: 'POST',
    data: {
      mode,
      delivery: 10,
      shopId: 0,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }
  })
}