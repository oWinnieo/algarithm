/*
90. 子集 II
中等
相关标签
相关企业
给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的 子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

 

示例 1：

输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
 

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10
*/

const nums1 = [1,2,2]
const nums2 = [0]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    
};

const subsetsWithDup_250412_1 = (nums) => {
    // let resSet = new Set()
    let resArr = []
    let eleUsed = new Set()
    let path = []
    const dfs = (indexStart) => {
        if (path.length <= nums.length) {
            // resSet.add(path.slice(0))
            resArr.push(path.slice(0))
        }
        for (let i = indexStart; i < nums.length; i++) {
            if (eleUsed.has(i)) continue
            eleUsed.add(i)
            path.push(nums[i])
            dfs(i + 1)
            eleUsed.delete(i)
            path.pop()
        }
    }
    dfs(0)
    // return Array.from(resSet)
    return resArr
}

const res1 = subsetsWithDup_250412_1(nums1)
console.log('res1 1', res1)

const res2 = subsetsWithDup_250412_1(nums2)
console.log('res2', res2)

const subSetsWithDup_250414_1 = (nums) => {
    // let numsNew = JSON.parse(JSON.stringify(nums))
    let numsNew = nums.sort((a, b) => a - b)
    let resArr = []
    let eleUsed = Array.from({length: nums.length}, () => 0)
    let path = []
    const dfs = (indexStart) => {
        resArr.push(path.slice(0))
        for (let i = indexStart; i < nums.length; i++) {
            if (numsNew[i] === numsNew[i - 1] && eleUsed[i - 1] === 0) {
                continue
            }
            path.push(numsNew[i])
            eleUsed[i] = 1
            dfs(i + 1)
            eleUsed[i] = 0
            path.pop()
        }
    }
    dfs(0)
    return resArr
}

const res12 = subSetsWithDup_250414_1(nums1)
console.log('res12 1', res12)

const res22 = subSetsWithDup_250414_1(nums2)
console.log('res22', res22)