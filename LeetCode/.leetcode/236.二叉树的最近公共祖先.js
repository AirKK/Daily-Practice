/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root===p || root===q) return root
    let leftChild = lowestCommonAncestor(root.left,p,q)
    let rightChild = lowestCommonAncestor(root.right,p,q)
    if (!leftChild) return rightChild
    if(!rightChild) return leftChild
    return root
};
// @lc code=end

