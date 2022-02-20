# Daily-Practice
记录自己每日的学习内容

## Day 1

### LeetCode[1] 两数之和

``` javascript
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


## Day 2

### LeetCode[2] 两数相加
``` javascript
var addTwoNumbers = function(l1, l2) {
    let p1 =l1 , p2 = l2 , dummyHead = new ListNode() , carry = 0 , count 
    p3 = dummyHead //p3指向头结点

    while(p1 || p2 || carry){
        count = 0 
        if(p1){
            count += p1.val
            p1 = p1.next
        }
        if(p2){
            count += p2.val
            p2 = p2.next
        }
        if(carry){
            count += carry
        }
        carry =Math.floor(count/10)
        p3 = p3.next = new ListNode(count%10)
    }
    return dummyHead.next
};
```
### LeetCode[3] 无重复字符的最长子串
``` javascript
var lengthOfLongestSubstring = function(s) {
    s = Array.from(s) //将伪数组转换为数组
    let map = [] ,maxLen =0
    for (let i =0 ; i < s.length ; i++){
        if (map.includes(s[i])){
            maxLen = Math.max(maxLen,map.length)
            map = map.slice(map.indexOf(s[i])+1)
        }
        map.push(s[i])
    }
    return Math.max(maxLen,map.length)
};
```

### 用最精炼的代码实现数组非零非负最小值 index
``` javascript
// 例如：[10,21,0,-7,35,7,9,23,18] 输出 5, 因为 7 最小
function getIndex(arr){
    let min = Infinity ,pos
    arr.map((val,index)=>{
        if(val > 0 && val < min){
            min = val ;
            pos = index;
        }
    })
    return pos;
}
```