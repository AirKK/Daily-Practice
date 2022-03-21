/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left=0,right=Math.max(...piles)+1,ans
    while(true){
        if(left+1===right) return ans
        half = left+ Math.floor((right-left)/2)
        if(canFinish(half)){
            right= half
            ans = half
        }
        else{
            left= half
        }
    }
    function canFinish(ans){
        let sum=0
        for (let i=0 ; i<piles.length ; i++){
            if(piles[i]%ans) sum+=Math.ceil(piles[i]/ans)
            else sum+=piles[i]/ans
        }
        if(sum>h) return false
        else return true
    }
};
// @lc code=end

