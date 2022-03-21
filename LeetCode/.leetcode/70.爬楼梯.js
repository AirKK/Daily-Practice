/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //因为f(1)=1,f(2)=2
  let dp=[0,1,2]
  // n>=3 的时候进入循环
  for(let i=3;i<=n;i++ ){
      dp[i]=dp[i-1]+dp[i-2]
  }
  return dp[n]
};
// @lc code=end

