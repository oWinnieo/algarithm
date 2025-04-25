/*
876. 链表的中间结点
简单
相关标签
相关企业
给你单链表的头结点 head ，请你找出并返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

 

示例 1：


输入：head = [1,2,3,4,5]
输出：[3,4,5]
解释：链表只有一个中间结点，值为 3 。
示例 2：


输入：head = [1,2,3,4,5,6]
输出：[4,5,6]
解释：该链表有两个中间结点，值分别为 3 和 4 ，返回第二个结点。
 

提示：

链表的结点数范围是 [1, 100]
1 <= Node.val <= 100
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
var middleNode = function(head) {
    
};

const middleNode_250425_1 = (head) => {
    let slow = head
    let fast = head
    while (fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let middleNodeArr = []
    if (fast.next) {
        middleNodeArr.push(slow)
        middleNodeArr.push(slow.next)
    } else {
        middleNodeArr.push(slow)
    }
    return middleNodeArr
}

const res1 = middleNode_250425_1(head81)
console.log('res1', res1)

const res2 = middleNode_250425_1(head82)
console.log('res2', res2)