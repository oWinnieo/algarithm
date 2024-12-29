/*
257. 二叉树的所有路径
简单
相关标签
相关企业
给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

叶子节点 是指没有子节点的节点。

 
示例 1：


输入：root = [1,2,3,null,5]
输出：["1->2->5","1->3"]
示例 2：

输入：root = [1]
输出：["1"]
 

提示：

树中节点的数目在范围 [1, 100] 内
-100 <= Node.val <= 100
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
};

const getPath = (root) => {
    if (root === null) return []
    const res = []
    const path = []
    const dfs = (nodeCurr, pathCurr) => {
        pathCurr.push(nodeCurr.value)
        if (nodeCurr.left === null && nodeCurr.right === null) {
            res.push(pathCurr.slice().join('->'))
            return
        }
        if (nodeCurr.left) {
            dfs(nodeCurr.left, pathCurr)
            pathCurr.pop()
        }
        if (nodeCurr.right) {
            dfs(nodeCurr.right, pathCurr)
            pathCurr.pop()
        }
    }
    dfs(root, path)
    return res
}

const arr241208_1 = [1,2,3,null,5]

const arr241208_2 = [1]

const tn241208_1 = buildTree(arr241208_1)

const tn241208_2 = buildTree(arr241208_2)

console.log('tn241208_1', tn241208_1)
console.log('tn241208_2', tn241208_2)

const res1 = getPath(tn241208_1)
console.log('res1', res1)

const res2 = getPath(tn241208_2)
console.log('res2', res2)

var binaryTreePaths_lu = function(root) {
    //递归遍历+递归三部曲
    let res = [];
    //1. 确定递归函数 函数参数
    const getPath = function(node,curPath) {
     //2. 确定终止条件，到叶子节点就终止
        if(node.left === null && node.right === null) {
            curPath += node.value;
            res.push(curPath);
            return;
        }
        //3. 确定单层递归逻辑
        curPath += node.value + '->';
        node.left && getPath(node.left, curPath);
        node.right && getPath(node.right, curPath);
    }
    getPath(root, '');
    return res;
};

var binaryTreePaths_lu_test = function(root) {
    //递归遍历+递归三部曲
    let res = [];
    //1. 确定递归函数 函数参数
    const getPath = function(node,curPath) {
     //2. 确定终止条件，到叶子节点就终止
        if(node.left === null && node.right === null) {
            curPath += node.value;
            // curPath.push(node.value)
            res.push(curPath);
            return;
        }
        //3. 确定单层递归逻辑
        curPath += node.value + '->';
        // curPath.push(node.value)
        node.left && getPath(node.left, curPath);
        node.right && getPath(node.right, curPath);
    }
    getPath(root, '');
    return res;
};

const res1_lu = binaryTreePaths_lu_test(tn241208_1)
console.log('res1_lu', res1_lu)

// const res2_lu = binaryTreePaths_lu_test(tn241208_2)
// console.log('res2_lu', res2_lu)