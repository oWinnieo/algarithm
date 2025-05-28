/*
70. 爬楼梯
简单
相关标签
相关企业
提示
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 

示例 1：

输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
示例 2：

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
 

提示：

1 <= n <= 45
*/

const climbStairs = (n) => {

}

const climb_250505_1 = (n) => {
    const dfs = (i) => {
        if (i === 1) return 1
        if (i === 2) return 2
        return dfs(i-1) + dfs(i-2)
    }
    return dfs(n)
}

const climb_250522_1 = (n) => {
    const dfs = (i) => {
        if (i === 1) return 1
        if (i === 2) return 2
        return dfs(i-1) + dfs(i-2)
    }
    return dfs(n)
}

const climb_250522_2 = (n) => {
    const dp = Array.from({length: n}, v => 0)
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}

const res1 = climb_250522_2(2)
console.log('res1', res1)
const res2 = climb_250522_2(3)
console.log('res2', res2)
const res3 = climb_250522_2(4)
console.log('res3', res3)
const res4 = climb_250522_2(5)
console.log('res4', res4)
const res5 = climb_250522_2(6)
console.log('res5', res5)
const res6 = climb_250522_2(7)
console.log('res6', res6)
