/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let map = new Map
    for (let i=0 ;i<inorder.length; i++){
        map.set(inorder[i],i)
    }
    function helper(posLeft,posRight,inLeft,inRight){
        if(posLeft>posRight || inLeft>inRight) return null
        let root = new TreeNode(postorder[posRight])
        let index = map.get(postorder[posRight]) // 获取当前节点在中序序列的位置
        let num = inRight-index  // 记录右子树节点个数
        root.right = helper(posRight-num,posRight-1,index+1,inRight)
        root.left = helper(posLeft,posRight-num-1,inLeft,index-1)
        return root
    }
    return helper(0,postorder.length-1,0,inorder.length-1)
};
// @lc code=end

