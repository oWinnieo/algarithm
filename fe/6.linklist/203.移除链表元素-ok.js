/*
203. 移除链表元素
简单
相关标签
相关企业
给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 

示例 1：


输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
示例 2：

输入：head = [], val = 1
输出：[]
示例 3：

输入：head = [7,7,7,7], val = 7
输出：[]
 

提示：

列表中的节点数目在范围 [0, 104] 内
1 <= Node.val <= 50
0 <= val <= 50
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
};

const removeEle_250419_1 = (head, val) => {
    let headList = arrayToList(head)
    while (headList !== null && headList.val === val) {
        headList = headList.next
    }
    let cur = headList
    while (cur !== null && cur.next !== null) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return listToArray(headList)
}

const removeEle_250419_2 = (head, val) => {
    let headList = arrayToList(head)
    let dummyHead = new ListNode(0)
    dummyHead.next = headList
    let cur = dummyHead
    while (cur !== null && cur.next !== null) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return listToArray(dummyHead.next)
}

const res1 = removeEle_250419_1(head1Arr, val1)
console.log('res1', res1)
const res2 = removeEle_250419_1(head2Arr, val2)
console.log('res2', res2)
const res3 = removeEle_250419_1(head3Arr, val3)
console.log('res3', res3)

const res12 = removeEle_250419_2(head1Arr, val1)
console.log('res12', res12)
const res22 = removeEle_250419_2(head2Arr, val2)
console.log('res22', res22)
const res32 = removeEle_250419_2(head3Arr, val3)
console.log('res32', res32)

