/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count =1
    fn = function (head, n){
        while(head.next){
            head.next = fn(head.next,n)
            if(++count===n){
                return head.next
            }
            return head
        }
        return n===1? null: head
    } 
    return fn(head, n)  
};
// @lc code=end

