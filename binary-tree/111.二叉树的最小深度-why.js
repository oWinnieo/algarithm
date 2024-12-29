/*
111. 二叉树的最小深度
简单
相关标签
相关企业
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 

提示：

树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000
*/

const arr21tn = buildTree(arr21)
console.log('arr21tn', arr21tn)

const arr22tn = buildTree(arr22)
console.log('arr22tn', arr22tn)
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
var minDepth = function(root) {
    // if (root === null) return 0
    // const dfs = (nodeCurr) => {
    //     if (nodeCurr === null) return 0
    //     if (nodeCurr.left === null && nodeCurr.right === null) return 1
    //     const leftH = nodeCurr.left ? dfs(nodeCurr.left) : Infinity
    //     const rightH = nodeCurr.right ? dfs(nodeCurr.right) : Infinity
    //     // const leftH = dfs(nodeCurr.left)
    //     // const rightH = dfs(nodeCurr.right)
    //     // if (nodeCurr.left === null && nodeCurr.right !== null) return 1 + rightH
    //     // if (nodeCurr.left !== null && nodeCurr.right === null) return 1 + leftH
    //     return 1 + Math.min(leftH, rightH)
    // }
    // return dfs(root)
    if (root === null) return 0;

    // 如果没有子节点，返回 1
    if (root.left === null && root.right === null) return 1;

    // 递归计算左右子树的最小深度
    let leftDepth = root.left ? minDepth(root.left) : Infinity;
    let rightDepth = root.right ? minDepth(root.right) : Infinity;

    // 当前最小深度 = 子树的最小深度 + 1
    return 1 + Math.min(leftDepth, rightDepth);
};

const minDept_exercise_arr_241204_1 = (arr) => {
    if (arr.length === 0) return 0
    let nodeIndex = 0
    const dfs = (nodeIndexCurr) => {
        if (isNodeNull(arr[nodeIndexCurr])) return 0
        const leftIndex = nodeIndexCurr * 2 + 1
        const rightIndex = nodeIndexCurr * 2 + 2
        const leftH = dfs(leftIndex)
        const rightH = dfs(rightIndex)
        /* wtest focus */
        if (isNodeNull(arr[leftIndex]) && isNodeNull(arr[rightIndex])) return 1
        if (isNodeNull(arr[leftIndex]) && !isNodeNull(arr[rightIndex])) return 1 + rightH
        if (!isNodeNull(arr[leftIndex]) && isNodeNull(arr[rightIndex])) return 1 + leftH
        /* /wtest focus */
        return 1 + Math.min(leftH, rightH)
    }
    return dfs(nodeIndex)
}

var minDepth1_Demo = function(root) {
    if(!root) return 0;
    // 到叶子节点 返回 1
    if(!root.left && !root.right) return 1;
    // 只有右节点时 递归右节点
    if(!root.left) return 1 + minDepth1_Demo(root.right);
    // 只有左节点时 递归左节点
    if(!root.right) return 1 + minDepth1_Demo(root.left);
    return Math.min(minDepth1_Demo(root.left), minDepth1_Demo(root.right)) + 1;
};

const minDepth1_Demo_arr = (arr) => {
    if (arr.length === 0) return 0
    if (arr.length === 1) return 1
    let nodeIndex = 0
    const dfs = (nodeIndexCurr) => {
        if (isNodeNull(arr[nodeIndexCurr])) return 0
        if (isNodeNull(arr[nodeIndexCurr * 2 + 1]) && isNodeNull(arr[nodeIndexCurr * 2 + 2])) return 1
        let leftH = dfs(nodeIndexCurr * 2 + 2)
        let rightH = dfs(nodeIndexCurr * 2 + 1)
        if (isNodeNull(arr[nodeIndexCurr * 2 + 1])) return 1 + leftH
        if (isNodeNull(arr[nodeIndexCurr * 2 + 2])) return 1 + rightH
        return 1 + Math.min(leftH, rightH)
    }
    return dfs(nodeIndex)
}

// const res1 = minDept_exercise_arr_241204_1(arr21)
// console.log('res1', res1)

// const res2 = minDept_exercise_arr_241204_1(arr22)
// console.log('res2', res2)

// const res11 = minDepth(r1)
// console.log('res11', res11)

// const res12 = minDepth(rr1)
// console.log('res12', res12)

// const res_r21 = minDepth(r21)
// console.log('res_r21', res_r21)

// const res_r22 = minDepth(r22)
// console.log('res_r22', res_r22)

// const res_arr21tn = minDepth(arr21tn)
// console.log('res_arr21tn', res_arr21tn)

