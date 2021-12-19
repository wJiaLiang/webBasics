const express = require('express');

// 本次请求的实例;
const app = express();


app.use((req,res,next)=>{
    console.log('请求开始...',req.method,req.url)
    next();
})

app.use((req,res,next)=>{
    req.cookie = {
        userId:'123'
    }
    console.log('第二个use只传递回调函数');
    next();
})
app.use((req,res,next)=>{
    setTimeout(()=>{
        console.log('第三个use只传递回调函数');
        req.body = {
            a:100,
            b:200
        }
        next();
    },3000)
    
})

app.use('/api',(req,res,next)=>{
    console.log('处理api路由')
    next()
})
app.get('/api',(req,res,next)=>{
    console.log('处理get,api路由')
    next()
})
app.post('/api',(req,res,next)=>{
    console.log('处理post,api路由')
    next()
})
app.get('/api/get-cookie',(req,res,next)=>{
    console.log('get/api/get-cookie');
    res.json({
        error:0,
        data:req.cookie
    })
})

app.post('/api/post-data',(req,res,next)=>{
    console.log('post-post-data');
    res.json({
        error:0,
        data:req.body
    })
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen('3000',()=>{
    console.log('server is run on prot 3000');
})