import { getAddressList } from '@/api/address'
const state = {
  addressList: [],
}

const getters = {
  getDefaultAddress(state) {
    if (state.addressList.length > 0) {
      return state.addressList[0]
    }
    return {}
  },

  getLongAddr(state) {
    if (state.addressList.length > 0) {
      const { region: { city, province, region }, detail } = getters.getDefaultAddress(state)
      return `${province} ${city} ${region} ${detail}`
    }
    return ''
  },
}

const mutations = {
  setAddressList(state, list) {
    state.addressList = list
  },
}

const actions = {
  async getAddressList({ commit }) {
    const { data: { list } } = await getAddressList()
    commit('setAddressList', list)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}