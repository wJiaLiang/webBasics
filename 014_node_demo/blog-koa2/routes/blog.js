const router = require('koa-router')();
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');
const loginCheck = require('../middleware/loginCheck');

router.prefix('/api/blog')

router.get('/list', async function (ctx, next) {
    let author = ctx.query.author || '';
	let keyword = ctx.query.keyword || '';

	// 表示从管理中心获取取自己的博客列表;
	if (ctx.query.isadmin) {
		// 未登录
		if (!ctx.session.username) {
			ctx.body = new ErrorModel('登录失败');
			return;
		}
		// 强制查询自己的博客;
		author = ctx.session.username;
    }
	const listdata = await getList(author, keyword);
    ctx.body =  new SuccessModel(listdata);
   
})

router.get('/detail', async function (ctx,next) {
	let datalist = await getDetail(ctx.query.id)
	ctx.body = new SuccessModel(datalist);

})
router.post('/new', loginCheck, async function (ctx,next) {
	ctx.request.body.author = ctx.session.username;
	let result = await newBlog(ctx.request.body);
	ctx.body = new SuccessModel(result);

})
router.post('/update',loginCheck, async function (ctx,next) {
	let val = await updateBlog(ctx.query.id, ctx.request.body);

		if (val) {
			ctx.body = new SuccessModel('成功');
		} else {
			ctx.body = new ErrorModel('失败');
		}

})

router.post('/del',loginCheck, async function (ctx,next) {
	const author = ctx.session.username; 
	let val = await delBlog(ctx.query.id, author);

		if (val) {
			ctx.body = new SuccessModel('删除成功');
		} else {
			ctx.body = new ErrorEvent('删除失败');
		}

})



router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router
