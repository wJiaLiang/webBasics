// app模块
const state = {
  loading: false,
  theme: 'light',
  sidebar: true,
  app: {
    name: 'Vue2 Admin',
    version: '1.0.0'
  }
}

const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_THEME(state, payload) {
    state.theme = payload
  },
  TOGGLE_SIDEBAR(state) {
    state.sidebar = !state.sidebar
  }
}

const actions = {
  setLoading({ commit }, payload) {
    commit('SET_LOADING', payload)
  },
  setTheme({ commit }, payload) {
    commit('SET_THEME', payload)
  },
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

const getters = {
  isLoading: state => state.loading,
  currentTheme: state => state.theme,
  sidebarStatus: state => state.sidebar
}

export default {
  // namespaced: true 表示这是一个带命名空间的模块
  // 启用后，模块内部的 action、mutation 和 getter 会自动根据模块注册的路径调整命名
  // 例如: 调用 action 时需要加上模块名 'app/setLoading'
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}