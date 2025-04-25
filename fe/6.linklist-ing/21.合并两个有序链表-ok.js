/*
21. 合并两个有序链表
简单
相关标签
相关企业
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例 1：


输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 

提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
};

const merge2List_250423_1 = (head1, head2) => {
    let resListDummyHead = new ListNode(0, null)
    let curRes = resListDummyHead
    let cur1 = head1
    let cur2 = head2
    debugger;
    while (cur1 && cur2) {
        if (cur1.val <= cur2.val) {
            // let temp = cur1.next
            curRes.next = cur1
            cur1 = cur1.next
        } else {
            curRes.next = cur2
            cur2 = cur2.next
        }
        curRes = curRes.next
        // debugger;
    }
    while (cur1) {
        curRes.next = cur1
        cur1 = cur1.next
        curRes = curRes.next
    }
    while (cur2) {
        curRes.next = cur2
        cur2 = cur2.next
        curRes = curRes.next
    }
    return resListDummyHead.next
}
console.log('head21Arr',head21Arr, 'head22Arr', head22Arr)
debugger;
const res1 = merge2List_250423_1(head31, head32)
console.log('res1', res1)
const res1Arr = listToArray(res1)
console.log('res1Arr', res1Arr)