/*
141. 环形链表
简单
相关标签
相关企业
给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

 

示例 1：



输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
示例 2：



输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
示例 3：



输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
 

提示：

链表中节点的数目范围是 [0, 104]
-105 <= Node.val <= 105
pos 为 -1 或者链表中的一个 有效索引 。
 

进阶：你能用 O(1)（即，常量）内存解决此问题吗？
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
};

const hasCycle_250422_1 = (head) => {
    if (!head || !head.next) return false
    let fast = head.next.next
    let slow = head.next
    // debugger;
    while (fast && fast.next && fast !== slow) {
        // debugger;
        fast = fast.next.next
        slow = slow.next
    }
    // debugger;
    return (fast !== slow && !fast || !fast.next) ? false : true 
    // if (!fast || !fast.next) return false
    // fast = head
    // while (fast !== slow) {
    //     fast = fast.next
    //     slow = slow.next
    // }
    // return fast
}

console.log('headCycle1Arr', headCycle1Arr)
console.log('headCycle1', headCycle1)
const res1 = hasCycle_250422_1(headCycle1)
console.log('res1', res1)

console.log('headCycle2Arr', headCycle2Arr)
console.log('headCycle2', headCycle2)
const res2 = hasCycle_250422_1(headCycle2)
console.log('res2', res2)

console.log('headCycle3Arr', headCycle3Arr)
console.log('headCycle3', headCycle3)
const res3 = hasCycle_250422_1(headCycle3)
console.log('res3', res3)