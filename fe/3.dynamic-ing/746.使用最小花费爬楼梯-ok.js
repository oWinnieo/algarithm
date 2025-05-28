/*
746. 使用最小花费爬楼梯
简单
相关标签
相关企业
提示
给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

请你计算并返回达到楼梯顶部的最低花费。

 

示例 1：

输入：cost = [10,15,20]
输出：15
解释：你将从下标为 1 的台阶开始。
- 支付 15 ，向上爬两个台阶，到达楼梯顶部。
总花费为 15 。
示例 2：

输入：cost = [1,100,1,1,1,100,1,1,100,1]
输出：6
解释：你将从下标为 0 的台阶开始。
- 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
- 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
- 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
- 支付 1 ，向上爬一个台阶，到达楼梯顶部。
总花费为 6 。
 

提示：

2 <= cost.length <= 1000
0 <= cost[i] <= 999
*/
const cost1 = [10,15,20]
const cost2 = [1,100,1,1,1,100,1,1,100,1]
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
};

const minCost_250522_1 = (arr) => {
    let len = arr.length
    const dp = Array.from({length: len}, v => undefined)
    console.log('dp', dp)
    dp[0] = 0
    dp[1] = 0
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.min((dp[i-1] + arr[i-1]), (dp[i-2] + arr[i-2]))
    }
    return dp[len]
}

const res1 = minCost_250522_1(cost1)
console.log('res1', res1)
const res2 = minCost_250522_1(cost2)
console.log('res2', res2)
// const res3 = minCost_250522_1(4)
// console.log('res3', res3)
// const res4 = minCost_250522_1(5)
// console.log('res4', res4)
// const res5 = minCost_250522_1(6)
// console.log('res5', res5)
// const res6 = minCost_250522_1(7)
// console.log('res6', res6)