/*
209. 长度最小的子数组
中等
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其总和大于等于 target 的长度最小的 
子数组
 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
示例 2：

输入：target = 4, nums = [1,4,4]
输出：1
示例 3：

输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0

提示：

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104

进阶：

如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
*/
const minSubArrayLen = (target, nums) => {
    let slow = 0;
    let fast = 0;
    let sum = 0;
    let resLen = nums.length + 1;
    debugger;
    while (fast < nums.length) {
        sum += nums[fast]
        fast++
        while (sum >= target) {
            resLen = Math.min(resLen, fast - slow);
            sum -= nums[slow]
            slow++;
        }
        
    }
    return resLen > nums.length ? 0 : resLen
}

const minSub = (target, nums) => {
    let slow = 0;
    let fast = 0;
    let sum = 0;
    let resLen = nums.length + 1;
    while (fast < nums.length) {
        sum += nums[fast++];
        console.log('while out fast', fast, 'slow', slow, 'sum', sum, 'target', target, 'resLen', resLen)
        debugger;
        if (sum >= target) {
            resLen = Math.min(resLen, fast - slow);
            sum -= nums[slow++]
            console.log('> in fast', fast, 'slow', slow, 'sum', sum, 'target', target, 'resLen', resLen)
            debugger;
        }
    }
    return resLen > nums.length ? 0 : resLen
}

// const target1 = 7
// const nums1 = [2,3,1,2,4,3]

const target1 = 57
const nums1 = [2,13,5,12,4,3,6,9,15,30,2,5,6,9,10,12,1,5]

const target2 = 4
const nums2 = [1,4,4]

const target3 = 11
const nums3 = [1,1,1,1,1,1]

// const res11 = minSubArrayLen(target1, nums1)
// console.log('minSubArrayLen res11', res11)

// const res21 = minSubArrayLen(target2, nums2)
// console.log('res31', res21)

// const res31 = minSubArrayLen(target3, nums3)
// console.log('res31', res31)

// const res12 = minSub(target1, nums1)
// console.log('minSub res12', res12)

// const res22 = minSub(target2, nums2)
// console.log('res32', res22)

// const res32 = minSub(target3, nums3)
// console.log('res32', res32)

const minSubArrayLen_250325_1 = (nums, target) => {
    let slow = 0
    let fast = 0
    let sum = 0
    let resLen = nums.length + 1;
    debugger;
    while (fast < nums.length) {
        sum += nums[fast]
        fast++
        while(sum >= target) {
            resLen = Math.min(resLen, fast - slow)
            sum -= nums[slow]
            slow++
        }
    }
    // return resLen
    return resLen > nums.length ? 0 : resLen
}

const res_250325_1 = minSubArrayLen_250325_1(nums1, target1)
console.log('minSubArrayLen_250325_1 res_250325_1', res_250325_1)
const res_250325_2 = minSubArrayLen_250325_1(nums2, target2)
console.log('minSubArrayLen_250325_1 res_250325_2', res_250325_2)
const res_250325_3 = minSubArrayLen_250325_1(nums3, target3)
console.log('minSubArrayLen_250325_1 res_250325_3', res_250325_3)

const res_250325_11 = minSubArrayLen(target1, nums1)
console.log('minSubArrayLen res_250325_11', res_250325_11)
const res_250325_21 = minSubArrayLen(target2, nums2)
console.log('minSubArrayLen res_250325_21', res_250325_21)
const res_250325_31 = minSubArrayLen(target3, nums3)
console.log('minSubArrayLen res_250325_31', res_250325_31)