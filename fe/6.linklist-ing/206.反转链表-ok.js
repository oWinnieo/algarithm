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

const reverseLinkList_recursion_250421_1 = (head) => {
    const dfs = (cur, pre) => {
        if (cur === null) return pre
        let temp = cur.next
        cur.next = pre
        // pre = cur
        return dfs(temp, cur) // wtest waiting why return dfs
    }
    return dfs(head, null)
    
    // var reverse = function(pre, head) {
    //     if(!head) return pre;
    //     const temp = head.next;
    //     head.next = pre;
    //     pre = head
    //     return reverse(pre, temp);
    // }
    // return reverse(null, head);
}

const reverseLinklist_250421_2 = (head) => {
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

const reverseLinklist_250421_3 = (head) => {
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

const reverseLinkList_recursion_250421_2 = (head) => {
    const dfs = (cur, pre) => {
        if (cur === null) return pre
        let temp = cur.next
        cur.next = pre
        return dfs(temp, cur)
    }
    return dfs(head, null)
}

var reverse = function(pre, head) {
    if(!head) return pre;
    const temp = head.next;
    head.next = pre;
    pre = head
    return reverse(pre, temp);
}

var reverseList = function(head) {
    return reverse(null, head);
};

const res1 = reverseLinklist_250421_3(objLinkList1_head)
console.log('reverseLinklist_250421_2 res1', res1, 'objLinkList1', objLinkList1)
const res1Arr_1 = listToArray(res1)
console.log('res1Arr_1', res1Arr_1)
const res1Arr_2 = objLinkList1.listToArrayByHead(res1)
console.log('res1Arr_2', res1Arr_2)

console.log('---')
console.log('head4', head4)
const res2 = reverseLinkList_recursion_250421_2(head4)
console.log('reverseLinkList_recursion_250421_2 22 res2', res2)
const res2Arr_1 = listToArray(res2)
console.log('res2Arr_1', res2Arr_1)
const res2Arr_2 = objLinkList1.listToArrayByHead(res2)
console.log('res2Arr_2', res2Arr_2)
