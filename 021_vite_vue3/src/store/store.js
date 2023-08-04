import { defineStore } from "pinia";
export const useStore = defineStore({
    id:"myuse",
  state:()=>({
    count:12,
    arr: []
  }),
  getters:{
    countPow(state){
      return (state.count*2) + 1
    }
  },
  actions:{
    countPlus(num){
      this.count += num
    }
  }
})
