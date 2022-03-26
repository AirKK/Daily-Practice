//模拟实现 Array.prototype.splice
const nums=[1,2,3,4,7,8,9]

Array.prototype.handleSplice= function (start,deleteCount,...arr){
    if (Object.prototype.toString.call(this)!='[object Array]') throw(new Error())
    const len = this.length
    // 处理负值
    if(start<0) start= Math.abs(start)>len? 0 : len-Math.abs(start)
    start=start%(len)
    let deep=len-start,queue=[],ans=[]
    while(deep--) queue.unshift(this.pop())
    while(deleteCount--) ans.push(queue.shift())
    if(arr) queue=[...arr,...queue]
    while(queue.length) this.push(queue.shift())
    return ans
}
console.log(nums.handleSplice(2,1,90,100,201));//[3]
// console.log(nums.splice(2,1,90,100,101));
console.log(nums);//[1, 2, 90, 100, 201,4, 7, 8, 9]
