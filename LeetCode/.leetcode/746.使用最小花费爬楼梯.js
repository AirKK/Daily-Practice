/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp=[0,0,Math.min(cost[0],cost[1])]
    let height =cost.length
    for(let i=3;i<=height ;i++){
        dp[i]=Math.min(dp[i-2]+cost[i-2],dp[i-1]+cost[i-1])
    }
    return dp[height]
};
// @lc code=end

