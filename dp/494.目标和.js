/*
494. 目标和
中等
相关标签
相关企业
给你一个非负整数数组 nums 和一个整数 target 。

向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

 

示例 1：

输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
示例 2：

输入：nums = [1], target = 1
输出：1
 

提示：

1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000
*/
const nums1 = [1,1,1,1,1]
const target1 = 3

const nums2 = [1]
const target2 = 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
};

const findTarget_250527_1 = (nums, target) => {
    let sum = nums.reduce((a, b) => a + b)
    if ((sum + target) & 1) return false
    let addTarget = (sum + target) / 2
    const dp = Array.from({length: addTarget + 1}, () => 0)
    for (let i = 0; i < nums.length; i++) {
        for (let j = addTarget; j >= nums[i]; j--) {
            dp[i] = dp[j] + dp[j-1]
        }
    }
}
