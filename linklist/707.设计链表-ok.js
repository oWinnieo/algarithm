/*
707. 设计链表
中等
相关标签
相关企业
你可以选择使用单链表或者双链表，设计并实现自己的链表。

单链表中的节点应该具备两个属性：val 和 next 。val 是当前节点的值，next 是指向下一个节点的指针/引用。

如果是双向链表，则还需要属性 prev 以指示链表中的上一个节点。假设链表中的所有节点下标从 0 开始。

实现 MyLinkedList 类：

MyLinkedList() 初始化 MyLinkedList 对象。
int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。
 

示例：

输入
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
输出
[null, null, null, null, 2, null, 3]

解释
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
myLinkedList.get(1);              // 返回 2
myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
myLinkedList.get(1);              // 返回 3
 

提示：

0 <= index, val <= 1000
请不要使用内置的 LinkedList 库。
调用 get、addAtHead、addAtTail、addAtIndex 和 deleteAtIndex 的次数不超过 2000 。
*/

var MyLinkedList = function() {
    
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index > this.size) return -1
    let dummyHead = new ListNode(0, this.head)
    let cur = dummyHead.next
    while (index) {
        cur = cur.next
        index--
    }
    return cur.value
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    // let dummyHead = new ListNode(0, this.head)
    let cur = new ListNode(val, this.head.next)
    this.head.next = cur
    return this.head
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let cur = this.head
    while (cur.next !== null) {
        cur = cur.next
    }
    let newNode = new ListNode(val)
    cur.next = newNode
    return this.head
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let dummyHead = new ListNode(0, this.head)
    let cur = this.head
    while (index--) {
        cur = cur.next
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// var obj = new ListNode()
// console.log('head1Arr', head1Arr)
// let head1List = arrayToList(head1Arr)
// console.log('head1List', head1List)
let objLinkList1 = new LinkList()

objLinkList1.addAtHead(1)
objLinkList1.addAtHead(2)
objLinkList1.addAtHead(6)
objLinkList1.addAtHead(3)
objLinkList1.addAtHead(4)
objLinkList1.addAtHead(5)
objLinkList1.addAtHead(6)
objLinkList1.addAtTail(9)
objLinkList1.addAtTail(10)
objLinkList1.addAtIndex(5, 5)
console.log('objLinkList1', objLinkList1)
// let objArr = listToArray(objLinkList1)
// console.log('objArr', objArr)
const resGet = objLinkList1.get(6)
console.log('resGet', resGet)
const resListToArray1 = objLinkList1.listToArrayBySize()
console.log('resListToArray1', resListToArray1)
objLinkList1.deleteAtIndex(9)
const resListToArray2 = objLinkList1.listToArrayBySize()
console.log('resListToArray2', resListToArray2)
// var param_1 = objLinkList1.get(1)
// objLinkList1.addAtHead(val)
// objLinkList1.addAtTail(val)
// objLinkList1.addAtIndex(index,val)
// objLinkList1.deleteAtIndex(index)

