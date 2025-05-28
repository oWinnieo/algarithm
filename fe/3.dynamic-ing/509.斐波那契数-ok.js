/*
509. 斐波那契数
简单
相关标签
相关企业
斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
给定 n ，请计算 F(n) 。

 

示例 1：

输入：n = 2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
示例 2：

输入：n = 3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2
示例 3：

输入：n = 4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3
 

提示：

0 <= n <= 30
*/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
};

const fib_250505_1 = (n) => {
    // const dp = []
    const dfs = (i) => {
        if (i === 0) return 0
        if (i === 1) return 1
        return dfs(i-1) + dfs(i-2)
    }
    return dfs(n)
}

const fib_250522_1 = (n) => {
    const dfs = (i) => {
        if (i === 0) return 0
        if (i === 1) return 1
        return dfs(i - 1) + dfs(i - 2)
    }
    return dfs(n)
}

const fib_250522_2 = (n) => {
    const dp = Array.from({length: n}, v => 0)
    console.log('dp', dp)
    dp[1] = 1
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}

const res1 = fib_250522_2(2)
console.log('res1', res1)
const res2 = fib_250522_2(3)
console.log('res2', res2)
const res3 = fib_250522_2(4)
console.log('res3', res3)
const res4 = fib_250522_2(5)
console.log('res4', res4)
const res5 = fib_250522_2(6)
console.log('res5', res5)
const res6 = fib_250522_2(7)
console.log('res6', res6)




