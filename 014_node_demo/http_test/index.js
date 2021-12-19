const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    let method = req.method;
    let url = req.url;
    let path = url.split('?')[0];
    let query = querystring.parse(url.split('?')[1]);
    console.log('url', url);

    // 设置返回的数据格式
    res.setHeader('Content-type', 'application/json');
    // 返回的数据;
    const resData = { method, url, path, query };
    // 返回
    if (method === 'GET') {
        res.end(JSON.stringify(resData));

    }

    if (method === 'POST') {
        let postData = '';

        req.on('data', chunk => {
            postData += chunk.toString();

        })

        req.on('end', () => {
            resData.postData = postData;
            res.end(JSON.stringify(resData));

        })
    }


})

server.listen(8000, () => {
    console.log('server listent 8000 prot');
})