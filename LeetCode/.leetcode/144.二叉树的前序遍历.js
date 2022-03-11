/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    let ans=[],stack=[],p
    if(!root) return ans
    stack.push(root)
    while(stack.length){
        p=stack.pop()
        ans.push(p.val)
        if(p.right) stack.push(p.right)
        if(p.left) stack.push(p.left)
    }
    return ans
};
// @lc code=end

