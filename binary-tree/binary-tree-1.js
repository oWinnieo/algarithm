class binaryTree () {
    constructor (value) {
        this.value = 0
        this.left = null
        this.right = null
    }
}

class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.left = null
        this.right = nnll
    }
}
class BST {
    constructor () {
        this.root = null
    }
    insert (key, value) {
        const newNode = new Node(key, value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
}

class Node_Demo {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
   
  class BST_Demo {
    constructor() {
      this.root = null;
    }
   
    insert(key, value) {
      const newNode = new Node(key, value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
   
    insertNode(node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
   
    // 其他查找、中序遍历、最小值、最大值等方法略...
  }
   
  // 使用示例
  const bst = new BST();
  bst.insert(1, 'A');
  bst.insert(2, 'B');
  bst.insert(3, 'C');