/**
 * never类型表示的是那些永不存在的值的类型
 *
 * never类型是任何类型的子类型，也可以赋值给任何类型
 *
 *
 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
error('test');
