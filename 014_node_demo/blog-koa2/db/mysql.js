const mysql = require('mysql');

const {MYSQL_CONF} = require('../conf/db');

//  创建连接对象;
const con = mysql.createConnection(MYSQL_CONF);

// 开始连接；
con.connect();

// 统一执行sql 的函数;
function exec (sql){
    let myPromise = new Promise((resolve,reject)=>{
        con.query(sql,(err,result)=>{
            if(err){
                console.log('查询错误',err);
                reject(err);
                return;
            }
            resolve(result);
        })
    })
   
    return myPromise;
}

module.exports = {
    exec,
    escape:mysql.escape
}