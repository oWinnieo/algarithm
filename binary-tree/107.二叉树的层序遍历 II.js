/*
107. 二叉树的层序遍历 II
中等
相关标签
相关企业
给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：[[15,7],[9,20],[3]]
示例 2：

输入：root = [1]
输出：[[1]]
示例 3：

输入：root = []
输出：[]
 

提示：

树中节点数目在范围 [0, 2000] 内
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root === null) return
    let res = []
    let queue = []
    let sizeCount = 0
    queue.push(root)
    while (queue.length > 0) {
        sizeCount = queue.length
        let eleThisLayer = []
        while (sizeCount--) {
            let nodeCurr = queue.shift()
            if (nodeCurr === null) continue
            eleThisLayer.push(nodeCurr.value)
            if (nodeCurr.left) queue.push(nodeCurr.left)
            if (nodeCurr.right) queue.push(nodeCurr.right)
        }
        res.unshift(eleThisLayer)
    }
    return res
};

const res1 = levelOrderBottom(r1)
console.log('res1', res1)