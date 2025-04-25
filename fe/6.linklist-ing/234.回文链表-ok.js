/*
234. 回文链表
简单
相关标签
相关企业
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

 

示例 1：


输入：head = [1,2,2,1]
输出：true
示例 2：


输入：head = [1,2]
输出：false
 

提示：

链表中节点数目在范围[1, 105] 内
0 <= Node.val <= 9
 

进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
};

console.log('head71', head71)
const reverseList = (head) => {
    let pre = null
    let cur = head
    while (cur) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
}
const isPalindrome_250425_1 = (head) => {
    let slow = head
    let fast = head
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    
    let head1 = head
    let head2 = slow.next
    slow.next = null
    console.log('head1', head1, 'head2', head2)
    let head2Reverse = reverseList(head2)
    console.log('head2Reverse', head2Reverse)
    // debugger;
    while (head2Reverse) {
        // debugger;
        if (head2Reverse.val !== head1.val) return false
        head2Reverse = head2Reverse.next
        head1 = head1.next
    }
    return true
}

const res1 = isPalindrome_250425_1(head73)
console.log('3 res1', res1)

const res2 = isPalindrome_250425_1(head72)
console.log('2 res2', res2)
