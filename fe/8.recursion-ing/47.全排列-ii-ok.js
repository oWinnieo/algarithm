/*
47. 全排列 II
中等
相关标签
相关企业
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

 

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

提示：

1 <= nums.length <= 8
-10 <= nums[i] <= 10
*/

const nums1 = [1,1,2]
const nums2 = [1,2,3]
/**s
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
};

const permuteWithDup_250416_1 = (nums) => {
    let numsNew = nums.sort((a, b) => a - b)
    let resArr = []
    let path = []
    let len = nums.length
    let eleUsed = Array.from({length: len}, () => 0)
    const dfs = () => {
        if (path.length === len) {
            resArr.push(path.slice(0))
            return
        }
        for (let i = 0; i < len; i++) {
            if (
                (numsNew[i] === numsNew[i - 1] && eleUsed[i - 1] === 0) ||
                eleUsed[i] === 1
            ) continue
            path.push(numsNew[i])
            eleUsed[i] = 1
            dfs()
            eleUsed[i] = 0
            path.pop()
        }
    }
    dfs()
    return resArr
}

const res1 = permuteWithDup_250416_1(nums1)
console.log('permute_250415_1 res1', res1)

const res2 = permuteWithDup_250416_1(nums2)
console.log('res2', res2)

