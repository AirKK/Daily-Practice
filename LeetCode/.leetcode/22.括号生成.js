/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [],arr = [];
  function backtrace(left, right) {
    //当左右括号都消耗光，输出序列
    if (!left && !right) {
      ans.push(arr.join(""));
      return;
    }
    // 如果左右括号剩余个数相同，则该位置必须是左括号。
    if (left === right) {
      arr.push("(");
      backtrace(left - 1, right);
      arr.pop(); //复原
      return;
    }
    //如果左括号比右括号少，那么该位置左右括号都能放
    else if (left < right) {
      if (left != 0) {
        arr.push("(");
        backtrace(left - 1, right);
        arr.pop();
      }
      arr.push(")");
      backtrace(left, right - 1);
      arr.pop();
    }
  }
  backtrace(n, n);
  return ans;
};
// @lc code=end

