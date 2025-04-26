// user模块
const state = {
  isLoggedIn: false,
  userInfo: null,
  token: ''
}

const mutations = {
  SET_LOGIN_STATUS(state, payload) {
    state.isLoggedIn = payload
  },
  SET_USER_INFO(state, payload) {
    state.userInfo = payload
  },
  SET_TOKEN(state, payload) {
    state.token = payload
  },
  CLEAR_USER_DATA(state) {
    state.isLoggedIn = false
    state.userInfo = null
    state.token = ''
  }
}

const actions = {
  login({ commit }, userData) {
    // 这里可以添加实际的登录逻辑，如API请求等
    commit('SET_LOGIN_STATUS', true)
    commit('SET_USER_INFO', userData)
    commit('SET_TOKEN', userData.token || 'mock-token')
  },
  logout({ commit }) {
    // 这里可以添加登出逻辑
    commit('CLEAR_USER_DATA')
  },
  updateUserInfo({ commit }, userInfo) {
    commit('SET_USER_INFO', userInfo)
  }
}

const getters = {
  isAuthenticated: state => state.isLoggedIn,
  userInfo: state => state.userInfo,
  token: state => state.token
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}