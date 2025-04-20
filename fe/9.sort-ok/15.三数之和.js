/*
15. 三数之和
中等
相关标签
相关企业
提示
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。
 

提示：

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums0 = [-1,0,1,2,-1,-4]
const nums1 = [0,1,1]
const nums2 = [0,0,0]

var threeSum = function(nums) {
    let numsSorted = nums.sort((a, b) => (a - b))
    // console.log('numsSorted', numsSorted)
    let resArr = []
    for (let i = 0; i < numsSorted.length; i++) {
        if (i > 0 && numsSorted[i] === numsSorted[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = numsSorted.length - 1;
        while (left < right) {
            let sum = numsSorted[i] + numsSorted[left] + numsSorted[right]
            if (sum === 0) {
                resArr.push([numsSorted[i], numsSorted[left], numsSorted[right]])
                left++
                right--
                // break;
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return resArr
};

const quickSorted = (nums) => {
    if (nums.length <= 1) return nums
    let target = nums[0]
    let arrSmall = []
    let arrBig = []
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] < target) {
            arrSmall.push(nums[j])
        } else {
            arrBig.push(nums[j])
        }
    }
    return [...quickSorted(arrSmall), target, ...quickSorted(arrBig)]
}

const sum3_250407_1 = (nums) => {
    let arrLen = nums.length
    if (nums === null || arrLen < 3) return []
    let numsSorted = quickSorted(nums)
    // console.log('numsSorted', numsSorted)
    let arrRes = []
    for (let i = 0; i < arrLen; i++) {
        if (i > 0 && numsSorted[i] === numsSorted[i - 1]) {
            continue
        }
        let left = i + 1;
        let right = arrLen - 1;
        // debugger;
        while (left < right) {
            let sum = numsSorted[i] + numsSorted[left] + numsSorted[right]
            if (sum === 0) {
                arrRes.push([numsSorted[i], numsSorted[left], numsSorted[right]])
                while (left < right && numsSorted[left] === numsSorted[left + 1]) left++
                while (left < right && numsSorted[right] === numsSorted[right - 1]) right--
                left++;
                right--;
                // debugger;
                // break;
            } else if (sum < 0) {
                left++
                // debugger;
            } else {
                right--
                // debugger;
            }
        }
    }
    return arrRes
}

const sum3_250407_demo1 = (nums) => {
    let ans = [];
    const len = nums.length;
    if(nums == null || len < 3) return ans;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let L = i+1;
        let R = len-1;
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }        
    return ans;

// 作者：画手大鹏
// 链接：https://leetcode.cn/problems/3sum/solutions/12307/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
}

let res0 = threeSum(nums0)
console.log('res0', res0)

let res1 = threeSum(nums1)
console.log('res1', res1)

let res2 = threeSum(nums2)
console.log('res2', res2)

let res0_250407_demo1 = sum3_250407_demo1(nums0)
console.log('res0_250407_demo1', res0_250407_demo1)

let res1_250407_demo1 = sum3_250407_demo1(nums1)
console.log('res1_250407_demo1', res1_250407_demo1)

let res2_250407_demo1 = sum3_250407_demo1(nums2)
console.log('res2_250407_demo1', res2_250407_demo1)

let res0_250407_1 = sum3_250407_1(nums0)
console.log('res0_250407_1', res0_250407_1)

let res1_250407_1 = sum3_250407_1(nums1)
console.log('res1_250407_1', res1_250407_1)

let res2_250407_1 = sum3_250407_1(nums2)
console.log('res2_250407_1', res2_250407_1)

