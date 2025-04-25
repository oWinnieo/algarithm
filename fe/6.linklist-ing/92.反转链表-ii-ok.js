/*
92. 反转链表 II
中等
相关标签
相关企业
给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 

示例 1：


输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
示例 2：

输入：head = [5], left = 1, right = 1
输出：[5]
 

提示：

链表中节点数目为 n
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

进阶： 你可以使用一趟扫描完成反转吗？
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    
};

console.log(head10, head13)
const reverseBetween_250424_1 = (head, left, right) => {
    let dummyHead = new ListNode(0, head)
    let preL = dummyHead 
    while (left > 1) {
        preL = preL.next
        left--
        right--
    }
    let preR = preL
    console.log('preR', preR)
    while (right - left) {
        console.log('preR in', preR)
        preR = preR.next
        right--
    }
    console.log('preL', preL, 'preR', preR)
    let temp = preL.next
    preL.next = preR.next
    preR.next = temp
    temp = preR.next.next
    preR.next.next = preL.next.next
    preL.next.next = temp
    // let tempL = preL.next
    // preL.next = preR.next
    // preR.next = tempL
    // tempL = preR.next.next
    // preR.next.next = preL.next.next
    // preL.next.next = tempL
    // preL.next = preR.next
    // preR.next = preL.next
    // tempL.next = 
    // preL.next = preR.next
    // preR.next = temp
    // temp = preR.next.next
    // preL.next.next = preR.next.next
    // preR.next.next = temp
    return dummyHead.next
}

const res1 = reverseBetween_250424_1(head10, left10, right10)
console.log('res1 11', res1)
const res1List = listToArray(res1)
console.log('res1List', res1List)

const res13 = reverseBetween_250424_1(head13, left13, right13)
console.log('res13 11', res13)
const res13List = listToArray(res13)
console.log('res13List', res13List)
