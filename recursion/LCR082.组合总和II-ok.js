/*
LCR 082. 组合总和 II
中等
相关标签
相关企业
给定一个可能有重复数字的整数数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次，解集不能包含重复的组合。 

 

示例 1：

输入：candidates = [10,1,2,7,6,1,5], target = 8
输出：
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
示例 2：

输入：candidates = [2,5,2,1,2], target = 5
输出：
[
[1,2,2],
[5]
]
 

提示：

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
*/
/* 代码随想录
【回溯算法中的去重，树层去重树枝去重，你弄清楚了没？| LeetCode:40.组合总和II】https://www.bilibili.com/video/BV12V4y1V73A?vd_source=4e03c23dad636a1f83555277f3900371
*/

const nums1 = [10,1,2,7,6,1,5]
const target1 = 8

const nums2 = [2,5,2,1,2]
const target2 = 5
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

};

const combineSum2_250412_1 = (nums, target) => {
    let numsNew = JSON.parse(JSON.stringify(nums)).sort((a, b) => a - b)
    let resArr = []
    let path = []
    let usedArr = Array.from({length: nums.length}, () => 0)
    console.log('usedArr', usedArr, 'numsNew', numsNew)
    const dfs = (indexStart, sum, usedArr) => {
        if (sum >= target) {
            if (sum === target) resArr.push(path.slice(0))
            return
        }
        for (let i = indexStart; i < numsNew.length; i++) {
            if (numsNew[i] === numsNew[i - 1] &&  usedArr[i - 1] === 0 ) {
                continue
            }
            path.push(numsNew[i])
            usedArr[i] = 1
            dfs(i + 1, sum + numsNew[i], usedArr.slice(0))
            usedArr[i] = 0
            path.pop()
        }
    }
    dfs(0, 0, usedArr)
    // return Array.from(new Set(resArr))
    return resArr
}

const res1 = combineSum2_250412_1(nums1, target1)
console.log('res1', res1)