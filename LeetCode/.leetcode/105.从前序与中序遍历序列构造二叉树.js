/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let posMap = new Map()
    for (let i=0;i<inorder.length;i++){
        posMap.set(inorder[i],i)
    }
    function helper(preLeft,preEnd,inLeft,inRight){
        if(preLeft>preEnd || inLeft>inRight) return null
        let root = new TreeNode(preorder[preLeft])
        let num = posMap.get(preorder[preLeft])-inLeft //计算左子树的节点个数
        root.left = helper(preLeft+1,preLeft+num,inLeft,num+inLeft-1)
        root.right = helper(preLeft+num+1,preEnd,num+inLeft+1,inRight)
        return root
    }
    return helper(0,preorder.length-1,0,inorder.length)
};
// @lc code=end

