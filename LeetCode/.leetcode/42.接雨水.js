/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
   let leftMax=0 , rightMax=0, k=0 , j=height.length-1,count=0
   while(k<j){
       leftMax = Math.max(leftMax,height[k])
       rightMax = Math.max(rightMax,height[j])
       if(height[k]<height[j]){
        count +=Math.min(leftMax,rightMax)-height[k]
        k++
       }
       else{
        count +=Math.min(leftMax,rightMax)-height[j]
        j--
       }
   }
   return count
};
// @lc code=end

