/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let countMap ={}, listMap= {}
    //构造计数哈希表
    for (let v of nums){
        if(v in countMap) countMap[v]++
        else countMap[v]=1
    }
    for (let i=0; i<nums.length; i++){
        let temp =nums[i]
        if(countMap[temp]){
            if(!listMap[temp-1]) {
                if(countMap[temp]&&countMap[temp+1]&&countMap[temp+2]){
                    countMap[temp]--
                    countMap[temp+1]--
                    countMap[temp+2]--
                    listMap[temp+2]=listMap[temp+2]?listMap[temp+2]+1:1
                }
                else return false
            }
            else{
                listMap[temp-1]--
                listMap[temp]=listMap[temp]?listMap[temp]+1:1
                countMap[temp]--
            }
        }
    }
    return true
};
// @lc code=end

