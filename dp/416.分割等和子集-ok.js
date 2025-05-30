/*
416. 分割等和子集
中等
相关标签
相关企业
给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

 

示例 1：

输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
示例 2：

输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
 

提示：

1 <= nums.length <= 200
1 <= nums[i] <= 100
*/
const nums1 = [1,5,11,5]
const nums2 = [1,2,3,5]
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
};

const canPartition_250526_1 = function(nums) {
    const sum = (nums.reduce((p, v) => p + v));
    if (sum & 1) return false;
    const dp = Array(sum / 2 + 1).fill(0);
    for(let i = 0; i < nums.length; i++) {
        for(let j = sum / 2; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            if (dp[j] === sum / 2) {
                return true;
            }
        }
    }
    return dp[sum / 2] === sum / 2;
};

const canPart_250527_1 = (nums) => {
    const sum = nums.reduce((a, b) => a + b)
    if (sum & 1) return false
    const dp = Array.from({length: sum / 2 + 1}, () => 0)
    for (let i = 0; i < nums.length; i++) {
        for (let j = sum / 2; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
            if (dp[j] === sum / 2) {
                return true
            }
        }
    }
    return dp[sum / 2] === sum / 2
}

const res1 = canPart_250527_1(nums1)
console.log('res1 canPart_250527_1', res1)
const res2 = canPart_250527_1(nums2)
console.log('res2 canPart_250527_1', res2)