// const res_arr22tn = minDepth(arr22tn)
// console.log('res_arr22tn', res_arr22tn)

// const res21 = minDepth1_Demo(r21)
// console.log('res21 1', res21)

// const res22 = minDepth1_Demo(r22)
// console.log('res22', res22)

// const res21_arr = minDepth1_Demo_arr(arr21tn)
// console.log('res21_arr', res21_arr)

// const res22_arr = minDepth1_Demo_arr(arr22tn)
// console.log('res22_arr', res22_arr)

const res21_arr_e1 = minDepth(arr21tn)
console.log('res21_arr_e1', res21_arr_e1)

const res22_arr_e2 = minDepth(arr22tn)
console.log('res22_arr_e2', res22_arr_e2)

const res21_arr_d1 = minDepth1_Demo(arr21tn)
console.log('res21_arr_d1', res21_arr_d1)

const res22_arr_d2 = minDepth1_Demo(arr22tn)
console.log('res22_arr_d2', res22_arr_d2)




var minDepth1 = function(root) {
    if(!root) return 0;
    // 到叶子节点 返回 1
    if(!root.left && !root.right) return 1;
    // 只有右节点时 递归右节点
    if(!root.left) return 1 + minDepth(root.right);
    // 只有左节点时 递归左节点
    if(!root.right) return 1 + minDepth(root.left);
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// const res_md_21 = minDepth1(r21)
// console.log('res_md_21', res_md_21)

// const res_md_22 = minDepth1(r22)
// console.log('res_md_22', res_md_22)

var minDepth = function(root) {
    if(root == null) {
        return 0;
    }
    if(root.left == null && root.right == null) {
        return 1;
    }
    let ans = Number.MAX_SAFE_INTEGER;
    if(root.left != null) {
        ans = Math.min(minDepth(root.left), ans);
    }
    if(root.right != null) {
        ans = Math.min(minDepth(root.right), ans);
    }
    return ans + 1;
};

// const res21_d = minDepth(r21)
// console.log('res21_d', res21_d)

// const res22_d = minDepth(r22)
// console.log('res22_d', res22_d)



function minDepth_gpt(root) {
// 如果根节点为空，深度为 0
if (!root) return 0;

// 如果左子树为空，递归计算右子树深度
if (!root.left) return minDepth_gpt(root.right) + 1;

// 如果右子树为空，递归计算左子树深度
if (!root.right) return minDepth_gpt(root.left) + 1;

// 如果左右子树都存在，返回左右子树深度的最小值 + 1
return Math.min(minDepth_gpt(root.left), minDepth_gpt(root.right)) + 1;
}

// 示例测试
// const root = new TreeNode_gpt(1);
// root.left = new TreeNode_gpt(2);
// root.right = new TreeNode_gpt(3);
// root.left.left = new TreeNode_gpt(4);
// root.left.right = new TreeNode_gpt(5);

// const res_gpt_1 = minDepth_gpt(root)
// console.log('res_gpt_1', res_gpt_1); // 输出: 2

// const res_gpt_2 = minDepth_gpt(r21)
// console.log('res_gpt_2', res_gpt_2); // 输出: 2

// const res_gpt_3 = minDepth_gpt(r22)
// console.log('res_gpt_3', res_gpt_3); // 输出: 2

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth_g = function(root) {
    if (root === null) return 0;

    // 如果没有子节点，返回 1
    if (root.left === null && root.right === null) return 1;

    // 递归计算左右子树的最小深度
    let leftDepth = root.left ? minDepth_g(root.left) : Infinity;
    let rightDepth = root.right ? minDepth_g(root.right) : Infinity;

    // 当前最小深度 = 子树的最小深度 + 1
    return 1 + Math.min(leftDepth, rightDepth);
};

const res_g21 = minDepth_g(arr21tn)
console.log('res_g21',res_g21)
const res_g22 = minDepth_g(arr22tn)
console.log('res_g22',res_g22)

const minDepth_exercise_241208_1 = (root) => {
    if (root === null) return 0
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) return 0
        if (nodeCurr.left === null && nodeCurr.right === null) return 1
        let depLeft = nodeCurr.left ? dfs(nodeCurr.left) : Infinity
        let depRight = nodeCurr.right ? dfs(nodeCurr.right) : Infinity
        return 1 + Math.min(depLeft, depRight)
    }
    return dfs(root)
}

const res_241208_1 = minDepth_exercise_241208_1(arr21tn)
console.log('res_241208_1',res_241208_1)
const res_241208_2 = minDepth_exercise_241208_1(arr22tn)
console.log('res_241208_2',res_241208_2)