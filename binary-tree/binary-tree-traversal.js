var traversal_inorder_demo = function(root) {
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

const traversal_preorder_demo = (root) => {
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
    dfs(root)
    return res
}

const traversal_postorder_demo = (root) =>{
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

const resDemo1 = traversal_inorder_demo(rr1)
console.log('resDemo1', resDemo1)
const resDemo2 = traversal_preorder_demo(rr1)
console.log('resDemo2', resDemo2)
const resDemo3 = traversal_postorder_demo(rr1)
console.log('resDemo3', resDemo3)

console.log('rr1', rr1)
const traversal_inorder_250409_1 = (root) => {
    let resArr = []
    const dfs = (node) => {
        if (node === null) return
        dfs(node.left)
        resArr.push(node.value)
        dfs(node.right)
    }
    dfs(root)
    return resArr
}

const traversal_preorder_250409_1 = (root) => {
    let resArr = []
    const dfs = (node) => {
        if (node === null) return
        resArr.push(node.value)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return resArr
}

const traversal_postorder_250409_1 = (root) => {
    let resArr = []
    const dfs = (node) => {
        if (node === null) return
        dfs(node.left)
        dfs(node.right)
        resArr.push(node.value)
    }
    dfs(root)
    return resArr
}

// const iteration_250409_1 = () => {

// }

const res11 = traversal_inorder_250409_1(rr1)
console.log('res11', res11)
const res12 = traversal_preorder_250409_1(rr1)
console.log('res12', res12)
const res13 = traversal_postorder_250409_1(rr1)
console.log('res13', res13)

const iteration_inorder_250409_1 = (root) => {
    let resArr = []
    let stack = []
    let nodeCurr = root
    while (nodeCurr !== null || stack.length > 0) {
        if (nodeCurr !== null) {
            stack.push(nodeCurr)
            nodeCurr = nodeCurr.left
        } else {
            nodeCurr = stack.pop()
            resArr.push(nodeCurr.value)
            nodeCurr = nodeCurr.right
        }
    }
    return resArr
}

const iteration_preorder_250409_1 = (root) => {
    let resArr = []
    let stack = []
    let nodeCurr
    stack.push(root)
    while (stack.length > 0) {
        nodeCurr = stack.pop()
        if (nodeCurr !== null) {
            resArr.push(nodeCurr.value)
        } else {
            continue
        }
        stack.push(nodeCurr.right)
        stack.push(nodeCurr.left)
    }
    return resArr
}

const iteration_postorder_250409_1 = (root) => {
    let resArr = []
    let stack = []
    let nodeCurr
    stack.push(root)
    while (stack.length > 0) {
        nodeCurr = stack.pop()
        if (nodeCurr !== null) {
            resArr.push(nodeCurr.value)
        } else {
            continue
        }
        stack.push(nodeCurr.left)
        stack.push(nodeCurr.right)
    }
    resArr.reverse()
    return resArr
}

const iteration_inorder_250410_1 = (root) => {
    let resArr = []
    let stack = []
    let nodeCurr
    stack.push(root)
    nodeCurr = stack.pop()
    while(stack.length > 0 || nodeCurr !== null) {
        if (nodeCurr !== null) {
            stack.push(nodeCurr)
            nodeCurr = nodeCurr.left
        } else {
            nodeCurr = stack.pop()
            resArr.push(nodeCurr.value)
            nodeCurr = nodeCurr.right
        }
    }
    return resArr
}
const iteration_preorder_250410_1 = (root) => {
    let resArr = []
    let stack = []
    let nodeCurr
    stack.push(root)
    while(stack.length > 0) {
        nodeCurr = stack.pop()
        if (nodeCurr !== null) {
            resArr.push(nodeCurr.value)
        } else {
            continue
        }
        stack.push(nodeCurr.right)
        stack.push(nodeCurr.left)
    }
    return resArr
}

const iteration_postorder_250410_1 = (root) => {
    let resArr = []
    let stack = []
    let nodeCurr
    stack.push(root)
    while(stack.length > 0) {
        nodeCurr = stack.pop()
        if (nodeCurr !== null) {
            resArr.push(nodeCurr.value)
        } else {
            continue
        }
        stack.push(nodeCurr.left)
        stack.push(nodeCurr.right)
    }
    resArr.reverse()
    return resArr
}


const res21 = iteration_inorder_250410_1(rr1)
console.log('iteration_inorder_250410_1 res21', res21)
const res22 = iteration_preorder_250410_1(rr1)
console.log('res22', res22)
const res23 = iteration_postorder_250410_1(rr1)
console.log('res23', res23)

const levelOrder_250410_1 = (root) => {
    let resArr = []
    let queue = []
    let sizeCount = 0
    queue.push(root)
    // debugger;
    while (queue.length > 0) {
        sizeCount = queue.length
        let eleThisLayer = []
        while (sizeCount) {
            let nodeCurr = queue.shift()
            if (nodeCurr === null) continue
            eleThisLayer.push(nodeCurr.value)
            if (nodeCurr.left) queue.push(nodeCurr.left)
            if (nodeCurr.right) queue.push(nodeCurr.right)
            sizeCount--
        }
        resArr.push(eleThisLayer)
        // debugger;
    }
    return resArr
}

const levelOrder_250410_2 = (root) => {
    let resArr = []
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
        resArr.push(eleThisLayer)
    }
    return resArr
}

const levelOrder_250410_3 = (root) => {
    let resArr = []
    let sizeCount = 0
    let queue = []
    queue.push(root)
    while (queue.length > 0) {
        sizeCount = queue.length
        let eleThisLayer = []
        while(sizeCount--) {
            let nodeCurr = queue.shift()
            eleThisLayer.push(nodeCurr.value)
            if (nodeCurr.left) queue.push(nodeCurr.left)
            if (nodeCurr.right) queue.push(nodeCurr.right)
        }
        resArr.push(eleThisLayer)
    }
    return resArr
}

var levelOrder_demo_250410_1 = function(root) {
    const ret = [];
    if (!root) {
        return ret;
    }

    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            ret[ret.length - 1].push(node.value);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
        
    return ret;
};

const levelOrder_bottom_250410_1 = (root) => {
    let resArr = []
    let queue = []
    let sizeCount = 0
    queue.push(root)
    while (queue.length) {
        sizeCount = queue.length
        // resArr.push([])
        let eleThisLayer = []
        while (sizeCount--) {
            let nodeCurr = queue.shift()
            // resArr[resArr.length - 1].push(nodeCurr.value)
            eleThisLayer.push(nodeCurr.value)
            if (nodeCurr.left) queue.push(nodeCurr.left)
            if (nodeCurr.right) queue.push(nodeCurr.right)
        }
        resArr.unshift(eleThisLayer)
    }
    return resArr
}


const res31 = levelOrder_250410_3(rr1)
console.log('levelOrder_250410_3 res31', res31)

const res32 = levelOrder_demo_250410_1(rr1)
console.log('levelOrder_demo_250410_1 res32', res32)

const res33 = levelOrder_bottom_250410_1(rr1)
console.log('levelOrder_bottom_250410_1 res33', res33)
