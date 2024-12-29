/*
39. 组合总和
中等
相关标签
相关企业
给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 target 的不同组合数少于 150 个。

 

示例 1：

输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。
示例 2：

输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
示例 3：

输入: candidates = [2], target = 1
输出: []
 

提示：

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
candidates 的所有元素 互不相同
1 <= target <= 40
*/
/*
讲解: 【带你学透回溯算法-组合总和（对应「leetcode」力扣题目：39.组合总和）| 回溯法精讲！-哔哩哔哩】 https://b23.tv/yTxHVuX
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
    let res = []
    let sum = 0
    const helper = (startIndex, path, sum) => {
        if (sum > target) {
            return
        }
        if (sum === target) {
            res.push(path.slice())
            return
        }
        
        console.log('candidates', candidates[startIndex])
        debugger;
        for (let i = startIndex; i < candidates.length; i++) {
            sum += candidates[i]
            path.push(candidates[i])
            helper(i, path, sum)
            path.pop()
            sum -= candidates[i]
            
        }
    }
    helper(0, [], sum)
    return res
};

const exercise1 = (candidates, target) => {
    let res = []
    let sum = 0
    const dfs = (startIndex, sum, path) => {
        if (sum >= target) {
            if (sum === target) {
                res.push(path.slice())
            }
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            sum += candidates[i]
            path.push(candidates[i])
            dfs(i, sum, path)
            path.pop()
            sum -= candidates[i]
        }
    }
    dfs(0, 0, [])
    return res
}

const candidates1 = [2,3,6,7]
const target1 = 7
const candidates2 = [2,3,5]
const target2 = 8
const candidates3 = [2]
const target3 = 1

const res1 = exercise1(candidates1, target1)
console.log('res1', res1)

const res2 = exercise1(candidates2, target2)
console.log('res2', res2)

const res3 = exercise1(candidates3, target3)
console.log('res3', res3)