> for in

for in 可以枚举对象，但是缺点在于数组的原型对象以及自身实例的属性都会被枚举出来，通过 **hasOwnProperty**可以避免枚举原型对象上的属性，但是自身的属性是无法摆脱的。所以**for in**更适合纯对象的遍历，遇到数组的时候需要下标我们选择使用**for each**，如果不需要下标优先使用**for of**，因为**for each**是不可中断的，无法通过return或者break等中断循环，**for of**可以。

>for of

for...of 允许你遍历 Array, String, Map, Set,TypedArray、arguments、NodeList对象、Generator等可迭代的数据结构。（自身含有一个Symbol.iterator方法）