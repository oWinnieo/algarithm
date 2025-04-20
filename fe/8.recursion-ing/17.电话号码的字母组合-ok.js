/*
17. 电话号码的字母组合
中等
相关标签
相关企业
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



 

示例 1：

输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
示例 2：

输入：digits = ""
输出：[]
示例 3：

输入：digits = "2"
输出：["a","b","c"]
 

提示：

0 <= digits.length <= 4
digits[i] 是范围 ['2', '9'] 的一个数字。
*/
const digits1 = '23'
const digits2 = ''
const digits3 = '2'
/**
 * @param {string} digits
 * @return {string[]}
 */

const letterMap = {
    '0': '',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}
var letterCombinations = function(digits) {
    
};

const letterCombine_250416_1 = (digits) => {
    let letterLen = digits.length
    let resArr = []
    let path = []
    const dfs = (indexStart) => {
        if (path.length === letterLen) {
            resArr.push(path.slice(0))
            return
        }
        let number = digits[indexStart]
        for (let i = 0; i < letterMap[number].length; i++) {
            path.push(letterMap[number][i])
            dfs(indexStart + 1)
            path.pop()
        }
    }
    dfs(0)
    return resArr
}

const letterCombine_250416_2 = (digits) => {
    let digitsLen = digits.length
    let resArr = []
    let path = []
    const dfs = (indexStart) => {
        if (path.length === digitsLen) {
            resArr.push(path.slice(0))
            return
        }
        let letters = letterMap[digits[indexStart]]
        for (let i = 0; i < letters.length; i++) {
            path.push(letters[i])
            dfs(indexStart + 1)
            path.pop()
        }
    }
    dfs(0)
    return resArr
}

const letterCombine_250416_3 = (digits) => {
    let resArr = []
    let path = []
    const dfs = (indexStart, str) => {
        if (str.length === digits.length) {
            resArr.push(str.slice(0))
            return
        }
        let letters = letterMap[digits[indexStart]]
        for (let i = 0; i < letters.length; i++) {
            dfs(indexStart + 1, str + letters[i])
        }
    }
    dfs(0, '')
    return resArr
}

const res1 = letterCombine_250416_3(digits1)
console.log('letterCombine_250416_3 res1', res1)

const res2 = letterCombine_250416_3(digits2)
console.log('res2', res2)

const res3 = letterCombine_250416_3(digits3)
console.log('res3', res3)

const res12 = letterCombine_250416_2(digits1)
console.log('letterCombine_250416_2 res12', res12)

const res22 = letterCombine_250416_2(digits2)
console.log('res22', res22)

const res32 = letterCombine_250416_2(digits3)
console.log('res32', res32)
