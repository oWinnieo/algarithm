/*
104. 二叉树的最大深度
简单
相关标签
相关企业
给定一个二叉树 root ，返回其最大深度。

二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

 

示例 1：



 

输入：root = [3,9,20,null,null,15,7]
输出：3
示例 2：

输入：root = [1,null,2]
输出：2
 

提示：

树中节点的数量在 [0, 104] 区间内。
-100 <= Node.val <= 100
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) return 0
        const leftH = dfs(nodeCurr.left)
        const rightH = dfs(nodeCurr.right)
        return 1 + Math.max(leftH, rightH)
    }
    const res = dfs(root)
    return res
};

const maxDept_exercise_241204_1 = (root) => {
    const dfs = (nodeCurr) => {
        return nodeCurr ? 1 + Math.max(dfs(nodeCurr.left), dfs(nodeCurr.right)) : 0
    }
    return dfs(root)
}

const maxDept_exercise_arr_241204_1 = (arr) => {
    if (arr.length === 0) return 0
    let nodeIndex = 0
    const dfs = (nodeIndexCurr) => {
        if (isNodeNull(arr[nodeIndexCurr])) return 0
        const leftH = dfs(nodeIndexCurr * 2 + 1)
        const rightH = dfs(nodeIndexCurr * 2 + 2)
        return 1 + Math.max(leftH, rightH)
    }
    return dfs(nodeIndex)
}

const res1 = maxDepth(r1)
console.log('res1', res1)

const res2 = maxDepth(tn3)
console.log('res2', res2)

const res21 = maxDept_exercise_241204_1(r1)
console.log('res21', res21)

const res22 = maxDept_exercise_241204_1(tn3)
console.log('res22', res22)

const res31 = maxDept_exercise_arr_241204_1(arr11)
console.log('res31', res31)

const res32 = maxDept_exercise_arr_241204_1(arr12)
console.log('res32', res32)