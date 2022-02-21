/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let result=[] , j , k
    for (let i=0 ; i<nums.length ; i++){
        j = i+1
        k = nums.length-1
        if (nums[i]>0) return result
        if (nums[i]===nums[i-1]) continue
        while(j<k){
            if(-nums[i] > nums[j]+nums[k]){
                j++
                continue
            }
            if(-nums[i] < nums[j]+nums[k]){
                k--
                continue
            }
            while(nums[j]===nums[j+1]) j++
            while(nums[k]===nums[k-1]) k--
            result.push([nums[i],nums[j++],nums[k--]])
        }
    }
    return result
};
// @lc code=end

