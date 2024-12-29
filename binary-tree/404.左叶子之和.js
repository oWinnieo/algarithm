/*
404. 左叶子之和
简单
相关标签
相关企业
给定二叉树的根节点 root ，返回所有左叶子之和。

 

示例 1：



输入: root = [3,9,20,null,null,15,7] 
输出: 24 
解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
示例 2:

输入: root = [1]
输出: 0
 

提示:

节点数在 [1, 1000] 范围内
-1000 <= Node.val <= 1000
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
var sumOfLeftLeaves = function(root) {
    
};

const getSumLeft = (root) => {
    if (root === null) return
    const dfs = (root) => {
        if (root === null) return 0
        if (root.left === null && root.right === null) return 0
        let leftSum = dfs(root.left)
        if (root.left !== null && root.left.left === null && root.left.right === null) {
            leftSum = root.left.value
        }
        let rightSum = dfs(root.right)
        return leftSum + rightSum
    }
    return dfs(root)
}

const arr241208_1 = [3,9,20,null,null,15,7]
const arr241208_2 = [1]

const tn241208_1 = buildTree(arr241208_1)
const tn241208_2 = buildTree(arr241208_2)

const res1 = getSumLeft(tn241208_1)
console.log('res1', res1)

const res2 = getSumLeft(tn241208_2)
console.log('res2', res2)