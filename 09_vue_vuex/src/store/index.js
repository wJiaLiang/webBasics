import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
Vue.use(Vuex);
/** 
 * vuex 核心概念;
 * store: 类似容器，包含应用的大部分状态
 *         一个页面只能有一个 store; (只能new Vuex.use()一次)
 *         状态 存储是响应式的
 *         不能直接改变store 中的状态，唯一途径显示的提交 mutations;
 * State :包含所有应用级别状态的对象;
 * Getters:在组件内部获取store 中状态的函数；
 * Mutations:唯一修改状态的事件回调函数;
 * Actions:包含异步操作，提交mutation状态改变;
 * Modules:将store 分割成不同的模块;
 * 
 * */ 

// 定义一个模块;
let modleSelect = {
    state:{
        title:"我是子模块里面的值"
    },
    getters:{

    },
    mutations:{

    },
    actions:{

    }

}


// 定义一个容器
let store = new Vuex.Store({
    state:{
        count:100,
        dataList:[],
        title:"dd",
    },
    //  类似于全局函数的一个计算属性; 对某些组件取值做些限制时候用到; state 作为参数
    // https://vuex.vuejs.org/zh/guide/getters.html
    getters:{
        filterCount(state){
            return state.count>120?120:state.count;
        },
        filtersCount2(state){
            return state.count+10
        }
    },
    // mutations只能是同步操作，异步不行;
    mutations:{
        addIncrement(state,payload){
            state.count += payload.n;
        },
        delIncrement(state,payload){
            state.count -= payload.m;
        },
        // 设置数据
        setdata(state,payload){
            state.dataList = payload
        }
    },
    // 这里可以是一些异步操作;
    actions:{
        delAction(context,payload){
            setTimeout(()=>{
                context.commit('delIncrement',payload);
            },1000)
        },
        addAction(context,payload){
            setTimeout(()=>{
                // context 包含当前vuex实例的一些方法; 再提交一个 mutations
                context.commit('addIncrement',payload);
                
            },1000)

            // 这个异步结束触发另一个异步;
            context.dispatch('testAction',{s:3})
        },
        // 
        testAction(context,p){
            console.log(p)
        },
        //  在这里发送请求，获取数据
        getDataList(context){
            axios.get('https://www.easy-mock.com/mock/5c7563d05f2ea71602660264/weitest/list')
            .then(response=>{
                console.log(response);
                context.commit('setdata',response.data.data)

            })
            .catch(error=>{
                console.log(error);
            })

        }
    },
    // 定义一个模块
    modules:{
        modleSelect
    },
})

export default store