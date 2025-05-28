/*
343. 整数拆分
中等
相关标签
相关企业
提示
给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

返回 你可以获得的最大乘积 。

 

示例 1:

输入: n = 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
示例 2:

输入: n = 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 

提示:

2 <= n <= 58
*/
const n1 = 2
const n2 = 10
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    
};

const intBreak_250522_1 = (n) => {
    let dp = Array.from({ length: n + 1 }, v => 0)
    dp[0] = 0
    dp[1] = 0
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i / 2; j++) {
            dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i])
        }
    }
    return dp[n]
}

const intBreak_250524_1 = (n) => {
    let dp = Array.from({ length: n + 1 }, () => 0)
    dp[0] = 0
    dp[1] = 0
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i / 2; j++) {
            dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i])
        }
    }
    return dp[n]
}

const intBreak_250527_1 = (n) => {
    let dp = Array.from({length: n + 1}, () => 0)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i / 2; j++) {
            dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i])
        }
    }
    return dp[n]
}

const res1 = intBreak_250527_1(n1)
console.log('res1 intBreak_250527_1', res1)
const res2 = intBreak_250527_1(n2)
console.log('res2', res2)
