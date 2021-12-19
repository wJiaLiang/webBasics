const Mock = require('mockjs')
const Random = Mock.Random;

//当post或get请求到/api/data路由时Mock会拦截请求并返回下面的数据
Mock.mock("/api/data",(req,res)=>{
    console.log(req,res);
    let list = [];
    for(let i = 0;i<20;i++){
        let listObj = {
            tite:Random.ctitle(4,10),
            company: Random.csentence(5, 10),
            attention_degree: Random.integer(100, 9999),//返回一个随机的整数。
            photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js')
        }
        list.push(listObj);
    }
    return {
        data: list
    }
})