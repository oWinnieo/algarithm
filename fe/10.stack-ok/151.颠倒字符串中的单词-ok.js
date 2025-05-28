/*
151. 反转字符串中的单词 -> wtest 和stack有什么联系?
中等
相关标签
相关企业
给你一个字符串 s ，请你反转字符串中 单词 的顺序。

单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

 

示例 1：

输入：s = "the sky is blue"
输出："blue is sky the"
示例 2：

输入：s = "  hello world  "
输出："world hello"
解释：反转后的字符串中不能存在前导空格和尾随空格。
示例 3：

输入：s = "a good   example"
输出："example good a"
解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
 

提示：

1 <= s.length <= 104
s 包含英文大小写字母、数字和空格 ' '
s 中 至少存在一个 单词
 

进阶：如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用 O(1) 额外空间复杂度的 原地 解法。
*/
const s1 = 'the sky is blue'
const s2 = '  hello world  '
const s3 = 'a good   example'
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
};

const reverseWords_250427_1 = (str) => {
    let wArr1 = str.split(' ')
    console.log('wArr1', wArr1)
    let wArr2 = []
    let count = wArr1.length
    while (count--) {
        let target = wArr1[count]
        if (target !== '') wArr2.push(target)
    }
    return wArr2.join(' ')
}



const removeExtraSpaces_250428_1 = (strArr) => {
    let fast = 0
    let slow = 0
    console.log('strArr', strArr)
    while (fast < strArr.length) {
        if (strArr[fast] === ' ' && (fast === 0 || strArr[fast - 1] === ' ')) {
            fast++
            // console.log('strArr 1', strArr)
        } else {
            strArr[slow] = strArr[fast]
            slow++
            fast++
            // if (slow > 10) console.log('strArr 2', strArr, 'strArr[slow]', strArr[slow], 'strArr[fast]', strArr[fast])
        }
        
    }
    strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow
    // console.log('slow', slow, 'strArr.len', strArr.length, 'strArr', strArr)
    // return strArr
}

const reverseCha_250428_1 = (strArr, start, end) => {
    let left = start ? start : 0
    let right = end ? end : strArr.length - 1
    while (left < right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
        left++
        right--
    }
    // console.log('strArr ??', strArr)
    // return strArr
}

const removeExtraSpaces_250428_2 = (strArr) => {
    let fast = 0
    let slow = 0
    while (fast < strArr.length) {
        if (strArr[fast] === ' ' && (fast === 0 || strArr[fast - 1] === ' ')) {
            fast++
        } else {
            strArr[slow++] = strArr[fast++]
        }
    }
    strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow
}
const reverseCha_250428_2 = (strArr, start, end) => {
    let left = start ? start : 0
    let right = end ? end : strArr.length - 1
    while (left < right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
        left++
        right--
    }
}

const reverseWords_250428_1 = (str) => {
    let strArr = str.split('')
    removeExtraSpaces_250428_1(strArr)
    reverseCha_250428_1(strArr,  0, strArr.length - 1)
    let indexStart = 0
    for (let i = 0; i <= strArr.length; i++) {
        // console.log('i', i)
        if (strArr[i] === ' ' || i === strArr.length) {
            // console.log('i ===>', i)
            reverseCha_250428_1(strArr, indexStart, i - 1)
            // console.log('strArr 1', 'i', i, ': ', strArr, 'len', strArr.length)
            indexStart = i + 1
            // console.log('indexStart', indexStart)
        }
    }
    return strArr.join('')
}

const reverseWords_250428_2 = (str) => {
    let strArr = str.split('')
    removeExtraSpaces_250428_2(strArr)
    // reverseCha_250428_2(strArr)
    reverseCha_250428_2(strArr,  0, strArr.length - 1)
    // console.log('strArr ???111222 reverseCha_250428_2', strArr)
    let indexStart = 0
    for (let i = 0; i <= strArr.length; i++) {
        if (strArr[i] === ' ' || i === strArr.length) {
            reverseCha_250428_2(strArr, indexStart, i - 1)
            indexStart = i + 1
        }
    }
    return strArr.join('')
}

const removeExtraSpaces_250428_3 = (strArr) => {
    let slow = 0
    let fast = 0
    while (fast < strArr.length) {
        if (strArr[fast] === ' ' && (fast === 0 || strArr[fast - 1] === ' ')) {
            fast++
        } else {
            strArr[slow++] = strArr[fast++]
        }
    }
    strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow
    return strArr
}

const reverseCha_250428_3 = (strArr, start, end) => {
    let left = start ? start : 0
    let right = end ? end : strArr.length
    while (left < right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
        right--
        left++
    }
}
const reverseWords_250428_3 = (str) => {
    let strArr = str.split('')
    removeExtraSpaces_250428_3(strArr)
    reverseCha_250428_3(strArr)
    let indexStart = 0;
    for (let i = 0; i <= strArr.length; i++) {
        if (strArr[i] === ' ' || i === strArr.length) {
            reverseCha_250428_3(strArr, indexStart, i - 1)
            indexStart = i + 1
        }
    }
    return strArr.join('')
}

const res1 = reverseWords_250428_3(s1)
console.log('reverseWords_250428_3 res1', res1)

const res2 = reverseWords_250428_3(s2)
console.log('res2', res2)

const res3 = reverseWords_250428_3(s3)
console.log('res3', res3)