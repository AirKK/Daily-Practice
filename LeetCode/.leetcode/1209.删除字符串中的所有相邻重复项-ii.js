/*
 * @lc app=leetcode.cn id=1209 lang=javascript
 *
 * [1209] 删除字符串中的所有相邻重复项 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack =[],count=[],j = 0
    for (let i=0 ;i<s.length ; i++){
        if(stack[stack.length-1]===s[i]){
            if(count[count.length-1] ===k-1){    
                stack.splice(stack.length-k+1)
                count.splice(count.length-k+1)
                j=count[count.length-1]  //当k个相邻相同元素移除栈后，j值等于count栈顶值（标记stack栈顶元素出现的次数）
            }
            else{
               stack.push(s[i])
               count.push(++j)
            } 
        }
        else{
            stack.push(s[i])
            count.push(1)
            j=1
        }
    }
    return stack.join('')
};
// @lc code=end

