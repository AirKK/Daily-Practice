/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    dp=[nums[0]]
    for(let i=1; i<nums.length;i++){
        dp[i]=Math.max(nums[i],dp[i-1]+nums[i])
    }
    console.log(dp);
    return Math.max(...dp)
};
// @lc code=end

