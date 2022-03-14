/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
   if (!root) return false
   function helper (u,v){
        if(!u&&!v) return true
        if(!u||!v) return false
        if (u.val===v.val&&helper(u.left,v.right)&&helper(u.right,v.left)) return true
        return false
   }
   return helper(root,root)
};
// @lc code=end

