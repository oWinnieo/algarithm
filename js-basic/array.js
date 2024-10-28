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
    return Array.isArray(val) ? Array.from(val, deepCopy) : val 
}
const arr3_2 = [[1, 2, 3], ['dongdong', 'haohao', 'haha']];
const arrCopy3_2 = deepCopy(arr3_2);
console.log('arr3_2[0] === arrCopy3_1[0]', arr3_2[0] === arrCopy3_1[0])

/**
 * 4 使用值填充数组
 * 创建一个填充相同默认值的数组，传入一个类数组对象 {length} 和 返回初始化值的 Function 函数。
 */
const length = 3
const length4 = 3
const init4 = 0
const result4_1_1 = Array.from({length}, () => init4)
const result4_1_2 = Array.from({length: length4}, () => init4)
const result4_2 = Array.from({length: 4}, () => 1);
console.log('result4_1_1', result4_1_1);
console.log('result4_1_2', result4_1_2);
console.log('result4_2', result4_2);

/**
 * 5 使用不同的空对象填充数组
 * 数组中的每一个对象都是一个新对象
 */
const length5 = 3
const resultA5 = Array.from({length: length5}, () => ({}));
const resultB5 = Array(length5).fill({})
console.log('resultA5', resultA5);
console.log('resultB5', resultB5);
// 可以看出，由Array.from创建数组中的对象不是一个对象，而Array.fill()创建数组中的对象是同一个对象
console.log('resultA5[0] === resultA5[1]', resultA5[0] === resultA5[1]) // false
console.log('resultB5[0] === resultB5[1]', resultB5[0] === resultB5[1]) // true

/**
 * 6 生成数字范围
 * 可以用Array.from()生成值的范围
 */
function range (end) {
    let wd = 'a'
    return Array.from({length: 10}, (_, i) => `${wd}${i+1}`)
}
const res6 = range(4);
console.log('res6', res6)

/**
 * 7 数组去重
 * Array.from可结合Set集合实现数组的快速去重
 */
function arr7 (array) {
    return Array.from(new Set(array))
}
const res7 = arr7([1, 2, 2, 2, 3, 4, 5])
console.log('res7', res7)
