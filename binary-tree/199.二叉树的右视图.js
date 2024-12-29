/*
199. 二叉树的右视图
中等
相关标签
相关企业
给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例 1：

输入：root = [1,2,3,null,5,null,4]

输出：[1,3,4]

解释：



示例 2：

输入：root = [1,2,3,4,null,null,null,5]

输出：[1,3,4,5]

解释：



示例 3：

输入：root = [1,null,3]

输出：[1,3]

示例 4：

输入：root = []

输出：[]

 

提示:

二叉树的节点个数的范围是 [0,100]
-100 <= Node.val <= 100 
*/

const a2 = [1,2,3,null,5,null,4]
const a3 = [1,2,3,4,null,null,null,5]

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
var rightSideView = function(root) {
    
};

const binary_tree_right_ele_view1 = (root) => {
    if (root === null) return
    let res = []
    let queue = []
    let sizeCount = 0
    queue.push(root)
    while (queue.length > 0) {
        sizeCount = queue.length
        // let eleThisLayer = []
        while (sizeCount--) {
            let nodeCurr = queue.shift()
            if (nodeCurr === null) continue
            // eleThisLayer.push(nodeCurr.value)
            if (sizeCount === 0) {
                res.push(nodeCurr.value)
            }
            // debugger;
            if (nodeCurr.left) queue.push(nodeCurr.left)
            if (nodeCurr.right) queue.push(nodeCurr.right)
        }
    }
    return res
}

const iteration_exercise_241202_2 = (root) => {
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
        res.push(eleThisLayer)
    }
    return res
}

const binary_tree_right_ele_view2 = (arr) => {
    // if (arr.length === 0 || arr[0] === null) return
    // let res = []
    // let queue = []
    // let sizeCount = 0
    // let nodeIndex = 0
    // queue.push(arr[nodeIndex])
    // while(queue.length > 0) {
    //     sizeCount = queue.length
    //     while (sizeCount--) {
    //         let nodeCurr = queue.shift()
    //         if (nodeCurr === null) continue
    //         if (sizeCount === 1) {
    //             res.push(nodeCurr)
    //         }
    //         if (arr[nodeIndex * 2 + 1]) queue.push(arr[nodeIndex * 2 + 1])
    //         if (arr[nodeIndex * 2 + 2]) queue.push(arr[nodeIndex * 2 + 2])
    //     }
    // }
}

console.log('r1', r1)
const res1 = binary_tree_right_ele_view1(r1)
console.log('res1', res1)