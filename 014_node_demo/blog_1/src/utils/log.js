const fs = require('fs');
const path = require('path');


// 写日志
function writeLog (writeStream,log) {  
    writeStream.write(log+'\n')

}


// 生成 write Stream
function createWriteStream (flieName) { 
    let fullFileName = path.join(__dirname,'../','../','logs',flieName);
    const writeStream = fs.createWriteStream(fullFileName,{flag:'a'})
    return writeStream;
 }

 // 写访问日志

const accessWriteStream = createWriteStream('access.log');
function access(log) {  
    writeLog(accessWriteStream,log);
}
module.exports = {
    access
}

// 日志拆分