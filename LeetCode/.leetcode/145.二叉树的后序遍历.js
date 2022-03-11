/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let ans=[],stack=[root],stack1=[],cur
    if(!root) return ans
    while(stack.length){
        cur=stack.pop()
        stack1.push(cur)
        if(cur.left) stack.push(cur.left)
        if(cur.right) stack.push(cur.right)
    }
    while(stack1.length){
        ans.push(stack1.pop().val)
    }
    return ans
};
// @lc code=end

