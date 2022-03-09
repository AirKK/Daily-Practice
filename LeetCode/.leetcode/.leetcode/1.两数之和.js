/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map ={};
    let temp;
    for (let i=0 ; i<nums.length ; i++){
        temp = target - nums[i];
        if (map.hasOwnProperty(temp)){
            return [map[temp],i];
        }
        map[nums[i]]=i;
    }
    return false;
};
// @lc code=end

