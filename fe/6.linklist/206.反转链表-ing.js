/*
206. 反转链表
简单
相关标签
相关企业
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 

示例 1：


输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：


输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
 

提示：

链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
 

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
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
var reverseList = function(head) {
    
};

console.log('objLinkList1 206', objLinkList1)
let objLinkList1_head = objLinkList1.getHead()
console.log('objLinkList1_head', objLinkList1_head)
const reverseLinkList_250421_1 = (head) => {
    // let dummyHead = new ListNode(0, head)
    // let pre = dummyHead
    // let cur = dummyHead.next
    // console.log('pre', pre)
    // console.log('cur', cur)
    // cur.next = pre
    // cur = pre.next.next
    let pre = null
    let cur = head
    while(cur !== null) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
}

const res1 = reverseLinkList_250421_1(objLinkList1_head)
console.log('res1', res1, 'objLinkList1', objLinkList1)
const res1Arr_1 = listToArray(res1)
console.log('res1Arr_1', res1Arr_1)
const res1Arr_2 = objLinkList1.listToArrayByHead(res1)
console.log('res1Arr_2', res1Arr_2)
