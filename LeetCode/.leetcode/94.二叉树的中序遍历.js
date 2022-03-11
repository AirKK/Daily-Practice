/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
    let ans=[],stack=[],cur=root,node
    if(!root) return ans
    while(stack.length||cur){
        while(cur){
            stack.push(cur)
            cur=cur.left
        }
        node = stack.pop()
        ans.push(node.val) 
        if(node.right){
            cur=node.right
        }
    }
    return ans
};
// @lc code=end

