/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let queue =[],ans=[]
    for (let i=0 ;i<nums.length;i++){
        while(queue.length&&nums[i]>=nums[queue[queue.length-1]] ){
            queue.pop()
        }
        queue.push(i)  //存储元素的索引
        if(queue[0]<=i-k) queue.shift() //如果最大值不在窗口内则出队
        if(i>=k-1){
            ans.push(nums[queue[0]])
        }
    }
    return ans
};
// @lc code=end

