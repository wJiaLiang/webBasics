const fs = require('fs');
const path = require('path');


// //  获取文件的整个路径;
// const fullPath = path.resolve(__dirname,'flies','a.json');
// console.log('路径',fullPath);
// //  读取文件
// fs.readFile(fullPath,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());

// })


function getFlie(fliename){
    const fullPath = path.resolve(__dirname,'flies',fliename);
    let promiseObj = new Promise((resolve,reject)=>{
        fs.readFile(fullPath,(err,data)=>{
            if(err){
                reject(err)
            }
            resolve( JSON.parse( data.toString() ) );
        })
    })
    return promiseObj
}

getFlie('a.json').then(res=>{
    console.log('读取a.josn',res);
    return getFlie(res.next);
}).then(res=>{
    console.log('读取b.json',res)
    return getFlie(res.next);
}).then(res=>{
    console.log('读取c.json',res)
})

