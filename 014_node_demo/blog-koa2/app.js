const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const morgan = require('koa-morgan') //日志
const path = require('path');
const fs = require('fs');

const {MYSQL_CONF,REDIS_CONF} = require('./conf/db')

const index = require('./routes/index')
const users = require('./routes/users')
const blog = require('./routes/blog')
const user = require('./routes/user')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  
})

// session 配置 密匙,用于加密的密匙串;
app.keys = ['weihsdkl'];
app.use(session({
    cookie:{
      path:'/',
      httpOnly:true,
      maxAge:24*60*60*1000
    },
    store:redisStore({
      all:`${REDIS_CONF.host}:${REDIS_CONF.port}`,                   //本地redis或者线上的redis;
    })
}))


//  记录日志的中间件;
const ENV = process.env.NODE_ENV;
if(ENV !== 'production'){
  app.use(morgan('dev'));
}else{  
  const logfileName = path.join(__dirname,'logs','access.log');
  const writesStream = fs.createWriteStream(logfileName,{flags:'a'})

  app.use(morgan('combined',{
    stream:writesStream
  }));
}

 
// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(blog.routes(),  blog.allowedMethods())
app.use(user.routes(),  user.allowedMethods())

console.log('server run on localhost:8000')

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
