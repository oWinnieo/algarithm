/*
1. 两数之和
简单

提示
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

你可以按任意顺序返回答案。

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]

提示：

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案

进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？
*/
// const sumSubFun = (nums, target, i) => {
//     console.log('i a', i, 'nums', nums)
//     for 
// }
const sumFromTwoNumber = (nums, target) => {
    let numsArr = JSON.parse(JSON.stringify(nums))
    for (let i = 0; i < numsArr.length; i++) {
        // const resSub = sumSubFun(numsArr, target, i)
        for (let j = 0; j < numsArr.length; j++) {
            if (j !== i) {
                if (numsArr[j] + numsArr[i] === target) {
                    debugger;
                    return [i, j]
                }
            }
        }
    }
}

const sumFromTwoNumber1 = (nums, target) => {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let n = target - num;
        if (num in obj) {
            return [i, obj[num]] 
        } else {
            obj[n] = i
        }
    }
}

const twoSum = function(nums, target) {
    let obj = {}
    for(let i=0;i<nums.length;i++){
        let num = nums[i]
        let n = target-num 
        debugger;
        if(num in obj){
            debugger;
            return [i,obj[num]]
        }else{
            debugger;
            obj[n] = i
        }
    }
  }

const nums1 = [2, 7, 11, 15];
const target1 = 9;

const nums2 = [3, 2, 4];
const target2 = 6;

const nums3 = [3, 3];
const target3 = 6;

const res1 = sumFromTwoNumber1(nums1, target1);
console.log('res1', res1);
