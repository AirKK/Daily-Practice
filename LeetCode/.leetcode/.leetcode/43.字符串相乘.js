/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(Number(num1)===0||Number(num2)===0) return '0'
    let ans=[0] ,i=0  
    for (let j=num2.length-1 ; j>-1 ; j-- ){
        let k =num1.length-1 ,v = i+1 ,carry=0
        while(k>-1){
            let temp = num2[j]*num1[k] 
            temp += carry+ Number(ans[ans.length-v]?ans[ans.length-v]:'0') //本轮计算结果加上进位加上之前ans该分位上的数值
            if (ans.length-v>-1)    ans[ans.length-v]= temp%10   //如果之前相加的结果ans 在该分位上有值则替换
            else   ans.unshift(temp%10)                          //否则将值压入
            carry = Math.floor(temp/10)
            v++                                                  //分位+1 
            k--
        }
        if(j-1<0&&!carry)  break  //如果是最后一次循环且没有进位退出循环
        ans.unshift(carry)
        i++
    }
    return ans.join('')
};
// @lc code=end

