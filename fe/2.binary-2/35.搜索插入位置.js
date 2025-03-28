/*
35. 搜索插入位置
简单

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

 

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
 

提示:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 为 无重复元素 的 升序 排列数组
-104 <= target <= 104
*/
const searchInsert = (nums, target) => {
    let mid = Math.ceil(nums.length / 2)
    let left = 0;
    let right = nums.length - 1
    while (left <= right) {
        mid = left + Math.ceil((right - left) / 2) // wtest ? 5, 9, mid = 5 + 2
        // 5, 10, mid = 5 + 3, 15/2
        // + / 2: (left + c, left) / 2
        // + - / 2: left + (c / 2): left + c / 2

        // x + (y - x) / 2: 5 + (10 - 5) / 2 = 5 + 2.5 = 7.5
        // x + (x + c - x) / 2 = x + c / 2
        // (y + x) / 2: (10 + 5) / 2 = 15 / 2 = 7.5
        // (x + c + x) / 2 = (2x + c) / 2 = x + c / 2
        // 
        // mid = Math.ceil((right + left) / 2) // wtest ?
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    // console.log('left', left, 'right', right)
    return left
}
const searchInsert2 = (nums, target) => {
    let mid = Math.ceil(nums.length / 2)
    let left = 0;
    let right = nums.length - 1
    while (left <= right) {
        // mid = left + Math.ceil((right - left) / 2) // wtest ?
        mid = Math.ceil((right + left) / 2) // wtest ?
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    // console.log('left', left, 'right', right)
    return left
}

const searchInsert3 = (nums, target) => {
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
    return left
}

let nums1 = [1,3,5,6]
let target1 = 5

let nums2 = [1,3,5,6]
let target2 = 2

let nums3 = [1,3,5,6]
let target3 = 7

let nums4 = [1,3,5,6]
let target4 = 0

let nums5 = [1,3,5,6]
let target5 = 1

let nums6 = [1,3,5,6]
let target6 = 3

// const res1 = searchInsert(nums1, target1)
// console.log('res1', res1)

// const res2 = searchInsert(nums2, target2)
// console.log('res2', res2)

// const res3 = searchInsert(nums3, target3)
// console.log('res3', res3)

// const res4 = searchInsert(nums4, target4)
// console.log('res4', res4)

// const res5 = searchInsert(nums5, target5)
// console.log('res5', res5)

// const res6 = searchInsert(nums6, target6)
// console.log('res6', res6)

/* *** */

// const res21 = searchInsert2(nums1, target1)
// console.log('res21', res21)

// const res22 = searchInsert2(nums2, target2)
// console.log('res22', res22)

// const res23 = searchInsert2(nums3, target3)
// console.log('res23', res23)

// const res24 = searchInsert2(nums4, target4)
// console.log('res24', res24)

// const res25 = searchInsert2(nums5, target5)
// console.log('res25', res25)

// const res26 = searchInsert2(nums6, target6)
// console.log('res26', res26)

/* *** */

// const res31 = searchInsert3(nums1, target1)
// console.log('res31', res31)

// const res32 = searchInsert3(nums2, target2)
// console.log('res32', res32)

// const res33 = searchInsert3(nums3, target3)
// console.log('res33', res33)

// const res34 = searchInsert3(nums4, target4)
// console.log('res34', res34)

// const res35 = searchInsert3(nums5, target5)
// console.log('res35', res35)

// const res36 = searchInsert3(nums6, target6)
// console.log('res36', res36)

/* *** */

const searchInsert_250327_1 = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.ceil((right + left) / 2)
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
}

const searchInsert_250327_2 = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left <= right) { // wtest left < right
        let mid = Math.floor((right + left) / 2)
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    // wtest return left + 1
    return left
}

const res1 = searchInsert_250327_1(nums1, target1)
console.log('searchInsert_250327_1 res1', res1)

const res2 = searchInsert_250327_1(nums2, target2)
console.log('res2', res2)

const res3 = searchInsert_250327_1(nums3, target3)
console.log('res3', res3)

const res4 = searchInsert_250327_1(nums4, target4)
console.log('res4', res4)

const res5 = searchInsert_250327_1(nums5, target5)
console.log('res5', res5)

const res6 = searchInsert_250327_1(nums6, target6)
console.log('res6', res6)

let nums_250327_1 = [1, 5, 9, 12, 15, 20]
let target_250327_1 = 7
let target_250327_2 = 12
let target_250327_3 = 26
let target_250327_4 = 0
let target_250327_5 = 13
let target_250327_6 = 19

const res11 = searchInsert_250327_1(nums_250327_1, target_250327_1)
console.log('searchInsert_250327_1 res11', res11)

const res21 = searchInsert_250327_1(nums_250327_1, target_250327_2)
console.log('res21', res21)

const res31 = searchInsert_250327_1(nums_250327_1, target_250327_3)
console.log('res31', res31)

const res41 = searchInsert_250327_1(nums_250327_1, target_250327_4)
console.log('res41', res41)

const res51 = searchInsert_250327_1(nums_250327_1, target_250327_5)
console.log('res51', res51)

const res61 = searchInsert_250327_1(nums_250327_1, target_250327_6)
console.log('res61', res61)

// ~~~

const res12 = searchInsert_250327_2(nums_250327_1, target_250327_1)
console.log('searchInsert_250327_1 res12', res12)

const res22 = searchInsert_250327_2(nums_250327_1, target_250327_2)
console.log('res22', res22)

const res32 = searchInsert_250327_2(nums_250327_1, target_250327_3)
console.log('res32', res32)

const res42 = searchInsert_250327_2(nums_250327_1, target_250327_4)
console.log('res42', res42)

const res52 = searchInsert_250327_2(nums_250327_1, target_250327_5)
console.log('res52', res52)

const res62 = searchInsert_250327_2(nums_250327_1, target_250327_6)
console.log('res62', res62)