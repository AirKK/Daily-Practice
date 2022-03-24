/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = new Array(grid.length).fill(0).map(()=>[])
    dp[0][0]=grid[0][0]
    for (let i=0 ; i<grid.length; i++){
        for (let j=0 ; j<grid[0].length ;j++){
            if(i===0&&j!=0) dp[i][j]=dp[0][j-1]+grid[0][j]
            else if(j===0&&i!=0) dp[i][0]=dp[i-1][0]+grid[i][0]
            else if(i!=0&&j!=0) {
                dp[i][j]=Math.min(dp[i][j-1],dp[i-1][j]) +grid[i][j]
            }  
        }
    }
    return dp[grid.length-1][grid[0].length-1]
};

// @lc code=end

