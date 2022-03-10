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
    nums.sort((a,b)=> a-b)
    let ans=[]
    for (let i=0 ; i<nums.length ;i++){
        if(nums[i]>0) return ans
        if(nums[i]===nums[i-1]) continue //防止重复
        let k=i+1 , j=nums.length-1
        while(j>k){
            let temp = nums[i]+nums[j]+nums[k]
            if (temp===0){
                while(nums[j]===nums[j-1]) j--
                while(nums[k]===nums[k+1]) k++
                ans.push([nums[i],nums[k++],nums[j--]])
            }
            else if (temp>0)j--
            else k++
        }
    }
    return ans
};
// @lc code=end

