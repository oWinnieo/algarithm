/*
19. 删除链表的倒数第 N 个结点
中等
相关标签
相关企业
提示
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

 

示例 1：


输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]
 

提示：

链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

进阶：你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
};

const removeNthFromEnd_250421_1 = (head, n) => {
    let dummyHead = new ListNode(0, head)
    let fast = dummyHead.next.next
    let slow = dummyHead.next
    while(n--) {
        fast = fast.next
    }
    console.log('fast', fast.val)
    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    console.log('slow', slow.val)
    slow.next = slow.next.next
    return dummyHead.next
}

const removeNthFromEnd_250421_2 = (head, n) => {
    let dummyHead = new ListNode(0, head)
    let slow = dummyHead
    let fast = dummyHead.next
    while (n && fast) {
        // debugger;
        fast = fast?.next ? fast.next : null
        n--
    }
    // debugger;
    console.log('fast.val', fast?.val ? fast.val : 'is null', n)
    if (n > 0) return dummyHead.next
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummyHead.next
}

const removeNthFromEnd_250421_3 = (head, n) => {
    let dummyHead = new ListNode(0, head)
    let slow = dummyHead
    let fast = dummyHead.next
    while (n-- && fast) {
        fast = fast.next
    }
    if (n > 0) return dummyHead.next
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummyHead.next
}

const removeNthFromEnd_250422_1 = (head, n) => {
    let dummyHead = new ListNode(0, head)
    let fast = dummyHead.next
    let slow = dummyHead
    while (n-- && fast) {
        fast = fast.next
    }
    // console.log('n', n)
    // debugger;
    if (n > 0) return dummyHead.next
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummyHead.next
}

console.log('head9Arr', head9Arr)
const res1 = removeNthFromEnd_250422_1(head9, 0)
console.log('removeNthFromEnd_250422_1 res1', res1)
const res1List = listToArray(res1)
console.log('res1List', res1List)