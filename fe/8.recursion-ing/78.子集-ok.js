/*
78. 子集
中等
相关标签
相关企业
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

 

示例 1：

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：

输入：nums = [0]
输出：[[],[0]]
 

提示：

1 <= nums.length <= 10
-10 <= nums[i] <= 10
nums 中的所有元素 互不相同
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
};

const subsets_250411_1 = (nums) => {
    let resSet = new Set()
    let path = []
    let indexStart = 0
    const dfs = (indexStart) => {
        if (path.length <= nums.length && !resSet.has(path)) {
            resSet.add(path.slice(0))
            if (path.length === nums.length) {
                return
            }
        } 
        for (let i = indexStart; i < nums.length; i++) {
            path.push(nums[i])
            dfs(i + 1)
            path.pop()
        }
    }
    dfs(indexStart)
    return Array.from(resSet)
}

const subsets_250412_1 = (nums) => {
    let resSet = new Set()
    let path = []
    const dfs = (indexStart) => {
        if (path.length <= nums.length && indexStart < nums.length) {
            resSet.add(path.slice(0))
            if (path.length === nums.length) return
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

const set1 = new Set()
// const arr1 = [1, 2, 3]
// const arr2 = [3, 2, 1]

// set1.add(arr1)
// const has1 = set1.has(arr1)
// console.log('has1', has1)
// const has2 = set1.has(arr2)
// console.log('has2', has2)

const arr1 = [1, 2, 3]
const arr2 = [0]
const res1 = subsets_250411_1(arr1)
console.log('res1', res1)

const res2 = subsets_250411_1(arr1)
console.log('res2', res2)

const res12 = subsets_250412_1(arr1)
console.log('res12', res12)

const res22 = subsets_250412_1(arr1)
console.log('res22', res22)
