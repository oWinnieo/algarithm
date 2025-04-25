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
    // debugger;
    while (cur !== null) {
        resArr.push(cur.val)
        cur = cur.next
    }
    return resArr
}

const setCycleLinkList = (head, pos) => {
    // console.log('head', head, 'pos', pos)
    let dummyHead = new ListNode(0, head)
    // console.log('dummyHead', dummyHead)
    let cur = dummyHead.next
    let entry = null
    // console.log('cur', cur)
    // while (pos && cur && cur.next) {
    //     cur = cur.next
    //     pos--
    // }
    // if (pos === 0) entry = cur
    // console.log('entry', entry)
    // console.log('cur', cur)
    // while (cur && cur.next) {
    //     cur = cur.next
    // }
    while (cur && cur.next) {
        if (pos === 0) entry = cur
        cur = cur.next
        pos--
    }
    // console.log('cur', cur)
    cur.next = entry
    // debugger;
    return dummyHead.next
    // let nodeIndex = 
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

const head4Arr = [6, 5, 4, 3, 6, 5, 2, 1, 9, 10]
const head4 = arrayToList(head4Arr)

const head5Arr = [1,2,3,4]
const head5 = arrayToList(head5Arr)
const head6Arr = []
const head6 = arrayToList(head6Arr)
const head7Arr = [1]
const head7 = arrayToList(head7Arr)

const head8Arr = [6, 5, 4, 3, 6, 5, 2, 1, 9, 10]
const head8 = arrayToList(head8Arr)

const head9Arr = [0,1,2,3,4,5,6,7,8,9]
const head9 = arrayToList(head9Arr)

const headCycle1Arr = [3,2,0,-4]
const pos1 = 1
const headCycle1 = setCycleLinkList(arrayToList(headCycle1Arr), pos1)
// console.log('arrayToList(headCycle1Arr)', arrayToList(headCycle1Arr))

const headCycle2Arr = [1,2]
const pos2 = 0
const headCycle2 = setCycleLinkList(arrayToList(headCycle2Arr), pos2)
// console.log('arrayToList(headCycle2Arr)', arrayToList(headCycle2Arr))

const headCycle3Arr = [1]
const pos3 = -1
const headCycle3 = setCycleLinkList(arrayToList(headCycle3Arr), pos3)
// console.log('arrayToList(headCycle3Arr)', arrayToList(headCycle3Arr))

const head11Arr = [1,2,4]
const head12Arr = [1,3,4]
const head11 = arrayToList(head11Arr)
const head12 = arrayToList(head12Arr)

// const head21Arr = [1,2,3,10,11]
// const head22Arr = [1,2,5,9,12,15, 19, 25, 29, 31]
const head21Arr = []
const head22Arr = []
const head21 = arrayToList(head21Arr)
const head22 = arrayToList(head22Arr)

const head31Arr = []
const head32Arr = [0]
const head31 = arrayToList(head31Arr)
const head32 = arrayToList(head32Arr)

const head10Arr = [1,2,3,4,5]
const left10 = 2, right10 = 4
const head10 = arrayToList(head10Arr)

const head13Arr = [5]
const left13 = 1, right13 = 1
const head13 = arrayToList(head13Arr)

const setIntersectionList = (headA, headB, skipA, skipB) => {
    let curA = headA
    while (skipA - 1) {
        curA = curA.next
        skipA--
    }
    let curB = headB
    while (skipB - 1) {
        curB = curB.next
        skipB--
    }
    curB.next = curA.next
    console.log('curA 11', curA, 'curB', curB)
    return headB
}

const headA_Arr_1 = [4,1,8,4,5]
const headB_Arr_1 = [5,6,1] // wtest ,8,4,5]
const intersectVal1 = 8
const skipA1 = 2, skipB1 = 3
const headA_1 = arrayToList(headA_Arr_1)
const headB_1 = arrayToList(headB_Arr_1)


const headA_Arr_2 = [1,9,1,2,4]
const headB_arr_2 = [3] // wtest ,2,4]
const intersectVal2 = 2
const skipA2 = 3, skipB2 = 1
const headA_2 = arrayToList(headA_Arr_2)
const headB_2 = arrayToList(headB_arr_2)

const headB_1_skip = setIntersectionList(headA_1, headB_1, skipA1, skipB1)
console.log('headB_1_skip', headB_1_skip)
const headB_2_skip = setIntersectionList(headA_2, headB_2, skipA2, skipB2)
console.log('headB_2_skip', headB_2_skip)

const headA_Arr_3 = [2,4,6]
const headB_arr_3 = [1,5] // wtest ,2,4]
const intersectVal3 = undefined
const skipA3 = 3, skipB3 = 2
const headA_3 = arrayToList(headA_Arr_3)
const headB_3 = arrayToList(headB_arr_3)

const head71Arr = [1,2,2,1]
const head72Arr = [1,2]
const head73Arr = [1,2,3,4,5,4,3,2,1]
const head74Arr = [1,2,3,4,5,5,4,3,2,1]

const head71 = arrayToList(head71Arr)
const head72 = arrayToList(head72Arr)

const head73 = arrayToList(head73Arr)
const head74 = arrayToList(head74Arr)

const head81Arr = [1,2,3,4,5]
const head82Arr = [1,2,3,4,5,6]

const head81 = arrayToList(head81Arr)
const head82 = arrayToList(head82Arr)


// const head1A = listToArray(head1)
// console.log('head1A', head1A)

// const arr = [1, 2, 3, 4, 5];
// const linkedList = arrayToList(arr);
// let currentNode = head1;
// while (currentNode) {
//     console.log(currentNode.val);
//     currentNode = currentNode.next;
// } 

// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]
// 示例 2：
