import { createStore } from 'vuex'

export default createStore({
  state: {
    count:666,
    mesg:"this is  vuex"
  },
  getters: {
    reverseMesg(state){
      return state.mesg.split("").reverse().join();
    }
  },
  mutations: {
    addCount(store){
        store.count++
    },
    setCount(store,n){
      store.count =  n
    }
  },
  actions: {
  },
  modules: {
  }
})
