/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let left , leftStr={'[':']','{':'}','(':')'},stack=[]
    for (let i=0;i<s.length;i++){
        if(s[i] in leftStr) {
            left=s[i]
            stack.push(s[i])
            continue
        }
        if(s[i]===leftStr[left]){
           stack.pop()
            left=stack[stack.length-1]
            continue
        }   
            return false
    }
    return stack.length===0? true :false
};
// @lc code=end

