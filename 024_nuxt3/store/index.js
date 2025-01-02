import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      // `this` 是 store 实例
      this.counter++
    },
  },
})