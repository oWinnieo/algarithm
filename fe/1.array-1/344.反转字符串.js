/*
344. 反转字符串
简单
提示
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

示例 1：

输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
示例 2：

输入：s = ["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]

提示：

1 <= s.length <= 105
s[i] 都是 ASCII 码表中的可打印字符
*/
const reverseString = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        [str[left], str[right]] = [str[right], str[left]]
        left++
        right--
    }
    return str
}

const str1 = ["h","e","l","l","o"]
const str2 = ["H","a","n","n","a","h"]

// const res1 = reverseString(str1)
// console.log('1 res1', res1)

// const res2 = reverseString(str2)
// console.log('res2', res2)

const reverseStr_250326_1 = (str) => {
    let left = 0
    let right = str.length - 1
    while (left < right) {
        [str[left], str[right]] = [str[right], str[left]]
        left++
        right--
    }
    return str
}

const res1 = reverseStr_250326_1(str1)
console.log('reverseStr_250326_1 res1', res1)

const res2 = reverseStr_250326_1(str2)
console.log('reverseStr_250326_1 res2', res2)