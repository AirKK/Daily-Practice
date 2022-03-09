/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let p1=list1 , p2=list2
    if (!p1){
        return p2
    }
    if(!p2){
        return p1
    }
    if(p1.val<p2.val){
        p1.next = mergeTwoLists(p1.next ,p2)
        return p1
    }
    else{
        p2.next = mergeTwoLists(p1 ,p2.next)
        return p2
    }
};
// @lc code=end

