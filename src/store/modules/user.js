/**
 * @Author       : Wang Chong(3436971707qq.com)
 * @Version      : V1.0
 * @Date         : 2025-12-10 19:56:23
 * @Description  : 用户模块
*/
import { getUserInfo, setUserInfo } from '@/utils/storage'

const state = {
  userInfo: getUserInfo()
}

const getters = {}

const mutations = {
  // 登录成功后，保存用户信息
  setUserInfo(state, payload) {
    state.userInfo = payload
    // 同时保存到localStorage中
    setUserInfo(payload)
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
