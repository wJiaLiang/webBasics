const {normalize} = require('path');

// 处理不规范的路径,让其变得规范些;
// 
console.log(normalize('/uer//ban/s'))
console.log(normalize('/uer//ban/../s'))