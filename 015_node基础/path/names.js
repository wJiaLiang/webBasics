const {basename,dirname,extname} = require('path');

const filePath = '/user/local/bin/no.tex';

console.log(basename(filePath))  // 文件名
console.log(dirname(filePath))   // 路径
console.log(extname(filePath))  // 扩展名