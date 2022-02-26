# Daily-Practice

记录自己每日的学习内容

## Day 1

### LeetCode[1] 两数之和

```javascript
var twoSum = function (nums, target) {
  const map = new Map();
  let matchNum;
  for (let i = 0; i < nums.length; i++) {
    matchNum = target - nums[i];
    if (map.has(matchNum)) {
      return [map.get(matchNum), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
```

### 实现对象的 Map 函数类似 Array.prototype.map

```javascript
//方法一：
Object.prototype.map = function (fn) {
  if (typeof fn != "function") {
    throw new TypeError(`${fn} is not a function`);
  }
  return Object.keys(this).reduce((pre, cur) => {
    pre[cur] = fn(this[cur]);
    return pre;
  }, {});
};
//方法二：
Object.prototype._map = function (fn) {
  if (typeof fn != "function") {
    throw new TypeError(`${fn}is not a function`);
  }
  let result = {};
  for (let v in this) {
    if (this.hasOwnProperty(v)) {
      // for in 不仅仅会迭代实例自身的属性，还会迭代原型上的属性
      result[v] = fn(this[v]);
    }
  }
  return result;
};
// 上面如果不用hasOwnProperty判断的话可以让加在原型上的属性不可枚举
Object.defineProperty(Object.prototype, "map", { enumerable: false });
Object.defineProperty(Object.prototype, "_map", { enumerable: false });

//用例
let obj = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};
let _obj = obj._map((val) => {
  return ++val; //注意这里是++val
});
console.log(_obj); //{ a: 3, b: 4, c: 5, d: 6 }
```

## Day 2

### LeetCode[2] 两数相加

```javascript
var addTwoNumbers = function (l1, l2) {
  let p1 = l1,
    p2 = l2,
    dummyHead = new ListNode(),
    carry = 0,
    count;
  p3 = dummyHead; //p3指向头结点

  while (p1 || p2 || carry) {
    count = 0;
    if (p1) {
      count += p1.val;
      p1 = p1.next;
    }
    if (p2) {
      count += p2.val;
      p2 = p2.next;
    }
    if (carry) {
      count += carry;
    }
    carry = Math.floor(count / 10);
    p3 = p3.next = new ListNode(count % 10);
  }
  return dummyHead.next;
};
```

### LeetCode[3] 无重复字符的最长子串

```javascript
var lengthOfLongestSubstring = function (s) {
  s = Array.from(s); //将伪数组转换为数组
  let map = [],
    maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.includes(s[i])) {
      maxLen = Math.max(maxLen, map.length);
      map = map.slice(map.indexOf(s[i]) + 1);
    }
    map.push(s[i]);
  }
  return Math.max(maxLen, map.length);
};
```

### 用最精炼的代码实现数组非零非负最小值 index

```javascript
// 例如：[10,21,0,-7,35,7,9,23,18] 输出 5, 因为 7 最小
function getIndex(arr) {
  let min = Infinity,
    pos;
  arr.map((val, index) => {
    if (val > 0 && val < min) {
      min = val;
      pos = index;
    }
  });
  return pos;
}
```

## Day 3

### LeetCode[15] 三数之和

```javascript
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [],
    j,
    k;
  for (let i = 0; i < nums.length; i++) {
    j = i + 1;
    k = nums.length - 1;
    if (nums[i] > 0) return result;
    if (nums[i] === nums[i - 1]) continue;
    while (j < k) {
      if (-nums[i] > nums[j] + nums[k]) {
        j++;
        continue;
      }
      if (-nums[i] < nums[j] + nums[k]) {
        k--;
        continue;
      }
      while (nums[j] === nums[j + 1]) j++;
      while (nums[k] === nums[k - 1]) k--;
      result.push([nums[i], nums[j++], nums[k--]]);
    }
  }
  return result;
};
```

### LeetCode[88] 合并两个有序数组

```javascript
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1;
  for (let k = m + n - 1; k > -1; k--) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i--];
      continue;
    }
    //考虑nums2遍历完则直接输出num1即可，为什么不需要考虑i<0呢？因为i<0时要做的是把nums2中剩下的元素以此放入nums1，也就是和
    // nums1[i]<nums2[j]时候的操作一样，统一放入else中处理
    if (j < 0) {
      break;
    }
    //
    else {
      nums1[k] = nums2[j--];
      continue;
    }
  }
};
```

### 输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法

