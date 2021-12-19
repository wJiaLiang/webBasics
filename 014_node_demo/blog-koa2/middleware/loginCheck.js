let {ErrorModel} = require('../model/resModel')

// 判断是否登录
module.exports = async (ctx,next)=>{
    if(ctx.session.username){
       await next();
        return
    }
    ctx.body = new ErrorModel('未登录');
}