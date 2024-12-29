/*
222. 完全二叉树的节点个数
简单
相关标签
相关企业
给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

 

示例 1：


输入：root = [1,2,3,4,5,6]
输出：6
示例 2：

输入：root = []
输出：0
示例 3：

输入：root = [1]
输出：1
 

提示：

树中节点的数目范围是[0, 5 * 104]
0 <= Node.val <= 5 * 104
题目数据保证输入的树是 完全二叉树
 

进阶：遍历树来统计节点是一种时间复杂度为 O(n) 的简单解决方案。你可以设计一个更快的算法吗？
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
var countNodes = function(root) {
    
};

const getNum = (root) => {
    if (root === null) return 0
    const dfs = (nodeC) => {
        if (nodeC === null) return 0
        debugger;
        if (nodeC.left === null && nodeC.right === null) return 1
        let leftH = 1
        let rightH = 1
        let left = nodeC.left
        let right = nodeC.right
        while (left) {
            left = left.left
            leftH++
        }
        while (right) {
            right = right.right
            rightH++
        }
        debugger;
        if (leftH === rightH) return Math.pow(2, leftH) - 1
        let leftNum = dfs(nodeC.left)
        let rightNum = dfs(nodeC.right)
        return leftNum + rightNum + 1
    }
    return dfs(root)
}

const arr241208_1 = [1,2,3,4,5,6]
const arr1tn = buildTree(arr241208_1)

const arr241208_2 = []
const arr2tn = buildTree(arr241208_2)

const arr241208_3 = [1]
const arr3tn = buildTree(arr241208_3)

console.log('arr1tn', arr1tn)
console.log('arr2tn', arr2tn)
console.log('arr3tn', arr3tn)

const res1 = getNum(arr1tn)
console.log('res1', res1)

// const res2 = getNum(arr2tn)
// console.log('res2', res2)

// const res3 = getNum(arr3tn)
// console.log('res3', res3)

const getNum_exercise_241208_1 = (root) => {
    if (root === null) return 0
    const dfs = (nC) => {
        if (nC === null) return 0
        if (nC.left === null && nC.right === null) return 1
        let left = nC.left
        let right = nC.right
        let leftH = 1
        let rightH = 1
        while (left) {
            left = left.left
            leftH++
        }
        while (right) {
            right = right.right
            rightH++
        }
        if (leftH === rightH) return Math.pow(2, leftH) - 1
        return 1 + getNum_exercise_241208_1(nC.left) + getNum_exercise_241208_1(nC.right)
    }
    return dfs(root)
}

const res11 = getNum_exercise_241208_1(arr1tn)
console.log('res11', res11)

const getNum_exercise_241208_2 = (root) => {
    if (root === null) return 0
    const dfs = (nodeC) => {
        if (nodeC === null) return 0
        if (nodeC.left === null && nodeC.right === null) return 1
        let left = nodeC.left
        let leftH = 1
        let right = nodeC.right
        let rightH = 1
        while (left) {
            left = left.left
            leftH++
        }
        while (right) {
            right = right.right
            rightH++
        }
        if (leftH === rightH) return Math.pow(2, leftH) - 1
        return 1 + dfs(nodeC.left) + dfs(nodeC.right)
    }
    return dfs(root)
}

const res111 = getNum_exercise_241208_2(arr1tn)
console.log('res111', res111)