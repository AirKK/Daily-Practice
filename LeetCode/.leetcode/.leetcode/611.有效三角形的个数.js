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
   nums.sort((a,b)=>a-b)
    let i = 0 ,count = 0
    for (let j = nums.length-1 ; j>1; j--){
        let k = j-1,i = 0
        while(k>i){
            if(nums[i]+nums[k]>nums[j]){
                count +=k-i //因为nums是升序的，较小的nums[i]符合则大于它的数一定符合
                k--
                i=0
                continue
            }
            i++
        }
    }
    return count
};
// @lc code=end

