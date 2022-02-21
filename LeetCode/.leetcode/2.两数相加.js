/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let p1 =l1 , p2 = l2 , dummyHead = new ListNode() , carry = 0 , count 
    p3 = dummyHead 
    while(p1 || p2 || carry){
        count = 0 
        if(p1){
            count += p1.val
            p1 = p1.next
        }
        if(p2){
            count += p2.val
            p2 = p2.next
        }
        if(carry){
            count += carry
        }
        carry =Math.floor(count/10)
        p3 = p3.next = new ListNode(count%10)
    }
    return dummyHead.next
};
// @lc code=end


