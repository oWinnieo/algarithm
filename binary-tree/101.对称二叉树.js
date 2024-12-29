/*
101. 对称二叉树
简单
相关标签
相关企业
给你一个二叉树的根节点 root ， 检查它是否轴对称。

 

示例 1：


输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：


输入：root = [1,2,2,null,3,null,3]
输出：false
 

提示：

树中节点数目在范围 [1, 1000] 内
-100 <= Node.val <= 100
 

进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
var isSymmetric = function(root) {
    if (root === null) return true
    const dfs = (left, right) => {
        if (left === null && right !== null) return false
        if (left !== null && right === null) return false
        if (left === null && right === null) return true
        if (left.value !== right.value) return false
        const outside = dfs(left.left, right.right)
        const inside = dfs(left.right, right.left)
        return outside && inside
    }
    return dfs(root.left, root.right)
};

const isSymmetric_exercise_241204_1 = (root) => {
    if (root === null) return true
    const dfs = (left, right) => {
        if (left === null && right !== null) return false
        if (left !== null && right === null) return false
        if (left === null && right === null) return true
        if (left.value !== right.value) return false
        const outside = dfs(left.left, right.right)
        const inside = dfs(left.right, right.left)
        return outside && inside
    }
    return dfs(root.left, root.right)
}

const isSymmetric_exercise_arr_241204_1 = (arr) => {
    if (arr.length === 0 || arr.length === 1) return true
    let index = 0
    const dfs = (leftIndex, rightIndex) => {
        if (isNodeNull(arr[leftIndex]) && !isNodeNull(arr[rightIndex])) return false
        if (!isNodeNull(arr[leftIndex]) && isNodeNull(arr[rightIndex])) return false
        if (isNodeNull(arr[leftIndex]) && isNodeNull(arr[rightIndex])) return true
        if (arr[leftIndex] !== arr[rightIndex]) return false
        const outside = dfs(leftIndex * 2 + 1, rightIndex * 2 + 2)
        const inside = dfs(leftIndex * 2 + 2, rightIndex * 2 + 1)
        return outside && inside
    }
    return dfs(index * 2 + 1, index * 2 + 2)
}

const resArr11 = isSymmetric_exercise_arr_241204_1(arr1)
console.log('resArr11', resArr11)

const resArr12 = isSymmetric_exercise_arr_241204_1(arr2)
console.log('resArr12', resArr12)

const resArr21 = isSymmetric_exercise_241204_1(tn1)
console.log('resArr21', resArr21)

const resArr22 = isSymmetric_exercise_241204_1(tn2)
console.log('resArr22', resArr22)

const isSymmetric_exercise_241208_1 = (root) => {
    if (root === null) return true
    const dfs = (nodeL, nodeR) => {
        if (nodeL === null && nodeR === null) return true
        if (nodeL === null && nodeR !== null) return false
        if (nodeL !== null && nodeR === null) return false
        if (nodeL.value !== nodeR.value) return false
        let outside = dfs(nodeL.left, nodeR.right)
        let inside = dfs(nodeL.right, nodeR.left)
        return outside && inside
    }
    return dfs(root.left, root.right)
}


const resArr21_241208_1_1 = isSymmetric_exercise_241204_1(tn1)
console.log('resArr21_241208_1_1', resArr21_241208_1_1)

const resArr22_241208_1_2 = isSymmetric_exercise_241204_1(tn2)
console.log('resArr22_241208_1_2', resArr22_241208_1_2)