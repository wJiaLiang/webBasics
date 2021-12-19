const router = require('koa-router')()
let login = require('../controller/user')
let { SuccessModel, ErrorModel } = require('../model/resModel');
router.prefix('/api/user')

router.post('/login', async function (ctx, next) {
    const { username, password } = ctx.request.body;

    let result = await login(username, password);
    console.log('查询结果',result);
    
        if (result.username) {
            ctx.session.username = result.username;    //这样设置是不成功的;
            ctx.session.realname = result.realname;
            // req.session = resdata;
            ctx.body = new SuccessModel('登录成功');
            return;
        }
        ctx.body = new ErrorModel('登录失败');
})

router.get('/session-test', async function (ctx, next) {
    if(ctx.session.viewCount == null){
        ctx.session.viewCount = 0;
    }
    ctx.session.viewCount++;
    ctx.body = {
        erron:0, 
        viewCount:ctx.session.viewCount
    }
})

module.exports = router
