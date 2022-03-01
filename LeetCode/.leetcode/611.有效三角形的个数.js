/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    let stack =[],count=0
    nums.sort((a,b)=> a-b)
    fn = function(start){
        if(stack.length===2 ){
            let temp = stack[0]+stack[1]
             while(start<nums.length){
                if(temp>nums[start]){
                count++
                }
                start++
            }
            return
        }
        for (let i =start ;i<nums.length ;i++){
            stack.push(nums[i])
            fn(i+1)
            stack.pop()
        }       
    }
    fn(0)
    return count
};
// @lc code=end

