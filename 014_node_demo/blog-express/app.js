var createError = require('http-errors');
var express = require('express');
var path = require('path');
const fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');     // 生成日志的插件;

// express-session 是基于express框专门用于处理session的中间件。session的认证机制离不开cookie，需要同时使用cookieParser 中间件。
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog');
const userRouter = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const ENV = process.env.NODE_ENV;

//  记录日志的中间件;
if(ENV !== 'production'){
  app.use(logger('dev'));
}else{  
  const logfileName = path.join(__dirname,'logs','access.log');
  const writesStream = fs.createWriteStream(logfileName,{flags:'a'})

  app.use(logger('combined',{
    stream:writesStream
  }));
}


app.use(express.json());  // 这里就相当于获取前端传过来的数据; 在路由中直接可以使用 req.body中去获取;
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  // 处理cookie;
app.use(express.static(path.join(__dirname, 'public')));  // 出来public 静态文件;

let redisClient = require('./db/redis');
let sessionStore = new RedisStore({
    client:redisClient
})
app.use(session({
  secret:'ningx1234567$$',   // 密匙
  cookie:{
    path:'/',  // 默认配置
    httpOnly:true,  // 默认配置
    maxAge:24 * 60 * 60 * 1000  // 失效的时间;
  },
  store:sessionStore,   // 存入session 到 redis中去;
}))


// 注册路由  这里的路径会和 路由文件中的路径拼接 这里相当于可以设置两级路径,这里是父级,子级在 routes/的具体路由中设置
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};   // 这里的devlopment 修改成我们的 package.json中的环境变量一致;
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
