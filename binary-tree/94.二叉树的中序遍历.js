/*

代码
测试用例
测试结果
测试结果
94. 二叉树的中序遍历
简单
相关标签
相关企业
给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

 

示例 1：


输入：root = [1,null,2,3]
输出：[1,3,2]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
 

提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100
 

进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = []
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) {
            return
        }
        dfs(nodeCurr.left)
        res.push(nodeCurr.value)
        dfs(nodeCurr.right)
    }
    dfs(root)
    return res
};

const iteration = (root) => {
    let res = []
    let stack = []
    let nodeCurr = root
    while (nodeCurr !== null || stack.length > 0) {
        if (nodeCurr !== null) {
            stack.push(nodeCurr)
            nodeCurr = nodeCurr.left
        } else {
            nodeCurr = stack.pop()
            debugger;
            res.push(nodeCurr.value)
            nodeCurr = nodeCurr.right
        }
    }
    return res
}

const traversal_exercise_241115 = (root) => {
    let res = []
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) {
            return
        }
        dfs(nodeCurr.left)
        res.push(nodeCurr.value)
        dfs(nodeCurr.right)
    }
    dfs(root)
    return res
}

const iteration_exercise_241115 = (root) => {
    let res = []
    let stack = []
    let nodeCurr = root
    while (nodeCurr !== null || stack.length > 0) {
        if (nodeCurr !== null) {
            stack.push(nodeCurr)
            nodeCurr = nodeCurr.left
        } else {
            nodeCurr = stack.pop()
            res.push(nodeCurr.value)
            nodeCurr = nodeCurr.right
        }
    }
    return res
}

const traversal_exercise_241126_1 = (root) => {
    if (root === null) return
    let res = []
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) return
        dfs(nodeCurr.left)
        res.push(nodeCurr)
        dfs(nodeCurr.right)
    }
    dfs(root)
    return res
}

const iteration_exercise_241126_1 = (root) => {
    if (root === null) return
    let res = []
    let stack = []
    stack.push(root)
    let nodeCurr = stack.pop()
    while (stack.length > 0 || nodeCurr !== null) {
        if (nodeCurr !== null) {
            stack.push(nodeCurr)
            nodeCurr = nodeCurr.left
        } else {
            nodeCurr = stack.pop()
            res.push(nodeCurr)
            nodeCurr = nodeCurr.right
        }
    }
    return res
}

const traversal_exercise_241202_1 = (root) => {
    if (root === null) return
    let res = []
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) return
        dfs(nodeCurr.left)
        res.push(nodeCurr.value)
        dfs(nodeCurr.right)
    }
    dfs(root)
    return res
}
const iteration_exercise_241202_1 = (root) => {
    if (root === null) return
    let res = []
    let stack = []
    stack.push(root)
    let nodeCurr = stack.pop()
    while (stack.length > 0 || nodeCurr !== null) {
        if (nodeCurr !== null) {
            stack.push(nodeCurr)
            nodeCurr = nodeCurr.left
        } else {
            nodeCurr = stack.pop()
            debugger;
            res.push(nodeCurr.value)
            nodeCurr = nodeCurr.right
        }
    }
    return res
}



const res1 = traversal_exercise_241115(rr1)
console.log('res1', res1)

const res2 = traversal_exercise_241202_1(rr1)
console.log('res2', res2)

// iteration_exercise_241202_1
const res3 = iteration_exercise_241202_1(rr1)
console.log('res3', res3)
