const { getList,
        getDetail, 
        newBlog,
        updateBlog,
        delBlog} = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

// 统一的登录验证函数;
const loginCheck = (req)=>{
    if(!req.session.username){
        return Promise.resolve( new ErrorModel('未登录') );
    }
    // 没有设置 return就表示返回一个空数据;
}

const handleBlogRouter = (req,res)=>{
    let method = req.method;
    let url = req.url;
    let path = url.split('?')[0];

    const id = req.query.id;

    //  获取博客园列表;
    if(method === 'GET'&& path === '/api/blog/list'){
        let author = req.query.author ||'';
        let keyword = req.query.keyword ||'';

        // const listData = getList(author,keyword);
        // return new SuccessModel(listData);

        // 表示从管理中心获取取自己的博客列表;
        if(req.query.isadmin){
            const loginCheckResult = loginCheck(req);
              // 未登录
            if(loginCheckResult){
                return loginCheckResult
            }
            // 强制查询自己的博客;
            author = req.session.username;
        }

        const result = getList(author,keyword);
        console.log('获取结果',result);
        return result.then((res)=>{
            return new SuccessModel(res);
        })
    }

    //  获取博客详情;
    if(method === 'GET'&& path === '/api/blog/detail'){
        // const data = getDetail(id);
        // return new SuccessModel(data);
       return getDetail(id).then(res=>{
            return new SuccessModel(res);
        })
    }

    //  新建一篇博客;
    if(method === 'POST'&& path === '/api/blog/new'){
        // const data =  newBlog(req.body);
        // return new SuccessModel(data);
        const loginCheckResult = loginCheck(req);
        if(loginCheckResult){
            return  loginCheckResult
        }

        req.body.author = req.session.username;
        let result = newBlog(req.body);
        return result.then(data=>{
            return new SuccessModel(data);
        })
    }

    // 更新一篇博客;
    if(method === 'POST' && path === '/api/blog/update'){

        const loginCheckResult = loginCheck(req);
        if(loginCheckResult){
            return loginCheckResult
        }

       let res =  updateBlog(id,req.body);
      return res.then(val=>{
            if(val){
                    return new SuccessModel('成功');
            }else{
                    return new ErrorModel('失败');
            }
       })

    }

    //  删除 博客;
    if(method === "POST" && path === '/api/blog/del'){

        const loginCheckResult = loginCheck(req);
        if(loginCheckResult){
            return loginCheckResult
        }

        const author = req.session.username;  // 假数据,实际开发中改成真实的用户名;
        let result = delBlog(id,author);
       return result.then(val=>{
            if(val){
                return new SuccessModel('删除成功');
            }else{
                return new ErrorEvent('删除失败');
            }
        })
        
    }

}
module.exports = handleBlogRouter;