class LinklistNode {
    constructor (val, next) {
        this.val = val ? val : 0
        this.next = next ? next : null
    }
}

class ListNode {
    constructor (val, next) {
        this.val = val ? val : 0
        this.next = next ? next : null
    }
}

class LinkList {
    constructor (head) {
        this.head = null
        this.size = 0
    }
    get(index) {
        if (index < 0 || index >= this.size) return -1
        let cur = this.head
        while (index--) {
            cur = cur.next
        }
        return cur.val
    }
    getHead() {
        return this.head
    }
    addAtHead(val) {
        let cur = new ListNode(val, this.head)
        this.head = cur
        this.size++
        return this.head
    }
    addAtTail(val) {
        let cur = this.head
        while (cur.next !== null) {
            cur = cur.next
        }
        let newNode = new ListNode(val)
        cur.next = newNode
        this.size++
        return this.head
    }
    addAtIndex(index, val) {
        let dummyHead = new ListNode(0, this.head)
        let cur = dummyHead
        while (index--) {
            cur = cur.next
        }
        let newNode = new ListNode(val, cur.next)
        cur.next = newNode
        this.size++
        return this.head
    }
    deleteAtIndex(index) {
        let dummyHead = new ListNode(0, this.head)
        let cur = dummyHead
        while (index--) {
            cur = cur.next
        }
        cur.next = cur.next.next
        this.size--
        return this.head
    }
    listToArrayBySize() {
        if (this.size === 0) {
            return []
        }
        let resArr = []
        let size = this.size
        let cur = this.head
        while (size--) {
            resArr.push(cur.val)
            cur = cur.next
        }
        return resArr
    }
    listToArrayByHead(head) {
        if (head === null) {
            return []
        }
        let resArr = []
        let cur = head
        while (cur) {
            resArr.push(cur.val)
            cur = cur.next
        }
        return resArr
    }
}

function arrayToList(arr) {
    if (arr.length === 0) {
        return null;
    }
    // 创建头节点
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

const listToArray = (head) => {
    if (head === null) {
        return []
    }
    let resArr = []
    let cur = head
    debugger;
    while (cur !== null) {
        resArr.push(cur.val)
        cur = cur.next
    }
    return resArr
}

const head1Arr = [1,2,6,3,4,5,6]
const head1 = arrayToList(head1Arr)
const val1 = 6

const head2Arr = []
const head2 = arrayToList(head2Arr)
const val2 = 1

const head3Arr = [7,7,7,7]
const head3 = arrayToList(head3Arr)
const val3 = 7

// const head1A = listToArray(head1)
// console.log('head1A', head1A)

// const arr = [1, 2, 3, 4, 5];
// const linkedList = arrayToList(arr);
// let currentNode = head1;
// while (currentNode) {
//     console.log(currentNode.val);
//     currentNode = currentNode.next;
// } 
