/*
53. 最大子数组和
中等
相关标签
相关企业
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组
是数组中的一个连续部分。

 

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23
 

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
*/
/*
思路:
我理解的算法 - 53.最大子数组和（超经典多种解法：强推、动态规划、Kadane算法）
https://blog.csdn.net/xiaozeiqwe/article/details/125894322
maxSubArray_22

bilibili
【看起来复杂，其实是简单动态规划 | LeetCode：53.最大子序和-哔哩哔哩】 https://b23.tv/6VJhhXw
1.首先明确 dp[i] 表示的是什么
2.递推公式
    Math.max(dp[i] = dp[i - 1] + nums[i], nums[i])
3.初始化,dp[0] = nums[0]
4.遍历顺序
for (let i = 1; i < nums.size; i++)
因为0已经初始化了,所以从1开始
因为i依赖i-1,所以从前往后遍历
 */

const maxSubArray_1st_why = (nums) => {
    let slow = 0;
    let fast = 0;
    let sumMax = 0;
    let sumTemp = 0;
    while (fast < nums.length - 1) {
        sumTemp += nums[fast++]
        debugger;
        while (sumTemp > sumMax) {
            if (sumTemp > sumMax) {
                sumMax = sumTemp
            }
            sumTemp -= nums[slow++]
            debugger;
        }
    }
    return sumMax
}

const maxSubArray_22 = (nums) => {
    let n = nums.length;
    let sum = nums[n - 1];
    let sumMax = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        if (sum <= 0) {
            sum = nums[i]
        } else {
            sum += nums[i]
        }
        sumMax = Math.max(sum, sumMax)
    }
    return sumMax
}

const nums1 = [-2,1,-3,4,-1,2,1,-5,4]
const nums2 = [1]
const nums3 = [5,4,-1,7,8]

const res1 = maxSubArray(nums1)
console.log('res1', res1)

const res2 = maxSubArray(nums2)
console.log('res2', res2)

const res3 = maxSubArray(nums3)
console.log('res3', res3)