```javascript
const list = [1, 2, 3];
const square = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
};

function test() {
  list.forEach(async (x) => {
    const res = await square(x);
    console.log(res);
  });
}
test();
//forEach是不能阻塞的，默认是请求并行发起，所以是同时输出1、4、9。
//方法一：采用递归调用
let index = 0;
async function test(index) {
  console.log(await square(list[index]));
  if (index < list.length) {
    test(index + 1);
  }
}
// 方法二：采用普调for循环或者for of循环即可
async function test() {
  for (let i = 0; i < list.length; i++) {
    let x = list[i];
    const res = await square(x);
    console.log(res);
  }
}
```

## Day 4

### 字节 n 数之和

```javascript
function numSum(nums, n, m) {
  if (nums.length < n) return [];
  nums = nums.sort((a, b) => a - b);

  let result = [],
    stack = [];
  const backtrace = (start) => {
    let end = nums.length - 1,
      sum = 0;
    if (stack.length === n - 1) {
      stack.map((x) => (sum += x));
      console.log(sum);
      while (start <= end) {
        if (sum + nums[start] === m) {
          result.push([...stack, nums[start]]);
        } else if (sum + nums[end] === m) {
          result.push([...stack, nums[end]]);
        }
        start++;
        end--;
      }
      return;
    }
    for (let i = start; i < nums.length; i++) {
      stack.push(nums[i]);
      backtrace(i + 1);
      stack.pop();
    }
  };
  backtrace(0);
  console.log(result);
}
```

### 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject

```javascript
Promise.retry = function (promiseFn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        var ret = await promiseFn();
        resolve(ret);
        break;
      } catch (error) {
        if (!times) reject(error);
      }
    }
  });
};
function getProm() {
  const n = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => (n > 0.9 ? resolve(n) : reject(n)), 1000);
  });
}
Promise.retry(getProm);
```

## Day 5

### 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

```javascript
//扁平化
const flat = (arr) => arr.flat(Infinity);
//手写扁平化
const handwritingFlat = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? handwritingFlat(cur) : cur);
  }, []);
};
//去重
const removeRepeat = (arr) => Array.from(new Set(arr));
//排序
const sort = (arr) => arr.sort((a, b) => a - b);
//整合函数
const compose =
  (...fns) =>
  (val) => {
    return fns.reduce((pre, cur) => {
      return cur(pre);
    }, val);
  };
arr = compose(handwritingFlat, removeRepeat, sort)(arr);
```

### JS 数据类型判断总结

**typeof**

> 主要用于判断数据是不是基本数据类型,可以测试出 number、string、boolean、Symbol、undefined 及 function，而对于 null 及数组、对象，typeof 均检测出为 object

**instanceof**

> instanceof 操作符用来比较两个操作对象的构造函数，就是检查某个对象的原型链是否包含某个构造函数的 prototype 属性也就是说 instanceof 在判断一个对象是不是一个类的实例这样的自定义的对象时才有意义，但是比较属于不同的 javascript 上下文的对象时将会出错，因为它们的构造函数不是同一个对象

```javascript
3 instanceof Number; // false
true instanceof Boolean; // false
"abc" instanceof String; // false
new String("foo") instanceof String; // true
new Array(123) instanceof Array; // true
```

**constructor**

> constructor 这个属性存在于构造函数的原型上，指向构造函数，对象可以通过**proto**在其所属类的原型上找到这个属性.undefined 和 null 没有 contructor 属性
> 这个方法并不安全，思考以下代码

```javascript
Function Fn() {}
Fn.prototype = {}
var fn = new Fn();
console.log(fn.constructor === Fn);//false
console.log(fn.constructor === Object);//true

// fn自身并没有constructor属性，所以它会委托prototype链上的Fn.prototype,但是这个对象身上也没有constructor，因此会继续委托给顶端的Object.prototype,它的constructor指向内置的Object函数。
```

**Object.prototype.toString.call()**

> Object.prototype.toString 方法能有效弥补 typeof 不能很好区分数组、对象和函数的短板。

**基本包装类型**

> 字面创建基本数据类型的值时，并不会调用 JS 的内置构造函数，因此字面量创建的值就是基本数据类型，而不是实例(对象数据类型)。-->所以用 instanceof 检测基本数据类型时都会返回 false,但是一个基本数据类型并不是对象，是不应该有属性的,这是因为 JS 中有三种基本包装类型，Nmber，String，Boolean 例如一个字符串，当作对象去调用其原型上的方法时，JS 会临时创建一个与其对应的基本包装类型的值，这个值是 String 的实例，调用方法，其实是这个实例在调用字符串的方法。

