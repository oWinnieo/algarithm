/*
1047. 删除字符串中的所有相邻重复项
简单
相关标签
相关企业
提示
给出由小写字母组成的字符串 s，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

在 s 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

 

示例：

输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 

提示：

1 <= s.length <= 105
s 仅由小写英文字母组成。
*/
const str1 = 'abbaca'
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    
};

const removeDup_250426_1 = (str) => {
    let stack = []
    let cur = 0
    while (cur < str.length) {
        let strCur = str[cur]
        let stackTail = stack[stack.length - 1]
        // console.log('strCur', strCur, 'stackTail', stackTail)
        if (strCur === stackTail) {
            stack.pop()
        } else {
            stack.push(strCur)
        }
        // console.log('stack', stack)
        cur++
    }
    console.log('stack', stack)
    return stack.join('')
}

const res1 = removeDup_250426_1(str1)
console.log('res1', res1)
