/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    s = Array.from(s) //将伪数组转换为数组
    let map = [] ,maxLen =0
    for (let i =0 ; i < s.length ; i++){
        if (map.includes(s[i])){
            maxLen = Math.max(maxLen,map.length)
            map = map.slice(map.indexOf(s[i])+1)
        }
        map.push(s[i])
    }
    return Math.max(maxLen,map.length)
};
// @lc code=end

