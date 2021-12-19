// index 表示根模块 


export const state = ()=>({
    list:[123],
    name:"kkk",
    age:24
})

export const mutations= {
    Madd(state,palyload){
        state.list.push(palyload)
    },
    M_update(state,palyload){
        state.name = palyload
    }
    
}

export const actions= {
    // 服务器端执行
    nuxtServerInit(store,context){
        /**
         * vuex 状态树
         * 可以初始化 数据 到 stroe 中 
         */ 
        // console.log("store:",store) 
        /*
            整个请求的上下文对象
        */ 
        // console.log("context:",context)

    },

    Aadd({commit},payload){
        commit('Madd',payload)
    },
   
}

export const getters = {
    getName(state){
        return state.name
    },
    getage(state){
        return state.age
    }
}
