let {ErrorModel} = require('../model/resModel')

// 判断是否登录
module.exports = (req,res,next)=>{
    if(req.session.username){
        next();
        return
    }
    res.json( new ErrorModel('未登录'))
}