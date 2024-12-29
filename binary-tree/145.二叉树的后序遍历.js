/*
145. 二叉树的后序遍历
简单
相关标签
相关企业
给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

 

示例 1：

输入：root = [1,null,2,3]

输出：[3,2,1]

解释：



示例 2：

输入：root = [1,2,3,4,5,null,8,null,null,6,7,9]

输出：[4,6,7,5,2,9,8,3,1]

解释：



示例 3：

输入：root = []

输出：[]

示例 4：

输入：root = [1]

输出：[1]

 

提示：

树中节点的数目在范围 [0, 100] 内
-100 <= Node.val <= 100
 

进阶：递归算法很简单，你可以通过迭代算法完成吗？
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
var postorderTraversal = function(root) {
    let res = []
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) {
            return
        }
        dfs(nodeCurr.left)
        dfs(nodeCurr.right)
        res.push(nodeCurr.val)
    }
    dfs(root)
    return res
};

const traversal_exercise_241126_1 = (root) => {
    if (root === null) return
    let res = []
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) return
        dfs(nodeCurr.left)
        dfs(nodeCurr.right)
        res.push(nodeCurr)
    }
    dfs(root)
    return res
}

const iteration_exercise_241126_2 = (root) => {
    if (root === null) return
    let res = []
    let stack = []
    stack.push(root)
    while(stack.length > 0) {
        let nodeCurr = stack.pop()
        if (nodeCurr !== null) {
            res.push(nodeCurr)
            if (nodeCurr.left) stack.push(nodeCurr.left)
            if (nodeCurr.right) stack.push(nodeCurr.right)
        } else {
            continue
        }
    }
    return res.reverse()
}

const res1 = postorderTraversal(rr1)
console.log('res1', res1)

const res2 = traversal_exercise_241126_1(rr1)
console.log('res2', res2)

const res3 = iteration_exercise_241126_2(rr1)
console.log('res3', res3)