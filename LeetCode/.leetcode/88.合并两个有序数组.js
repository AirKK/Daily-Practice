/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1, j = n - 1
    for (let k = m + n - 1; k > -1; k--) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i--]
            continue
        }
        //考虑nums2遍历完则直接输出num1即可，为什么不需要考虑i<0呢？因为i<0时要做的是把nums2中剩下的元素以此放入nums1，也就是和
        // nums1[i]<nums2[j]时候的操作一样，统一放入else中处理
        if (j < 0) {
            break
        }
        //
        else {
            nums1[k] = nums2[j--]
            continue
        }

    }
};
// @lc code=end



