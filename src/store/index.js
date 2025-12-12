/*
 * @Author: Li 776239423@qq.com
 * @Date: 2025-12-08 10:47:59
 * @LastEditors: Li 776239423@qq.com
 * @LastEditTime: 2025-12-08 12:02:16
 * @FilePath: \web-vue\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cart from  './modules/cart'


Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    user,
    cart
  }
})
export default store
