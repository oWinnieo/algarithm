/*
62. 不同路径
中等
相关标签
相关企业
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

 

示例 1：


输入：m = 3, n = 7
输出：28
示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
示例 3：

输入：m = 7, n = 3
输出：28
示例 4：

输入：m = 3, n = 3
输出：6
 

提示：

1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109
*/
const m1 = 3, n1 = 7
const m2 = 3, n2 = 2

const m3 = 7, n3 = 3
const m4 = 3, n4 = 3

const uniquePaths = (m, n) => {

}

const uniquePaths_250522_1 = (m, n) => {
    const dp = Array.from({ length: m }, v => [])
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array.from({ length: n }, v => undefined)
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    console.log('dp', dp)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
}

const uniquePaths_250524_1 = (m, n) => {
    const dp = Array.from({ length: m }, () => [])
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array.from({ length: n }, () => undefined)
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
}

const res1 = uniquePaths_250524_1(m1, n1)
console.log('res1', res1)
const res2 = uniquePaths_250524_1(m2, n2)
console.log('res2', res2)
const res3 = uniquePaths_250524_1(m3, n3)
console.log('res3', res3)
const res4 = uniquePaths_250524_1(m4, n4)
console.log('res4', res4)