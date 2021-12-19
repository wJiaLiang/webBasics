
const login  = require('../controller/user');
const {SuccessModel,ErrorModel} = require('../model/resModel');
const {set,get} = require('../db/redis');


//  获取cookie的过期时间：
const getCookieExpires = ()=>{
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    console.log('toGMTString',d.toGMTString())  // 把时间转换成GMT格式;
    return d.toGMTString();
}

const handleUserRouter = (req,res)=>{
    let method = req.method;
    let url = req.url;
    let path = url.split('?')[0]

    console.log('用户',req.body);
    //  登录;
    if(method === 'POST'&& path === '/api/user/login'){
        // let { username,password } = req.query;  // 之前为get请求的时候从query中获取参数;
        let { username,password } = req.body;    // post方法是重body中获取参数;
        let result = login(username,password);

        return result.then(resdata=>{
            console.log('登录数据',resdata);
            if(resdata.username){
                // 操作cookie;  httpOnly 禁止前端修改cookie;
                // res.setHeader('Set-Cookie',`userid=${resdata.username}; path=/; httpOnly; expires=${getCookieExpires()}`)
                
                // req.session.username = resdata.username;  这样设置是不成功的;
                // req.session.realname = resdata.realname;

                req.session = resdata;
                // 同步到 resis中去;
                set(req.sessionId,req.session);
                console.log('设置redis中',req.sessionId,'值',req.session);

                return new SuccessModel('登录成功');
            }
            return new ErrorModel('登录失败');
        })
    }
    
    /** 
     * 服务端设置好了cookie后每次浏览器请求改域名的时候都携带该域名下的值
     * 登录测试：返回服务端设置的cookie值;
     * 
     * */   
    if(method === 'GET' && path === '/api/user/login-test'){   
        if(req.session.username){
            return Promise.resolve( 
                new SuccessModel({
                    session : req.session
                })
            );
        }
        console.log('session',req.session);
        return Promise.resolve(new ErrorModel('未登录'));

    }

}

module.exports = handleUserRouter;