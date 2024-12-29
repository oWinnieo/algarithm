/*
144. 二叉树的前序遍历
简单
相关标签
相关企业
给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

 

示例 1：

输入：root = [1,null,2,3]

输出：[1,2,3]

解释：



示例 2：

输入：root = [1,2,3,4,5,null,8,null,null,6,7,9]

输出：[1,2,4,5,6,7,3,8,9]

解释：



示例 3：

输入：root = []

输出：[]

示例 4：

输入：root = [1]

输出：[1]

 

提示：

树中节点数目在范围 [0, 100] 内
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
var preorderTraversal = function(root) {
    let res = []
    const dfs = (nodeCurr) => {
        // debugger;
        if (nodeCurr === null) {
            return
        }
        res.push(nodeCurr.value)
        dfs(nodeCurr.left)
        // res.push(nodeCurr.value)
        dfs(nodeCurr.right)
        // res.push(nodeCurr.value)
    }
    dfs(r1)
    return res
};

const preOrderTraversal_array = (array) => {
    let res = []
    const dfs = (startIndex) => {
        if (array[startIndex] === null || array[startIndex] === undefined) {
            return
        }
        // res.push(array[startIndex])
        dfs(startIndex * 2 + 1)
        // res.push(array[startIndex])
        dfs(startIndex * 2 + 2)
        res.push(array[startIndex])
    }
    dfs(0)
    return res
}

const iteration = (root) => {
    let res = []
    let stack = []
    stack.push(root)
    while(stack.length > 0) {
        let nodeCurr = stack.pop()
        /** */
        if (nodeCurr !== null) {
            res.push(nodeCurr.value)
        } else {
            continue
        }
        /** */
        
        /** *
        if (nodeCurr !== null) {
            res.push(nodeCurr.value)
        } else {
            continue
        }
        /** */
        stack.push(nodeCurr.right)
        stack.push(nodeCurr.left)
        // stack.push(nodeCurr.right)
        /*
        if (nodeCurr !== null) {
            res.push(nodeCurr.value)
        } else {
            continue
        }
        */
        debugger;
    }
    return res // .reverse()
}

const iteration_exercise1 = (root) => {
    let stack = []
    let res = []
    stack.push(root)
    while(stack.length > 0) {
        let nodeCurr = stack.pop()
        if (nodeCurr !== null) {
            res.push(nodeCurr.value)
        } else {
            continue
        }
        stack.push(nodeCurr.right)
        stack.push(nodeCurr.left)
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
        dfs(nodeCurr.right)
        res.push(nodeCurr.value)
    }
    dfs(root)
    return res
}
const iteration_exercise_241115 = (root) => {
    let res = []
    let stack = []
    stack.push(root)
    while (stack.length > 0) {
        let nodeCurr = stack.pop()
        if (nodeCurr === null) {
            continue
        } else {
            res.push(nodeCurr.value)
        }
        
        stack.push(nodeCurr.left)
        stack.push(nodeCurr.right)
    }
    return res.reverse()
}

const traversal_exercise_241126_1 = (root) => {
    if (root === null) return
    let res = []
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) return
        res.push(nodeCurr)
        dfs(nodeCurr.left)
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
    while (stack.length > 0) {
        let nodeCurr = stack.pop()
        if (nodeCurr !== null) {
            res.push(nodeCurr)
            stack.push(nodeCurr.right)
            stack.push(nodeCurr.left)
        } else {
            continue
        }
        // stack.push(nodeCurr.right)
        // stack.push(nodeCurr.left)
    }
    return res
}

const traversal_exercise_241202_1 = (root) => {
    if (root === null) return
    let res = []
    const dfs = (nodeCurr) => {
        if (nodeCurr !== null) {
            res.push(nodeCurr.value)
            dfs(nodeCurr.left)
            dfs(nodeCurr.right)
        }
    }
    dfs(root)
    return res
}
const iteration_exercise_241202_1 = (root) => {
    if (root === null) return
    let res = []
    let stack = []
    stack.push(root)
    while (stack.length > 0) {
        let nodeCurr = stack.pop()
        if (nodeCurr !== null) {
            res.push(nodeCurr.value)
            stack.push(nodeCurr.right)
            stack.push(nodeCurr.left)
        } else {
            continue
        }
    }
    return res
}

console.log('r1', r1)
const res1 = preorderTraversal(r1)
console.log('res1', res1)

// console.log('a1', a1)
// const res_array1 = preOrderTraversal_array(a1)
// console.log('res_array1', res_array1)

const res_traversal1 = traversal_exercise_241202_1(r1)
console.log('res_traversal1', res_traversal1)

const res_iteration1 = iteration_exercise_241202_1(r1)
console.log('res_iteration1', res_iteration1)

/*
demo:
作者：笨猪爆破组
链接：https://leetcode.cn/problems/binary-tree-inorder-traversal/solutions/412997/shou-hua-tu-jie-yong-zhan-mo-ni-zhong-xu-bian-li-z/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
const inorderTraversal = (root) => {
    const res = [];
    const inorder = (root) => {
        if (root == null) {
            return;
        }
        inorder(root.left); // 先递归左子树
        res.push(root.val); // 将当前节点值推入res
        inorder(root.right); // 再递归右子树
    };
    inorder(root);
    return res;
};


