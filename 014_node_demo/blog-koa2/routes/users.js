const router = require('koa-router')()

router.prefix('/users')   // 路由前缀 访问路径为 localhost:8000/users/bar;

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
