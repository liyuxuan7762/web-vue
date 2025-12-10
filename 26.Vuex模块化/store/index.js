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

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    count: 0,
    title: 'Hello from Vuex',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  },
  mutations: {
    addCount(state, payload) {
      state.count += payload
    },
    changeTitle(state, payload) {
      state.title = payload
    },
    subCount(state, payload) {
      state.count -= payload
    },
    setCount(state, payload) {
      state.count = payload
    }
  },
  actions: {
    delayAddCount(context, payload) {
      setTimeout(() => {
        context.commit('setCount', payload)
      }, 1000
      );
    }
  },
  getters: {
    filterdList(state) {
      return state.list.filter(item => item > 5)
    }
  },
  modules: {
    user,
  }
})
export default store
