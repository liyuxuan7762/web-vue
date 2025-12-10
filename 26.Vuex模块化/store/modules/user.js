const state = {
  name: 'zs',
  age: 18,
}
const mutations = {
  setUserInfo(state, payload) {
    state.name = payload.name
    state.age = payload.age
  }
}

const actions = {
  updateDelay(context, payload) {
    setTimeout(() => {
      context.commit('setUserInfo', payload)
    }, 1000);
  }
}

const getters = {
  UpperName(state) {
    return state.name.toUpperCase()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}