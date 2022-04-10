```javascript
function Foo(){
    ```
}
const a = new Foo()
console.log(a instanceof Foo);//true
```
从上述代码我们可以通过instanceof操作符来检查 a是否是Foo的一个实例，准确来说instanceof回答的是：**在a的整一条prototype链中有没有Foo.prototype**。可惜这个方法只允许判断操作符左边是一个对象，右边是一个函数之间的关系。

下面是第二种判断方法：isPrototypeOf()
```javascript
function Foo(){
    ```
}
const a = new Foo()
console.log(Foo.prototype.isPrototypeOf(a));//true
```