/*
46. 全排列

中等
相关标签
相关企业
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 

提示：

1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同

*/

const nums1 = [1,2,3]
const nums2 = [0,1]
const nums3 = [1]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
};

const permute_250412_1 = (nums) => {
    let resSet = new Set()
    let path = []
    const dfs = (indexStart) => {
        if (path.length === nums.length) {
            resSet.add(path.slice(0))
            return
        }
        for (let i = indexStart; i < nums.length; i++) {
            path.push(nums[i])
            dfs(i + 1)
            path.pop()
        }
    }
    dfs(0)
    return Array.from(resSet)
}

const permute_250414_1 = (nums) => {
    let resArr = []
    let eleUsed = Array.from({length: nums.length}, () => 0)
    let path = []
    const dfs = () => {
        if (path.length === nums.length) {
            resArr.push(path.slice(0))
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (eleUsed[i] === 1) continue
            path.push(nums[i])
            eleUsed[i] = 1
            dfs()
            eleUsed[i] = 0
            path.pop()
        }
    }
    dfs()
    return resArr
}

const permute_250416_1 = (nums) => {
    let resArr = []
    let path = []
    let eleUsed = Array.from({length: nums.length}, () => 0)
    const dfs = () => {
        if (path.length >= nums.length) {
            resArr.push(path.slice(0))
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (eleUsed[i] === 1) continue
            path.push(nums[i])
            eleUsed[i] = 1
            dfs()
            eleUsed[i] = 0
            path.pop()
        }
    }
    dfs()
    return resArr
}

const res1 = permute_250416_1(nums1)
console.log('permute_250415_1 res1', res1)

const res2 = permute_250416_1(nums2)
console.log('res2', res2)

const res3 = permute_250416_1(nums3)
console.log('res3', res3)

const res12 = permute_250414_1(nums1)
console.log('permute_250414_1 res12', res12)

const res22 = permute_250414_1(nums2)
console.log('res22', res22)

const res32 = permute_250414_1(nums3)
console.log('res32', res32)

