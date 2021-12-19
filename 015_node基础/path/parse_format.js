const {parse,format} = require('path');

const filePath = '/user/local/nodule/n/s/nab.json';
const ret = parse(filePath);
console.log(ret);

/*
 { root: '/',
  dir: '/user/local/nodule/n/s',
  base: 'nab.json',
  ext: '.json',
  name: 'nab' }


 */

console.log(format(ret));   ///user/local/nodule/n/s\nab.json