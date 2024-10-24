/**
 * Javascript学习之路：Array.from详解
 * https://blog.csdn.net/Code_King006/article/details/131602263
 */

/**
 * 1 把类数组转换成数组
 * 将arguments关键字转化为数组，使用数组原型对象上的reduce方法
 */
function sum () {
    return Array.from(arguments).reduce((sum, val) => sum + val);
}
const res1 = sum(1, 2, 3)
console.log('res1', res1)

/**
 * 2 可迭代对象转换为数组
 */
/**
 * 2.1 字符串转换成数组
 */
const res2_1 = Array.from('demo')
console.log('res2_1', res2_1)

/**
 * 2.2 集合转换成数组
 */
const res2_2 = Array.from(new Set([1, 2]))
console.log('res2_2', res2_2)

/**
 * 2.3 映射转数组
 */
const map2_3 = new Map()
map2_3.set('orgId_1', 1);
map2_3.set('orgId_2', 2);
const res2_3 = Array.from(map2_3)
console.log('map2_3',  map2_3)
console.log('res2_3', res2_3)

const obj2_3 = {}
obj2_3['orgId_1'] = 1;
obj2_3['orgId_2'] = 2;
const res2_3_test1 = Object.entries(obj2_3)
console.log('obj2_3', obj2_3)
console.log('res2_3_test1', res2_3_test1)
const res2_3_test2 = Array.from(obj2_3)
console.log('res2_3_test2', res2_3_test2)

/**
 * 3 克隆数组
 */
/**
 * 3.1 浅拷贝
 */
const arr3_1 = [1, 2, 3]
const arrCopy3_1 = Array.from(arr3_1);
console.log('arr3_1 === arrCopy3_1', arr3_1 === arrCopy3_1);

/**
 * 3.2 利用递归进行深拷贝
 */
function deepCopy (val) { // wtest waiting
    return Array.isArray(val) ? Array.from(arr3_2, deepCopy) : val 
}
const arr3_2 = [[1, 2, 3], ['dongdong', 'haohao', 'haha']];
const arrCopy3_2 = deepCopy(arr3_2);
console.log('arr3_2[0] === arrCopy3_1[0]', arr3_2[0] === arrCopy3_1[0])