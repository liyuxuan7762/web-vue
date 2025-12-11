/*
 * @Author: Li 776239423@qq.com
 * @Date: 2025-12-11 13:40:30
 * @LastEditors: Li 776239423@qq.com
 * @LastEditTime: 2025-12-11 14:50:05
 * @FilePath: \web-vue\src\api\goods.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

// 从搜索框输入商品名称查询商品列表
export const getGoodsList = (obj) => {
	const {categoryId, goodsName, page} = obj
	return request({
		url: '/goods/list',
		method: 'get',
		params: {
			categoryId,
			goodsName,
			page
		}
	})
}

// 获取所有商品分类 分类页数据
export const getCategoryList = () => {
	return request({
		url: '/category/list',
		method: 'get'
	})
}

// 获取商品详情
export const getGoodDetail = (goodsId) => {
	return request({
		url: '/goods/detail',
		method: 'get',
		params: {
			goodsId
		}
	})
}

// 获取商品评论
export const getGoodRate = (obj) => {
	const {goodsId, limit} = obj
	return request({
		url: '/comment/listRows',
		method: 'get',
		params: {
			goodsId,
			limit
		}
	})
}