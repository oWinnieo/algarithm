const swap1 = (node1, node2) => {
    let temp = null
    temp = node1
    node1 = node2
    node2 = temp
    return {
        'left': node1,
        'right': node2
    }
}


var invertTree = function(root) { // wtest demo
    // 终止条件
    if (!root) {
        return null;
    }
    let rootNew = JSON.parse(JSON.stringify(root))
    // 交换左右节点
    const rightNode = rootNew.right;
    rootNew.right = invertTree(rootNew.left);
    rootNew.left = invertTree(rightNode);
    return rootNew;
};

const res1 = invertTree(r1)
console.log('res1', res1)

const binary_reverse1 = (root) => {
    if (root === null) return
    let rootNew = JSON.parse(JSON.stringify(root))
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) return
        let temp = nodeCurr.right
        nodeCurr.right = dfs(nodeCurr.left)
        nodeCurr.left = dfs(temp)
        return nodeCurr
    }
    dfs(rootNew)
    return rootNew
}

const res2 = binary_reverse1(r1)
console.log('res2', res2)

const swap2 = (node1, node2) => {
    let temp = node1
    node1 = node2
    node2 = temp
    return {
        node1: node1,
        node2: node2
    }
}

const binary_reverse2 = (root) => {
    if (root === null) return
    let res = []
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) return
        let tempReverse = swap2(nodeCurr.left, nodeCurr.right)
        debugger;
        nodeCurr.left = tempReverse.node1
        nodeCurr.right = tempReverse.node2
        dfs(nodeCurr.left)
        dfs(nodeCurr.right)
    }
    dfs(root)
    return root
}

const binary_reverse_exercise_241203_1 = (root) => {
    if (root === null) return
    let res = []
    const dfs = (nodeCurr) => {
        if (nodeCurr === null) return
        let tempRight = nodeCurr.right
        nodeCurr.right = dfs(nodeCurr.left)
        nodeCurr.left = dfs(tempRight)
        return nodeCurr
    }
    let rootNew = JSON.parse(JSON.stringify(root))
    dfs(rootNew)
    return rootNew
}

const res3 = binary_reverse_exercise_241203_1(r1)
console.log('res3', res3)