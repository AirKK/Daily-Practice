/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let dp=[],ans=0,length=s.length
    //创建二维数组
    for (let i=0 ;i<length;i++){
        dp[i]=new Array(length).fill(false)
    }
    //注意遍历顺序因为要保证判断dp[i][j]的时候dp[i+1][j-1]必须是已知的
    for (let i=length-1 ; i>=0 ;i--){
        for (let j=i ; j<length;j++){
            if(s[i]===s[j]){
                //当首位字符相同'a'或者'aa'
                if(j-i<=1){
                    ans++
                    dp[i][j]=true
                }
                //首位字符相同，间距超过1，要判断中间区域是否是回文子串
                else {
                    if(dp[i+1][j-1]){
                        ans++
                        dp[i][j]=true
                    }
                    else dp[i][j]=false
                }
            }
            else dp[i][j]=false //首位不相同肯定不是回文子串
        }
    }
    return ans
};
// @lc code=end

