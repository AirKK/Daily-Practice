/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let flag = false  ,ans=[],temp=[]//标志遇到空格前有无字符串
    for (let i=0 ; i<s.length ; i++){
        if(s[i]===' '){
            if(s[i+1]===' ' ||!s[i+1]){
                continue
            } 
            if(flag){
                //flag为true 说明前面有单词没有压入栈
                flag =false
                console.log(temp);
                ans.unshift(' ',...temp) //空格隔开每个单词
                temp=[]
            }
        }
        else{
            flag = true
            temp.push(s[i])  
        }
    }
    ans.unshift(...temp) // 最后一个单词不需要加空格隔开
    return ans.join('')
};
             
// @lc code=end

