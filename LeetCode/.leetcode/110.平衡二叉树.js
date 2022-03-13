/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function(root) {
    if(!root) return true
    function helper (root){
        if(!root) return 0
        if(helper(root.left)===false||helper(root.right)===false)   return false
        let leftDeep = helper(root.left)+1
        let rightDeep = helper(root.right)+1
        if(Math.abs(leftDeep-rightDeep) >1) return false
        return Math.max(leftDeep,rightDeep)
    }
    return helper(root) 
};

// @lc code=end

