/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const n = nums.length;
    let ans = [];
    function backtrace(cur) {
      if (cur === n) {
        ans.push([...nums]); //nums变量指向的实际上是NUMS的地址，nums会复原
        return;
      }
      for (let i = cur; i < n; i++) {
        swap(nums, cur, i); //把当前元素放到第cur位置上，同时将原来cur上的元素提取表示未使用
        backtrace(cur + 1);
        swap(nums, cur, i);
      }
    }
    function swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    backtrace(0);
    return ans;
};
// @lc code=end

