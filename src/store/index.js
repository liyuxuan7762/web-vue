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

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    count: 0,
    title: 'Hello from Vuex'
  },
  mutations: {
    addCount(state, payload) {
      state.count += payload
    },
    changeTitle(state, payload) {
      state.title = payload
    }
  }
})
export default store
