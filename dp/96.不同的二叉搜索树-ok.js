/*
96. 不同的二叉搜索树
中等
相关标签
相关企业
给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

 

示例 1：


输入：n = 3
输出：5
示例 2：

输入：n = 1
输出：1
 

提示：

1 <= n <= 19
*/
const n1 = 3
const n2 = 1
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
};

const tree_250523_1 = (n) => {
    const dp = []
    // let dp = new Array(n+1).fill(0);
    dp[0] = 1
    // dp[1] = 1
    // dp[2] = 2
    // for (let j = 1; j <= n; j++) {
    //     dp[n] += dp[j-1] * dp[n-j]
    // }
    // for (let i = 1; i <= n; i++) {
    //     for (let j = 1; j <= i; j++) {
    //         dp[i] += dp[j-1] * dp[i-j]
    //     }
    // }
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            dp[i] += dp[j-1] * dp[i-j];
        }
    }
    console.log('dp', dp)
    return dp[n]
}

const tree_250524_1 = (n) => {
    const dp = Array.from({ length: n + 1 }, () => 0)
    dp[0] = 1
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j-1] * dp[i-j]
        }
    }
    return dp[n]
}

const res1 = tree_250524_1(n1)
console.log('res1', res1)
const res2 = tree_250524_1(n2)
console.log('res2', res2)
