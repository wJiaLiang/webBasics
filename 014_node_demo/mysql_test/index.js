const mysql = require('mysql');

// 创建连接对象;

const con = mysql.createConnection({
    host:"localhost", // 如果是线上，就是线上的地址;
    user:'root',  // 用户名;
    password:'',  // 密码;
    port:'13306', // mysql的端口;
    database:'myblog'  //数据库的名字;
})
// 开始链接;
con.connect();

// 执行sql语句
const sql = 'select from user';
const sql_update = `update user set realname='李四to' where username='lishi'`;
const sql_insert = `insert into blogs (title,content,createtime,author) values ('标题c','内容c','1556811881963','王麻子')`;

con.query(sql_insert,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})
// 关闭链接;
con.end();