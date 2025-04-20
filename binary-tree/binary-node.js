/*
js实现二叉树
*/
class TreeNode_backup1 {
    constructor(value, left, right) {
        this.value = value ? value : 0
        this.left = left ? left : null
        this.right = right ? right : null
    }
}

class TreeNode_backup2 {
    constructor(value, left, right) {
        this.value = value ? value : 0
        this.left = left ? left : null
        this.right = right ? right : null
    }
}

class TreeNode {
    constructor (value, left, right) {
        this.value = value ? value : 0
        this.left = left ? left : null
        this. right = right ? right : null
    }
}


const a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

const r1 = new TreeNode('A')
const r2 = new TreeNode('B')
const r3 = new TreeNode('C')
const r4 = new TreeNode('D')
const r5 = new TreeNode('E')
const r6 = new TreeNode('F')
const r7 = new TreeNode('G')
r1.left = r2
r1.right = r3
r1.left.left = r4
r1.left.right = r5
r1.right.left = r6
r1.right.right = r7

// module.exports = {
//     a1,
//     r1
// }

class TreeNode2 {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

let rr1 = new TreeNode2('a1')
rr1.left = new TreeNode2('a2')
rr1.right = new TreeNode2('a3')

rr1.left.left = new TreeNode2('a4')
rr1.left.right = new TreeNode2('a5')

rr1.right.left = new TreeNode2('a6')
rr1.right.right = new TreeNode2('a7')

const isNodeNull = (arrNode) => {
    return arrNode === undefined || arrNode === null
}

/* for 对称二叉树 */
const arr1 = [1,2,2,3,4,4,3]
const arr2 = [1,2,2,null,3,null,3]

const tn1 = new TreeNode(1)
tn1.left = new TreeNode(2)
tn1.right = new TreeNode(2)
tn1.left.left = new TreeNode(3)
tn1.left.right = new TreeNode(4)
tn1.right.left = new TreeNode(4)
tn1.right.right = new TreeNode(3)

const tn2 = new TreeNode(1)
tn2.left = new TreeNode(2)
tn2.right = new TreeNode(2)
tn2.left.left = new TreeNode(null)
tn2.left.right = new TreeNode(3)
tn2.right.left = new TreeNode(null)
tn2.right.right = new TreeNode(3)
/* /for 对称二叉树 */

const tn3 = new TreeNode(1)
tn3.left = new TreeNode(2)
tn3.right = new TreeNode(2)
tn3.left.left = new TreeNode(null)
tn3.left.right = new TreeNode(3)
tn3.right.left = new TreeNode(null)
tn3.right.right = new TreeNode(3)

tn3.left.left.left = new TreeNode('a1')
tn3.left.left.right = new TreeNode('a2')

tn3.left.right.left = new TreeNode('a3')
tn3.left.right.right = new TreeNode('a4')

tn3.right.left.left = new TreeNode('a5')
tn3.right.left.right = new TreeNode('a6')

tn3.right.right.left = new TreeNode('a7')
tn3.right.right.right = new TreeNode('a8')

const arr11 = [3,9,20,null,null,15,7]
const arr12 = [1,null,2]

const arr21 = [3,9,20,null,null,15,7]
const arr22 = [2,null,3,null,4,null,5,null,6]

const r21 = new TreeNode(3)
r21.left = new TreeNode(9)
r21.right = new TreeNode(20)

r21.left.left = new TreeNode(null)
r21.left.right = new TreeNode(null)
r21.right.left = new TreeNode(15)
r21.right.right = new TreeNode(7)

const r22 = new TreeNode(2)
r22.left = new TreeNode(null)
r22.right = new TreeNode(3)

r22.left.left = new TreeNode(null)
r22.left.right = new TreeNode(4)
r22.right.left = new TreeNode(null)
r22.right.right = new TreeNode(6)

class TreeNode_gpt {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

// 工具函数：从数组构造二叉树
function buildTree(nodes) {
    if (!nodes.length) return null;

    let root = new TreeNode(nodes[0]);
    let queue = [root];
    let i = 1;

    while (queue.length && i < nodes.length) {
        let current = queue.shift();

        if (nodes[i] !== null) {
            current.left = new TreeNode(nodes[i]);
            queue.push(current.left);
        }
        i++;

        if (i < nodes.length && nodes[i] !== null) {
            current.right = new TreeNode(nodes[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}