/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry =0 ,i=num1.length-1 , j=num2.length-1,ans=[]
    while(carry||i>-1||j>-1){
        let temp =0
        if(i>-1){
            temp =  Number(num1[i])
            i--
        }
        if(j>-1){
            temp +=  Number(num2[j])
            j--
        }
        if(carry){
            temp += carry
        }
        carry = Math.floor(temp/10) 
        ans.unshift(temp%10)
    }
    return ans.join('')
};
// @lc code=end

