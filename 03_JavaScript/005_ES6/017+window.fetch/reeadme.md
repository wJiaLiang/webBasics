### window.fetch/fetch

[火狐开发者文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

[github,fetch兼容库](https://github.com/github/fetch)

> fetch是基于Promise设计的，从上面代码也能看得出来，这就要求fetch要配合Promise一起使用。
> 正是这种设计，fetch所带来的优点正如传统 Ajax 已死，Fetch 永生总结的一样


### fetch使用的常见问题及解决办法
**fetch兼容性**
    + 只有现代高级浏览器才支持，ie,edge全系不支持;


* fetch默认不携带cookie
  ```
fetch发送请求默认是不发送cookie的，不管是同域还是跨域；那么问题就来了，
对于那些需要权限验证的请求就可能无法正常获取数据，这时可以配置其credentials项，其有3个值
    omit: 默认值，忽略cookie的发送;
    same-origin: 表示cookie只能同域发送，不能跨域发送;
    include: cookie既可以同域发送，也可以跨域发送;
    若要fetch请求携带cookie信息，只需设置一下credentials选项即;
    可 如这样 fetch(url, {credentials: 'include'});

  ```


 **fetch请求对某些错误http状态不会reject**

> 这主要是由fetch返回promise导致的，因为fetch返回的promise在某些错误的http状态下如400、500等不会reject，相反它会被resolve；只有网络错误会导致请求不能完成时，fetch 才会被 reject；所以一般会对fetch请求做一层封装

** fetch不支持超时timeout处理**

> 用过fetch的都知道，fetch不像大多数ajax库那样对请求设置超时timeout，它没有有关请求超时的feature,所以在fetch标准添加超时feature之前，都需要polyfill该特性。

** fetch跨域问题**
```
 既然是ajax库，就不可避免与跨域扯上关系；XHR2是支持跨域请求的，只不过要满足浏览器端支持CORS，
 服务器通过Access-Control-Allow-Origin来允许指定的源进行跨域，仅此一种方式
 fetch的mode配置项有3个值，如下：
     1. same-origin：该模式是不允许跨域的，它需要遵守同源策略，否则浏览器会返回一个error告知不能跨域；
     其对应的response type为basic。

     2. cors: 该模式支持跨域请求，顾名思义它是以CORS的形式跨域；当然该模式也可以同域请求不需要后端额外的CORS支持；其对应的response type为cors。

     3. no-cors: 该模式用于跨域请求但是服务器不带CORS响应头，也就是服务端不支持CORS；这也是fetch的特殊跨域请求方式；其对应的response type为opaque。

```

-------------
### ajax、axios 、 tetch之间的区别;

>JQuery ajax 是对原生XHR的封装，除此以外还增添了对JSONP的支持。经过多年的更新维护，真的已经是非常的方便了，优点无需多言；如果是硬要举出几个缺点;
>传统 Ajax 指的是 XMLHttpRequest（XHR）， 最早出现的发送后端请求技术，隶属于原始js中，核心使用XMLHttpRequest对象，多个请求之间如果有先后关系的话，就会出现回调地狱

```
$.ajax({
   type: 'POST',
   url: url,
   data: data,
   dataType: dataType,
   success: function () {},
   error: function () {}
});

axios({
    method: 'post',
    url: '/user/12345',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范


async function getaData(){
    try {
        let response = await fetch(url);
        let data = response.json();
        console.log(data);
    } catch(e) {
        console.log("Oops, error", e);
    }
}
fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch 是基于promise设计的。
Fetch的代码结构比起ajax简单多了，参数有点像jQuery ajax

```
