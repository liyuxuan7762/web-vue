import { getCartList, updateCartQty, deleteCartItem } from '@/api/cart'
const state = {
	cartList: []
}

const mutations = {
	setCartList(state, payload) {
		state.cartList = payload
	},

	updateCartChecked(state, payload) {
		const item = state.cartList.find(item => item.goods.goods_id === payload.goodsId)
		if (item) {
			item.selected = payload.selected
		}

		console.log(state.cartList)
	},

	setCheckStatusToAll(state, payload) {
		state.cartList.forEach(item => item.selected = payload)
	},

	updateQty(state, playload) {
		const { goodsId, goodsSkuId, goodsNum } = playload
		const item = state.cartList.find(item => item.goods.goods_id === goodsId)
		if (item) {
			item.goods_num = goodsNum
			item.goods_sku_id = goodsSkuId
		}
	}
}

const getters = {
	// 计算购物车商品总数量
	totalCount(state) {
		return state.cartList.reduce((pre, cur) => {
			return pre + (cur.selected ? cur.goods_num : 0)
		}, 0)
	},
	// 计算购物车商品总金额
	totalPrice(state) {
		return state.cartList.reduce((pre, cur) => {
			return pre + (cur.selected ? cur.goods_num * cur.goods.goods_price_min : 0)
		}, 0)
	},

	// 获取所有选中的item
	selectedItems(state) {
		return state.cartList.filter(item => item.selected)
	},


	// 检查购物车是否全选
	isCheckAll(state) {
		return state.cartList.every(item => item.selected)
	}

}

const actions = {
	async getCartList(state) {
		const { data: { list } } = await getCartList()
		state.commit('setCartList', list.map(item => ({ ...item, selected: true })))
	},

	async updateQty(state, payload) {
		await updateCartQty(payload)
		state.commit('updateQty', payload)
	},

	// 删除购物车商品
	async deleteCartItem(state, payload) {
		await deleteCartItem(payload)
		// 调用getCartList获取最新购物车商品列表
		await state.dispatch('getCartList')
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}