```javascript
var a = 1;
var b = new Number(1);
typeof a; //'number'
typeof b; //'object'
var str = "chang";
str.constructor === String; //true，代码执行到这行时，会临时创建与str等价的对象
```

## Day 6

### LeetCode[349] 两个数组的交集

```javascript
var intersection = function (nums1, nums2) {
  let k = 0,
    result = [];
  function fn(nums1, nums2) {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i])) {
        result.push(nums2[i]);
      }
    }
    return result;
  }
  //判断哪个是小的集合
  if (nums1.length >= nums2.length) {
    return Array.from(new Set(fn(nums1, nums2)));
  } else {
    return Array.from(new Set(fn(nums2, nums1)));
  }
};
```

### 如何模拟实现 Array.prototype.splice

```javascript
Array.prototype.sp = function (start, deleteCount, ...items) {
  let num = [],
    i = 0,
    j = 0;
  if (typeof start === "undefined") return;
  //如果start大于数组长度
  if (start > this.length) {
    this.push(...items);
    return;
  }
  if (start < 0) {
    start = this.length + start - 1 < 0 ? 0 : this.length + start - 1;
  }
  //不需要删除的元素出栈
  while (i < start) {
    num.push(this[0]);
    this.shift();
    i++;
  }
  //若未定义deleteCount则默认删除start后所有元素
  if (typeof deleteCount === "undefined") {
    deleteCount = this.length;
  }
  //根据需要删除的个数移除元素
  while (j < deleteCount) {
    this.shift();
    j++;
  }
  //将需要插入的元素放入nums整体再压入this中
  if (items) {
    num = num.concat(items);
  }
  this.unshift(...num);
};
let arr1 = [1, 3, 5, 7, 9];
// arr1.splice(1, 2, 0 , 0)//[ 1, 0, 0, 7, 9 ]
arr1.sp(1, 2, 0, 0);
console.log(arr1); //[ 1, 0, 0, 7, 9 ]
```

## 前端性能优化

### css

- 使用精灵图通过background访问图片的内容
- 合并多个CSS文件减少http请求
- 避免使用CSS表达式，例如：calc()
- 避免选择器嵌套过深，减少选择器的使用
- 抽取公共样式减少代码量
- 将CSS放在文件头部（css会阻塞渲染和js执行，先加载html的话会出现没有样式的页面体验差），js放在底部，因为js执行会堵塞html解析组织cssom构建（或者加上defer属性）

### js

- 防抖（一段时间重复的操作只执行一次）和节流（一段时间重复的操作按照设定执行几次）
- 长列表滚动到可视区域时动态加载
- 图片懒加载
- DOM操作优化：

   > 1.批量的添加DOM元素的时候可以先用createElemnet创建并添加节点后统一加入DOM树
   >
   > 2.避免通过操作dom添加style样式，减少重排（因为元素宽高发生变化浏览器需要重新计算构造渲染树）
   >    
   > 3.处理批量点击事件的时候可以给父节点绑定事件通过事件冒泡实现

### 网络

- 采用gzip压缩（通过webpack CompressionPlugin）
- 减少HTTP请求，使用HTTP2（其优势）
  > 1.解析速度快 
  > 
  > 2.多路复用
  > 
  > 3.http2提供首部压缩
- 静态资源使用CDN

## Day 7

### Object 和 Map 的比较
||Map|Object|
|--|:--|--|
|意外的key|不存在|原型链上的键名可能会冲突，可以通过Object.create(null)创建一个没有原型的对象|
|key的类型|可以是任意值|只能是String和Symbol|
|key的顺序|有序的根据set的顺序返回键值（通过map.keys().value()获取）|无序的|
|size|Map的键值对个数|只能通过Object.keys().length获取|
|性能|在频繁增删的场景表现更好|未做优化|
</br>
>### LeetCode[146] LRU (最近最少使用) 缓存

