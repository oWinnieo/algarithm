/*

代码


测试用例
测试结果
测试结果
24. 两两交换链表中的节点
中等
相关标签
相关企业
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

 

示例 1：


输入：head = [1,2,3,4]
输出：[2,1,4,3]
示例 2：

输入：head = []
输出：[]
示例 3：

输入：head = [1]
输出：[1]
 

提示：

链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    
};


const swapPairs_250421_1 = (head) => {
    let dummyHead = new ListNode(0, head)
    let pre = dummyHead
    let left = head
    let right = head.next
    while (left !== null && right !== null) {
        let temp = right.next
        right.next = left
        left.next = temp
        pre.next = right
        pre = left
        left = left.next
        right = left?.next ? left.next : null
    }
    return dummyHead.next
}
const swapPairs_250421_11 = (head) => {
    let dummyHead = new ListNode(0, head)
    let pre = dummyHead
    let left = head
    let right = head.next
    while (left && right) {
        let temp = right.next
        right.next = left
        left.next = temp
        pre.next = right
        pre = left
        left = left.next
        right = left?.next ? left.next : null
    }
    return dummyHead.next
}

const swapPairs_250421_2 = (head) => {
    let dummyHead = new ListNode(0, head)
    let cur = dummyHead
    while (cur.next !== null && cur.next.next !== null) {
        let temp1 = cur.next
        let temp2 = cur.next.next.next
        cur.next = cur.next.next
        cur.next.next = temp1
        temp1.next = temp2
        cur = temp1
    }
    return dummyHead.next
}

const swapPairs_250421_21 = (head) => {
    let dummyHead = new ListNode(0, head)
    let cur = dummyHead
    while (cur.next && cur.next.next) {
        let temp = cur.next.next.next
        cur.next.next.next = cur.next
        cur.next = cur.next.next
        cur.next.next.next = temp
        cur = cur.next.next
        // cur.next.next = temp 
        // cur.next.next.next = cur.next
        // cur.next.next = temp
        // cur.next = cur.next.next
        // cur = cur.next.next
    }
    return dummyHead.next
}

const swapPairs_250421_3 = (head) => {
    let dummyHead = new ListNode(0, head)
    let cur = dummyHead
    while (cur.next && cur.next.next) {
        let temp = cur.next.next.next
        cur.next.next.next = cur.next
        cur.next = cur.next.next
        cur.next.next.next = temp
        cur = cur.next.next
    }
    return dummyHead.next
}

var swapPairs_demo_250421_1 = function (head) {
    let ret = new ListNode(0, head), temp = ret;
    while (temp.next && temp.next.next) {
      let cur = temp.next.next, pre = temp.next;
      pre.next = cur.next;
      cur.next = pre;
      temp.next = cur;
      temp = pre;
    }
    return ret.next;
  };

const swapPairs_recursive_250421_1 = (head) => {
    let dummyHead = new ListNode(0, head)
    let cur = dummyHead
    let left = cur.next
    let right = cur.next.next
    const dfs = (cur, left, right) => {
        if (left === null || right === null) {
            return
        }
        let temp = right.next
        right.next = left
        left.next = temp
        cur.next = right
        dfs(left, left?.next, left?.next?.next)
        // return dfs()
    }
    dfs(dummyHead, cur.next, cur.next.next)
    return dummyHead.next
}

// const res1 = swapPairs_250421_11(head5)
// console.log('res1 swapPairs_250421_11', res1)
// const res1Arr_1 = listToArray(res1)
// console.log('res1Arr_1', res1Arr_1)
console.log('head5', head5, listToArray(head5))

const res2 = swapPairs_recursive_250421_1(head8)
console.log('res2 swapPairs_recursive_250421_1', res2)
const res2Arr_1 = listToArray(res2)
console.log('res2Arr_1', res2Arr_1)

// const res21 = swapPairs_250421_3(head6)
// console.log('res21 12 swapPairs_250421_3', res21)
// const res21Arr_1 = listToArray(res21)
// console.log('res21Arr_1', res21Arr_1)

// const res22 = swapPairs_250421_3(head7)
// console.log('res2 12 swapPairs_250421_3', res2)
// const res22Arr_1 = listToArray(res22)
// console.log('res22Arr_1', res22Arr_1)