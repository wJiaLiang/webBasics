const { exec } = require('../db/mysql');
const xss = require('xss');

// 获取博客列表
const getList = (author,keyword)=>{
    let sql = `select * from blogs where 1=1 `
    if(author){
        sql+=  `and author='${author}' `
    }
    if(keyword){
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc`
    return exec(sql);
}

// 获取详情;
const getDetail = (id)=>{
   let sql = `select * from blogs where id='${id}' `
   return exec(sql).then(rows=>{
       return rows[0];
   })
}

// 新建博客；
const newBlog = (blogData)=>{
    // blogData 是一个博客对象，包含title content 字段;`
    console.log('req.body',blogData);
    let blogData_t = blogData;

    let title = xss (blogData_t.title);  // 使用xss函数转换一下;
    let content = blogData_t.content;
    let createtime = Date.now();
    let author = blogData_t.author; 

    const sql = `insert into  blogs (title,content,createtime,author) values ('${title}','${content}','${createtime}','${author}')`
    return exec(sql).then(insertData=>{
        console.log('this is insert data',insertData)
        return  {
            id:insertData.insertId         // 表示是插入到数据表里的id;
        } 
    })

    
}

// 更新博客;
const updateBlog =  (id,blogData)=>{
    
    let pa_blogData = blogData;
    let title = pa_blogData.title;
    let content = pa_blogData.content;
    let author = pa_blogData.author;

    let sql =  `update blogs set title='${title}',content='${content}' where id='${id}'`
    return exec(sql).then(updateData =>{
        if(updateData.affectedRows > 0){  // 受影响的行数，如果大于0 就表示更新成功;
            return true;
        }
        return false;
    })

}

// 删除博客;
const delBlog = (id,author)=>{
    console.log('id',id);
    const sql = `delete from blogs where id='${id}' and author='${author}'`
    return exec(sql).then(delDtta=>{
        if(delDtta.affectedRows > 0){
            return true;
        }
        return false;
    })
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}