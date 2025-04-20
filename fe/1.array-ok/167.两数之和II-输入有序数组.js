/*
167. 两数之和 II - 输入有序数组
中等
给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

你所设计的解决方案必须只使用常量级的额外空间。

示例 1：

输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
示例 2：

输入：numbers = [2,3,4], target = 6
输出：[1,3]
解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
示例 3：

输入：numbers = [-1,0], target = -1
输出：[1,2]
解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。

提示：

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers 按 非递减顺序 排列
-1000 <= target <= 1000
仅存在一个有效答案
*/
const getSum1 = (nums, target) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        /* wtest */
        let num = target - nums[i]
        if (nums[i] in obj) {
            return [i, obj[nums[i]]].map(k => k + 1).sort((a, b) => a - b)
        } else {
            obj[num] = i
        }
        /* /wtest */
        /* wtest demo *
        let num = nums[i];
        let n = target - num;
        if (num in obj) {
            return [i, obj[num]]
        } else {
            obj[n] = i;
        }
        /* /wtest demo */
    }
}

const getSum2 = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
} 

const getSum3 = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;

const nums2 = [2, 3, 4];
const target2 = 6;

const nums3 = [-1, 0];
const target3 = -1;

// const res1 = getSum3(nums1, target1);
// console.log('1 res1', res1);

// const res2 = getSum3(nums2, target2);
// console.log('res2', res2);

// const res3 = getSum3(nums3, target3);
// console.log('res3', res3);

const sum_250325_1 = (nums, target) => {
    // 之前的做法没按非递减排序
    let obj = {}
    for (i = 0; i < nums.length; i++) {
        let num = nums[i]
        let partner = target - num
        if (num in obj) {
            return [i + 1, obj[num] + 1]
        } else {
            obj[partner] = i
        }
    }
}

const sum_250325_2 = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum > target) {
            right--
        } else {
            left++
        }
    }
    return false
}

const res1 = sum_250325_1(nums1, target1);
console.log('1 res1', res1);

const res2 = sum_250325_1(nums2, target2);
console.log('res2', res2);

const res3 = sum_250325_1(nums3, target3);
console.log('res3', res3);

// const res11 = sum_250325_2(nums1, target1);
// console.log('1 res11', res11);

// const res21 = sum_250325_2(nums2, target2);
// console.log('res21', res21);

// const res31 = sum_250325_2(nums3, target3);
// console.log('res31', res31);

const get2Sum_250330_1 = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum > target) {
            right--
        } else {
            left++
        }
    }
    return false
}

const res11 = get2Sum_250330_1(nums1, target1);
console.log('get2Sum_250330_1 res11', res11);

const res21 = get2Sum_250330_1(nums2, target2);
console.log('res21', res21);

const res31 = get2Sum_250330_1(nums3, target3);
console.log('res31', res31);