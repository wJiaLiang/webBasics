var express = require('express');
var router = express.Router();
let login = require('../controller/user')
let { SuccessModel, ErrorModel } = require('../model/resModel');

/* GET users listing. */
router.post('/login', function (req, res, next) {
    const { username, password } = req.body;
    let result = login(username, password);
    return result.then(resdata => {
        if (resdata.username) {
            req.session.username = resdata.username;    //这样设置是不成功的;
            req.session.realname = resdata.realname;
            // req.session = resdata;
            res.json(new SuccessModel('登录成功'));
            return;
        }
        res.json(new ErrorModel('登录失败'));
    })
});

// 测试登录;
router.get('/get-cookie', (req, res, next) => {
    let session = req.session;
    if (session.sNum == null) {
        session.sNum = 0;
    }
    session.sNum++;
    console.log('this is:', session);
    res.json({
        sNum: session.sNum
    })
})

module.exports = router;