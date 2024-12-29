/*
110. 平衡二叉树
简单
相关标签
相关企业
给定一个二叉树，判断它是否是 
平衡二叉树
  

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：true
示例 2：


输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
示例 3：

输入：root = []
输出：true
 

提示：

树中的节点数在范围 [0, 5000] 内
-104 <= Node.val <= 104
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
};

const ifBalance = (root) => {
    if (root === null) return true
    const dfs_getH = (nodeC) => {
        if (nodeC === null) return 0
        let leftH = dfs_getH(nodeC.left)
        if (leftH === -1) return -1
        let rightH = dfs_getH(nodeC.right)
        if (rightH === -1) return -1
        if (Math.abs(leftH - rightH) <= 1) {
            return 1 + Math.max(leftH, rightH)
        } else {
            return -1
        }
    }
    let res = dfs_getH(root)
    return res === -1 ? false : true
}

const arr241208_1 = [3,9,20,null,null,15,7]
const arr241208_2 = [1,2,2,3,3,null,null,4,4]
const arr241208_3 = []

const tn241208_1 = buildTree(arr241208_1)
const tn241208_2 = buildTree(arr241208_2)
const tn241208_3 = buildTree(arr241208_3)

const res1 = ifBalance(tn241208_1)
console.log('res1', res1)

const res2 = ifBalance(tn241208_2)
console.log('res2', res2)

const res3 = ifBalance(tn241208_3)
console.log('res3', res3)

