var nums = [1, 4, 7, 11, 9, 8, 10, 6];
var n = 5;
var m = 27;
numSum(nums, n, m)
function numSum(nums, n, m) {
    if (nums.length < n) return[]
    nums = nums.sort((a, b) => a - b);

    let result=[],stack=[]
    const backtrace = (start)=>{
        let end=nums.length-1,sum =0
        if(stack.length===n-1){
            stack.map((x)=>sum+=x)
            console.log(sum);
            while(start<=end){
                if(sum+nums[start]===m  ){
                    result.push([...stack,nums[start]])
                }
                else if(sum+nums[end]===m){
                    result.push([...stack,nums[end]])
                }
                start++
                end--
            }
            return
        }
        for (let i=start ; i<nums.length ; i++){
            stack.push(nums[i])
            backtrace(i+1)
            stack.pop()
        }
    }
    backtrace(0)
    console.log(result);
}