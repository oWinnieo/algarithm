/*
131. 分割回文串
中等
相关标签
相关企业
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 
回文串
 。返回 s 所有可能的分割方案。

 

示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 2：

输入：s = "a"
输出：[["a"]]
 

提示：

1 <= s.length <= 16
s 仅由小写英文字母组成
*/
/*
讲解: 【带你学透回溯算法-分割回文串（对应力扣题目：131.分割回文串）| 回溯法精讲！-哔哩哔哩】 https://b23.tv/kY1p6vL
*/

/**
 * @param {string} s
 * @return {string[][]}
 */

const isPalindrome = (s, start, end) => {
    let left = start;
    let right = end;
    while (left <= right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
var partition = function(s) {
    let path = []
    let res = []
    const dfs = (path, startIndex) => {
        if (startIndex >= s.length) {
            res.push(path.slice())
            return
        }
        for (let i = startIndex; i < s.length; i++) {
            if (isPalindrome(s, startIndex, i)) {
                path.push(s.slice(startIndex, i + 1))
            } else {
                continue;
            }
            dfs(path, i + 1)
            path.pop()
        }
    }
    dfs(path, 0)
    return res
};

const partition_exercise1 = (str) => {
    let res = []
    let path = []
    const helper = (startIndex, path) => {
        if (startIndex >= str.length) {
            res.push(path.slice())
            return
        }
        for (let i = startIndex; i < str.length; i++) {
            if (isPalindrome(str, startIndex, i)) {
                path.push(str.slice(startIndex, i+1))
            } else {
                continue
            }
            helper(i + 1, path)
            path.pop()
        }
    }
    helper(0, path)
    return res
}

const s1 = 'aabac'
const s2 = 'aabaa'

console.log('s1.slice(?)', s1.slice(0, 2))

const resSub1 = isPalindrome(s1, 0, s1.length - 1)
console.log('resSub1 1', resSub1)

const resSub2 = isPalindrome(s2, 0, s2.length - 1)
console.log('resSub2', resSub2)

const s3 = 'aab'
const s4 = 'a'

const res1 = partition_exercise1(s3);
console.log('res1 partition_exercise1', res1)

const res2 = partition_exercise1(s4);
console.log('res2', res2)

