/*
142. 环形链表 II
中等
相关标签
相关企业
给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

 

示例 1：



输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
示例 2：



输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
示例 3：



输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
 

提示：

链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引
 

进阶：你是否可以使用 O(1) 空间解决此题？

pic same with 141.
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
};

const detectCycle_250423_1 = (head) => {
    if (!head || !head.next) return null
    let fast = head.next.next
    let slow = head.next
    while (fast && fast.next && fast !== slow) {
        fast = fast.next.next
        slow = slow.next
    }
    slow = head
    while (fast && fast !== slow) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}

console.log('headCycle1Arr', headCycle1Arr)
console.log('headCycle1', headCycle1)
const res1 = detectCycle_250423_1(headCycle1)
console.log('detectCycle_250423_1 res1', res1)

console.log('headCycle2Arr', headCycle2Arr)
console.log('headCycle2', headCycle2)
const res2 = detectCycle_250423_1(headCycle2)
console.log('res2', res2)

console.log('headCycle3Arr', headCycle3Arr)
console.log('headCycle3', headCycle3)
const res3 = detectCycle_250423_1(headCycle3)
console.log('res3', res3)