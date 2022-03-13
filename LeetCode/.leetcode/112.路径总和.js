/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    function helper (root,sum){
        if (!root) return false
         if(!root.left&&!root.right){
             return sum+root.val === targetSum ? true :false
         }
        return helper(root.left,sum+root.val) || helper(root.right,sum+root.val)
    }
    return helper(root,0)
};
// @lc code=end

