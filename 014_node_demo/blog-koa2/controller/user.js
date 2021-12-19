
const {exec,escape}= require('../db/mysql');
const {genPassword } = require('../utils/crypto')

let  login = async (username,password)=>{
    //  模拟
    // if(username === 'wei' && password === '123'){
    //     return true
    // }else{
    //     return false;
    // }
    password = genPassword(password);
    username = escape(username);
    password = escape(password);

    // const sql = `select username, realname from user where username='${username}' and  password='${password}' `
    // 通过 escape 过滤后，就不用单引号拼接
    const sql = `select username, realname from user where username=${username} and  password=${password}`
    return await exec(sql).then(res=>{
        let resString = JSON.stringify(res);
        let resdata = JSON.parse(resString);
        console.log('数据库返回结果',resdata);
        return resdata[0] || {};
    })
}
module.exports = login;