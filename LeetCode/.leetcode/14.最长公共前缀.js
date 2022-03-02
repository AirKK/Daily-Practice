/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     
    let ans = strs.reduce((pre,cur)=>{
        let i = 0 ,count = 0
        while(pre[i]) {
            if(pre[i]===cur[i]){
                count ++
                i++
                continue
            }
           break
        }  
         return count===0? '' : pre.substring(0,count)
    },strs[0])
    return ans? ans :''
};
// @lc code=end

