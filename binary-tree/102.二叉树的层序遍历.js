/*
102. 二叉树的层序遍历
中等
相关标签
相关企业
给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
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
var levelOrder = (root) => {
    let res = []
    let stack = []
    if (root === null) return
    let sizeCount = 0
    stack.push(root)
    // res.push([root.value])
    while (stack.length > 0) {
        sizeCount = stack.length
        let eleThisLayer = []
        while (sizeCount--) {
            let nodeCurr = stack.shift()
            eleThisLayer.push(nodeCurr.value)
            if (nodeCurr.left !== null) {
                stack.push(nodeCurr.left)
            }
            if (nodeCurr.right !== null) {
                stack.push(nodeCurr.right)
            }
        }
        res.push(eleThisLayer)
    //     let nodeCurr = stack.shift()
    //     // debugger;
    //     if (nodeCurr === null) {
    //         continue
    //     }
    //     res.push([nodeCurr.left.value, nodeCurr])
    //     stack.push(nodeCurr.left)
    //     stack.push(nodeCurr.right)
    }
    return res
};

const levelOrder_arr = (arr) => {
    let res = []
    // let stack = []
    // let count = 0
    // stack.push(count)
    // while (count < arr.length) {
    //     let count = stack.shift()
    //     debugger;
    //     if (arr[count] === null) continue
    //     res.push(arr[count])
    //     count = count *
    //     stack.push(count * 2 + 1)
    //     stack.push(count * 2 + 2)
    // }
    return res
}

const levelOrder_241126_1 = (root) => {
    if (root === null) return
    let res = []
    let queue = []
    let sizeCount = 0
    queue.push(root)
    while(queue.length > 0) {
        sizeCount = queue.length
        let eleLayer = []
        while(sizeCount--) {
            let nodeCurr = queue.shift()
            eleLayer.push(nodeCurr)
            if (nodeCurr.left !== null) {
                queue.push(nodeCurr.left)
            }
            if (nodeCurr.right !== null) {
                queue.push(nodeCurr.right)
            }
        }
        res.push(eleLayer)
    }
    return res
}

const levelOrder_241126_2 = (root) => {
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
            eleThisLayer.push(nodeCurr)
            if (nodeCurr.left !== null) queue.push(nodeCurr.left)
            if (nodeCurr.right !== null) queue.push(nodeCurr.right)
        }
        res.push(eleThisLayer)
    }
    return res
}

const iteration_exercise_241126_1 = (root) => {
    if (root === null) return
    let res = []
    let queue = []
    let sizeCount = 0
}

const iteration_exercise_241202_1 = (root) => {
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

const arr1 = [3,9,20,null,null,15,7]

const res1 = levelOrder_241126_2(rr1)
console.log('res1', res1)

const res2 = iteration_exercise_241202_1(rr1)
console.log('res2', res2)

const res3 = iteration_exercise_241202_2(rr1)
console.log('res3', res3)

// const res2 = levelOrder_arr(arr1)
// console.log('res2', res2)