方法一：采用Map实现（利用了map是有序的特性）
``` javascript
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.useStack = new Map
};

LRUCache.prototype.get = function (key) {
    if (key in this) {
        this.useStack.delete(key)
        this.useStack.set(key)  //使用后将元素放入队列末尾，map是由顺序的，按插入顺序
        return this[key]
    }
    else {
        return -1
    }
};

LRUCache.prototype.put = function (key, value) {
    if (key in this) {
        this[key] = value //存在则更新值
        this.useStack.delete(key)
        this.useStack.set(key)  //使用后将元素放入队列末尾
        return null
    }
    else {
        console.log(this.useStack.size);
        if (this.useStack.size < this.capacity) {
            this[key] = value
            this.useStack.set(key)
            return null
        }
        else {
            delete this[this.useStack.keys().next().value] //删除最久未使用过的元素(map开头的元素)
            this[key] = value //重新赋值
            this.useStack.delete(this.useStack.keys().next().value)
            this.useStack.set(key)  //使用后将元素放入队列尾部
            return null
        }
    }

};
```
方法二：采用双向链表实现
``` javascript
//声明双向链表结构
class listNode{
    constructor(key,value){
        this.key = key
        this.value = value
        this.next = null
        this.pre = null
    }
}
var LRUCache = function(capacity) {
    this.map = new Map() //用来存放节点的信息方便删除节点
    this.capacity = capacity
    this.dummyHead = new listNode()
    this.dummyTail = new listNode()
    this.dummyHead.next = this.dummyTail //创建头结点
    this.dummyTail.pre = this.dummyHead  //创建尾结点
};
// 移除节点
var removeListNode = function (node){
    node.pre.next = node.next
    node.next.pre = node.pre
}
//将节点加到链表首部
var removeToHead = function (node,head){
    node.next = head.next
    node.pre = head
    head.next.pre = node
    head.next = node
}
//移除链表尾部节点
var removeToTail = function (tail){
    tail.pre = tail.pre.pre
    tail.pre.next =tail
}


LRUCache.prototype.get = function(key) {
    if (this.map.has(key)){
        let temp = this.map.get(key)//暂存节点
        removeListNode(temp) //移除节点
        removeToHead(temp,this.dummyHead)//移动节点至首部
        return temp.value 
    }
    return -1
};

LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)){
        let temp = this.map.get(key)//暂存节点
        temp.value = value //重新赋值
        removeListNode(temp) //移除节点
        removeToHead(temp,this.dummyHead)//移动节点至首部
        return null
    }
    console.log(this.map.size);
    if(this.map.size>=this.capacity){
        this.map.delete(this.dummyTail.pre.key)
        removeToTail(this.dummyTail)//移除链表尾部节点 
    }
    let temp = new listNode(key,value)
    removeToHead(temp,this.dummyHead)//移动节点至首部  
    this.map.set(key,temp) //存储节点信息
    return null
};
```

## Day 8
>###  LeetCode[141] 环形链表

解法一：利用Map的key可以使任意值得特性存储节点
``` javascript
var hasCycle = function(head) {
    let map = new Map() , p = head
    while(p){
        if (map.has(p)){
            return true
        }
        map.set(p)
        p=p.next
    }
    return false
};
```
 解法二：快慢指针 : 空间复杂度为O(1)
``` javascript
var hasCycle = function(head) {
    let  slow = head , fast = head
    while(fast&&fast.next){
        if (!fast.next.next) return false
        slow = slow.next
        fast = fast.next.next
        if (fast===slow) return true
    }
    return false
};
```
解法三：脏位，每遍历到一个节点设置一个tag标识已经遍历过
>### LeetCode[21]合并两个有序链表
 方法一
``` javascript
var mergeTwoLists = function(list1, list2) {
    let p1 = list1 , p2 = list2 ,dummyHead = new ListNode() ,p3 = dummyHead
    while (p1 || p2){
        p3.next = new ListNode()
        if (p1?.val <= p2?.val ||!p2){
            p3.next.val = p1.val
            p1 = p1.next
        }
        else{
            p3.next.val = p2.val
            p2 = p2.next
        }
        p3 = p3.next
        
        
    }
    return dummyHead.next
};
```
 方法二：递归的思想
``` javascript
var mergeTwoLists = function(list1, list2) {
    let p1=list1 , p2=list2
    if (!p1){
        return p2
    }
    if(!p2){
        return p1
    }
    if(p1.val<p2.val){
        p1.next = mergeTwoLists(p1.next ,p2)
        return p1
    }
    else{
        p2.next = mergeTwoLists(p1 ,p2.next)
        return p2
    }
};
```

>### 多个数组的交集

``` javascript 
// 阿里算法题：编写一个函数计算多个数组的交集
var intersection = function (...arrs){
    arrs = arrs.reduce((pre,cur)=>{
        let result =[]
      for (let val of cur){
          if (pre.includes(val)){
            result.push(val)
          }
      } 
      return Array.from(new Set(result))  
    },)
    return arrs
}

intersection([1,2,3],[2,4,6,3],[2,2,3,5])
```