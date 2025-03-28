/*
283. 移动零
简单

提示
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
示例 2:

输入: nums = [0]
输出: [0]

提示:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
进阶：你能尽量减少完成的操作次数吗？
*/
const moveZeroes = (nums) => {
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[fast]) {
            console.log('before nums', nums, 'slow', slow, 'nums s', nums[slow], 'fast', fast, 'nums f', nums[fast])
            debugger;
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            console.log('after nums', nums, 'slow', slow, 'nums s', nums[slow], 'fast', fast, 'nums f', nums[fast])
            debugger;
            slow++;
        }
        fast++;
    }
    return nums
}

const moveZeroExe1 = (nums) => {
    let slow = 0
    let fast = 0
    while (fast < nums.length) {
        if (nums[fast]) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            slow++
        }
        fast++
    }
    return nums
}

const moveZeroExe2 = (nums) => {
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[fast]) {
            [nums[slow], nums[fast]]
            slow++
        }
        fast++
    }
}

const nums1 = [0,1,0,3,12]
/* wtest *
 s f
[0,1,0,3,12]
   s   f
[1,0,0,3,12]
     s   f
[1,3,0,0,12]
[1,3,12,0,0]
/* /wtest */


const nums2 = [0]
               
const nums3 = [1,5,0,1,0,2,6,9]

const nums4 = [1,2,5,0,3,0,0,6]

const nums5 = [5, 1, 11, 5, 1, 0, 11, 0, 7, 2, 0, 0, 11, 9, 9, 0, 2, 10, 0, 0]
/* wtest *
 s f
[1,5,0,1,0,2,6,9]
/* /wtest */

// const res1 = moveZeroExe1(nums1)
// console.log('res1', res1)

// const res2 = moveZeroExe1(nums2)
// console.log('res2', res2)

// const res3 = moveZeroExe1(nums3)
// console.log('moveZeroExe1 res3', res3)

const move0_250325_1 = (nums) => {
    let slow = 0
    let fast = 0
    while (fast < nums.length) {
        if (nums[fast]) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            slow++
        }
        fast++
    }
    return nums
}

const numRandom = Math.floor(Math.random() * 100)
console.log('numRandom', numRandom)
const move0_250326_1 = (nums) => {
    let slow = 0
    let fast = 0
    // const timeBefore = performance.now()
    const timeBefore = +new Date()
    while (fast < nums.length) {
        if (nums[fast]) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            slow++
        }
        fast++
    }
    // const timeAfter = performance.now()
    const timeAfter = +new Date()
    console.log('timeBefore', timeBefore, 'timeAfter', timeAfter, 'timeUsting', timeAfter - timeBefore)
    return nums
}

const res1 = move0_250326_1(nums1)
console.log('move0_250326_1 res1', res1)

const res2 = move0_250326_1(nums2)
console.log('move0_250326_1 res2', res2)

const res3 = move0_250326_1(nums3)
console.log('move0_250326_1 res3', res3)

const numsRandom0 = setRandomArray2(1, 100, 100, 20)

const resRandom0 = move0_250326_1(numsRandom0)
// console.log('numsRandom0 ~~~', numsRandom0)
console.log('resRandom0', resRandom0)