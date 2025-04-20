/*
912. 排序数组
中等
相关标签
相关企业
给你一个整数数组 nums，请你将该数组升序排列。

你必须在 不使用任何内置函数 的情况下解决问题，时间复杂度为 O(nlog(n))，并且空间复杂度尽可能小。

 

示例 1：

输入：nums = [5,2,3,1]
输出：[1,2,3,5]
示例 2：

输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
 

提示：

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */


const nums0 = [5,2,3,1]
const nums1 = [5,1,1,2,0,0]
var sortArray = function(nums) {
    if (nums.length <= 1) return nums
    let target = nums[0]
    let arrSmall = []
    let arrBig = []
    let j = 1
    while (j < nums.length) {
        if (nums[j] < target) {
            arrSmall.push(nums[j])
        } else {
            arrBig.push(nums[j])
        }
        j++
    }
    // console.log('arrSmall', arrSmall, 'arrBig', arrBig)
    // debugger;
    return [...sortArray(arrSmall), target, ...sortArray(arrBig)]
};

const res0 = sortArray(nums0)
console.log('res0', res0)

const res1 = sortArray(nums1)
console.log('res1', res1)
