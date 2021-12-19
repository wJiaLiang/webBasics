const handleUserRouter = require("./src/router/user");
const handleBlogRouter = require("./src/router/blog");
const { get, set } = require("./src/db/redis");
const querystring = require("querystring");
const { access }= require('./src/utils/log');

//  获取cookie的过期时间：
const getCookieExpires = () => {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    console.log("toGMTString", d.toGMTString()); // 把时间转换成GMT格式;
    return d.toGMTString();
};
/**
 * 目前session 是直接放在nodejs进程内存中的
 * 进程内存有限,访问量过大，内存爆曾;
 * 多进程之间内存无法共享;
 * */

//  定义到外面,不要定义在路由中;  注释掉 保存在redis中而不是保存在 这个全局变量中;
// const SEESION_DATA = {};

// 用promise 来解析请求数据 处理post 请求带来的数据;
const getPostData = req => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== "POST") {
            resolve({});
            return;
        }
        if (req.headers["content-type"] !== "application/json") {
            resolve({});
            return;
        }
        let postData = "";
        req.on("data", chunk => {
            postData += chunk.toString();
        });
        req.on("end", () => {
            if (!postData) {
                resolve({});
                return;
            } 
            resolve( JSON.parse(postData) );
        });
    });
    return promise;
};

const serverHandle = (req, res) => {
    console.log(req);

    //记录日志
    access(`${req.method} -- ${req.url} -- ${req.headers['user-agent']} -- ${Date.now()}`);

    // 设置返回json的数据格式;
    res.setHeader("Content-type", "application/json");
    const url = req.url;

    //  解析query
    req.query = querystring.parse(url.split("?")[1]);

    //  解析 cookie;
    req.cookie = {};
    const cookieStr = req.headers.cookie || ""; //'k1=v1;k2=v2'
    cookieStr.split(";").forEach(item => {
        if (!item) {
            return;
        }
        const arr = item.split("=");
        const key = arr[0].trim();
        const val = arr[1].trim();
        console.log(key, val);
        req.cookie[key] = val;
    });

    // 解析session 数据;
    // let needsetSession = false;
    // let userId = req.cookie.userid;
    // if(userId){
    //     if(!SEESION_DATA[userId]){
    //         SEESION_DATA[userId] = {};
    //     }
    // }else{
    //     needsetSession = true;
    //     userId = `${Date.now()}_${Math.random() }`
    //     SEESION_DATA[userId] = {};
    // }
    // req.session = SEESION_DATA[userId];

    // 解析 session 使用redis;
    let needsetSession = false;
    let userId = req.cookie.userid;
    console.log("userId", userId);
    if (!userId) {
        needsetSession = true;
        userId = `${Date.now()}_${Math.random()}`;
        // 初始化session;
        set(userId, {});
    }
    // 获取session;
    req.sessionId = userId;
    get(req.sessionId)
        .then(sessionData => {
            if (sessionData == null) {
                // 初始化 redis中的session 值;
                set(req.sessionId, {});
                // 设置 session;
                req.session = {};
            } else {
                req.session = sessionData;
                console.log("获取session", req.session);
            }
            return getPostData(req);
        })
        .then(postData => {
            req.body = postData;
            console.log("接收的postData参数", postData);
            // 处理 blog 路由;
            // const blogData = handleBlogRouter(req,res);
            // if(blogData){
            //     res.end( JSON.stringify(blogData));
            //     return;
            // }
            const blogResult = handleBlogRouter(req, res);
            // console.log('博客模块',blogResult);
            if (blogResult) {
                blogResult.then(blogData => {
                    if (needsetSession) {
                        res.setHeader(
                            "Set-Cookie",
                            `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
                        );
                    }
                    res.end(JSON.stringify(blogData));
                });
                return;
            }

            // 处理用户相关路由 user 路由;
            const userData = handleUserRouter(req, res);
            // console.log('用户模块',userData)
            if (userData) {
                userData.then(userres => {
                    if (needsetSession) {
                        res.setHeader(
                            "Set-Cookie",
                            `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
                        );
                    }

                    res.end(JSON.stringify(userres));
                });
                return;
            }

            //  404;
            res.writeHead(404, { "Content-type": "text/plain" });
            res.write("404 Not Fount\n");
            res.end();
        });
};
//    dev:process.env.NODE_ENV,
module.exports = serverHandle;

/**
 * 0 bin目录下的   www.js 创建服务
 * 1 在app.js中 解析参数,路径,
 * 2 匹配到对应的路由，
 * 3 再跳到对应的控制器 中执行sql 获取数据,在 resModel 中组装数据返回;
 * 4 返回数据;
 *
 *
 * */
