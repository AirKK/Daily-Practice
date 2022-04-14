// 找到有序数组 [1, 2, 3, 4, 7, 7, 7, 9, 12, 23, 34, 45, 55, 67]中第一次出现的位置，比如7第一次出现的位置是7
const nums=[1, 2, 3, 4, 5,5,6,7, 7, 7, 8,8,9]

//使用api
console.log(nums.indexOf(7));//7

// 手动实现（二分查找）
const findIndex=(nums,target)=>{
    let half = Math.floor(nums.length/2),left=0;right=nums.length
    while(true){
        if(left+1===right){
            if(nums[half]===target) return half
            return false //表示数组不存在该目标值
        }
        if(nums[half]<target){
            left = half
            half=left+Math.floor((right-left)/2) 
        } 
        else if(nums[half]>target) {
            right = half
            half=left+Math.floor((right-left)/2) 
        }
        else{
            while(nums[half]===target){
                half--
            }
            return half+1
        }
    }
}
console.log(findIndex(nums,7));//7


