/*
20. 有效的括号
简单
相关标签
相关企业
提示
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 

示例 1：

输入：s = "()"

输出：true

示例 2：

输入：s = "()[]{}"

输出：true

示例 3：

输入：s = "(]"

输出：false

示例 4：

输入：s = "([])"

输出：true

 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
*/



/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};

const isValid_250426_1 = (str) => {
    let strArr = str.split('')
    let stack = []
    let hash = new Map()
    let validStr = '(){}[]'
    hash.set(')', '(')
    hash.set(']', '[')
    hash.set('}', '{')
    // console.log('strArr', strArr)
    // let cur = strArr.pop()
    while (strArr.length) {
        let temp = strArr.pop()
        let stackTail = stack[stack.length - 1]
        if (validStr.includes(temp) && (hash.has(temp) || hash.get(stackTail) !== temp)) {
            stack.push(temp)
        } else {
            // console.log('hash.get(stackTail)', hash.get(stackTail))
            // console.log('temp', temp)
            if (hash.get(stackTail) === temp) {
                stack.pop()
            }
        }
        // console.log('stack', stack)
    }
    // console.log('stack', stack)
    return stack.length === 0 ? true : false
}

const isValid_250426_2 = (str) => {
    let strLen = str.length
    let curIndex = 0
    let stack = []
    while (curIndex < strLen) {
        let cha1 = str[curIndex]
        let cha2 = ''
        // console.log('cha1', cha1)
        switch (cha1) {
            case '(':
                // debugger;
                stack.push(')')
                break;
            case ')':
                // debugger;
                cha2 = stack.pop()
                // debugger;
                if (cha2 !== cha1) {
                    return false
                } else {
                    break;
                }
            case '[':
                stack.push(']')
                break;
            case ']':
                cha2 = stack.pop()
                if (cha2 !== cha1) {
                    return false
                } else {
                    break;
                }
            case '{':
                stack.push('}')
                break;
            case '}':
                cha2 = stack.pop()
                if (cha2 !== cha1) {
                    return false
                } else {
                    break;
                }
        }
        // // debugger;
        // console.log('stack', stack)
        curIndex++
    }
    // console.log('stack', stack)
    return stack.length <= 0 ? true : false
    // return true
}

const s1 = "()"
const s2 = "()[]{}"
const s3 = "(]"
const s4 = "([])"

const res1 = isValid_250426_2(s1)
console.log('res1 t', res1)

const res2 = isValid_250426_2(s2)
console.log('res2 t', res2)

const res3 = isValid_250426_2(s3)
console.log('res3 f', res3)

const res4 = isValid_250426_2(s4)
console.log('res4 t', res4)

const s5 = '([{}]()'
const s6 = '([{}}}'
const s7 = '([{}])))'
const s8 = '(aa(b))'
const s9 = '(aa(bc)))'
console.log('---')

const res5 = isValid_250426_2(s5)
console.log('res5 f', res5)
const res6 = isValid_250426_2(s6)
console.log('res6 f', res6)
const res7 = isValid_250426_2(s7)
console.log('res7 f', res7)
const res8 = isValid_250426_2(s8)
console.log('res8 t', res8)
const res9 = isValid_250426_2(s9)
console.log('res9 f', res9)