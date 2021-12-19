const {sep,delimiter,win32,posix} = require('path');

console.log('set',sep);
console.log('posix,set',posix.sep);
console.log('PATH',process.env.PATH);

console.log('delimiter',delimiter);
