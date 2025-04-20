/*
704. 二分查找
简单
相关标签
相关企业
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
 

提示：

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。
*/

const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    while (left <= right) {
        mid = Math.ceil((left + right) / 2);
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

let nums1 = [-1,0,3,5,9,12]
let target1 = 9

let nums2 = [-1,0,3,5,9,12]
let target2 = 2
// const res1 = search(nums1, target1);
// console.log('res1', res1)

// const res2 = search(nums2, target2);
// console.log('res2', res2)

const searchTarget_250328_1 = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    let mid = 0
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

const res1 = searchTarget_250328_1(nums1, target1);
console.log('searchTarget_250328_1 res1', res1)

const res2 = searchTarget_250328_1(nums2, target2);
console.log('searchTarget_250328_1 res2', res2)