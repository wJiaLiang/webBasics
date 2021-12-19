var express = require('express');
var router = express.Router();
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');
const loginCheck = require('../middleware/loginCheck');

router.get('/list', function (req, res, next) {
	let author = req.query.author || '';
	let keyword = req.query.keyword || '';

	// 表示从管理中心获取取自己的博客列表;
	if (req.query.isadmin) {
		// 未登录
		if (!req.session.username) {
			res.json(new ErrorModel('登录失败'));
		}
		// 强制查询自己的博客;
		author = req.session.username;
	}

	const result = getList(author, keyword);
	// console.log('获取结果', result);
	return result.then((lsitDta) => {
		res.json(new SuccessModel(lsitDta));
	})
});

// 获取详情;
router.get('/detail', (req, res, next) => {
	return getDetail(req.query.id).then(dataList => {
		res.json(new SuccessModel(dataList));
	})
})

router.post('/new', loginCheck, (req, res, next) => {

	// if(!req.session.username){
	// 	res.json(new ErrorModel('未登录'))
	// }
	req.body.author = req.session.username;
	let result = newBlog(req.body);
	return result.then(data => {
		res.json(new SuccessModel(data));
	})
});

router.post('/update', loginCheck, (req, res, next) => {

	let resdata = updateBlog(req.query.id, req.body);
	return resdata.then(val => {
		if (val) {
			res.json(new SuccessModel('成功'));
		} else {
			res.json(new ErrorModel('失败'));
		}
	})
});

router.post('/del', loginCheck, (req, res, next) => {
	
	const author = req.session.username; 
	let result = delBlog(req.query.id, author);
	return result.then(val => {
		if (val) {
			res.json(new SuccessModel('删除成功'));
		} else {
			res.json(new ErrorEvent('删除失败'));
		}
	})

})

module.exports = router;