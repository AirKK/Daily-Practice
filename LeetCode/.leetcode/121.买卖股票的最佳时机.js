/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=Infinity,max=-Infinity
    for(let i=1 ; i<prices.length;i++){
        min = Math.min(min,prices[i-1])
        max=Math.max(prices[i]-min,max)
    }
    return max>0 ? max:0
};
// @lc code=end

