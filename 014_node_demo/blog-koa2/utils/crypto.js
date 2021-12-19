const crypto = require('crypto');

// 密匙
const SECRET_KEY = 'abc123';
// md5 加密;
function md5(param) {
  let md5 = crypto.createHash('md5');
  return md5.update(param).digest('hex');  // 后面 digest表示转换成16进制形式;
}

// 加密函数  拼接方式任意
function genPassword(password) {
  const str = `password=${password}&key=${SECRET_KEY}`
  return md5(str);
}
module.exports = {
  genPassword
}