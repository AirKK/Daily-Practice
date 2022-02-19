# Daily-Practice
记录自己每日的学习情况

至少一道大厂面试题，一道算法题。

## Day 1

### LeetCode[1] 两数之和

``` javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
   let matchNum 
   for (let i = 0 ; i < nums.length ; i++){
       matchNum = target - nums[i];
       if (map.has(matchNum)){
           return[map.get(matchNum),i]
       }else{
           map.set(nums[i],i)
       }
   }
   return []
};
```

### 实现对象的 Map 函数类似 Array.prototype.map

``` javascript
//方法一：
Object.prototype.map =  function(fn){
    if (typeof(fn)!= 'function'){
       throw new TypeError(`${fn} is not a function`)
    }
    return Object.keys(this).reduce((pre,cur)=>{
        pre[cur] = fn(this[cur])
        return pre
    },{})
}
//方法二：
Object.prototype._map = function(fn){
    if (typeof(fn)!='function'){
        throw new TypeError(`${fn}is not a function`)
    }
    let result = {}
    for (let v in this){
        if (this.hasOwnProperty(v)){ // for in 不仅仅会迭代实例自身的属性，还会迭代原型上的属性
            result[v] = fn(this[v])
        }
    }
    return result
}
// 上面如果不用hasOwnProperty判断的话可以让加在原型上的属性不可枚举
Object.defineProperty(Object.prototype,'map',{enumerable:false});
Object.defineProperty(Object.prototype,'_map',{enumerable:false});

//用例
let obj={
    a: 2,
    b: 3,
    c: 4,
    d: 5
};
let _obj = obj._map((val) => {
    return ++val //注意这里是++val
})
console.log(_obj);//{ a: 3, b: 4, c: 5, d: 6 }
```