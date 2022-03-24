/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let ans = [0,1,-Infinity]
    for (let i=1 ; i<s.length ;i++){
        let left = i-1,right=i+1
            if (s[i]===s[left]||s[i]===s[right]){              
                    while(s[left]===s[i]&&left>=0) left--
                    while(s[right]===s[i]&&right<s.length) right++
            }
            while(s[left]===s[right]&&(left>=0||right<s.length)){
                right++
                left--
            }
            //注意这里循环出来后，实际上符合调剂的 left应该++，right应该--
        if(right-left>ans[2]) ans=[left+1,right,right-left]
    }
    return s.slice(ans[0],ans[1])
};
// @lc code=end

