this实际上是在函数调用时发生的绑定，它与函数声明的位置没有关系。指向什么完全取决于函数在哪里被调用，当函数被调用的时候，会创建它的执行上下文，其中有三个重要的属性一个是变量对象一个是作用域链还有一个就是this。this的绑定规则有四种

>this的绑定规则

**1.默认绑定**
```javascript
function foo(){
    console.log(this.a);
}
var a=2
foo()//2 注意在严格模式下为undefined
```
foo()是直接调用的不带任何修饰，只能使用默认绑定，因此this指向了全局对象（注意如果使用严格模式的话，不能将全局对象应用于默认绑定会指向undefined）

**2.隐式绑定**
```javascript
function foo(){
    console.log(this.a);
}
var obj ={
    a:2,
    foo
}
obj.foo()//2
```
当函数引用有上下文对象的时候，this会绑定到这个对象。上面的foo调用的时候加上了对obj的引用。隐式绑定会产生隐式丢失的问题，见下面代码。
```javascript
var a = 'global'
function doFoo(fn){
    //fn实际上引用的是foo而不是obj.foo
    fn()
}
function foo(){
    console.log(this.a);
}
var obj ={
    a:2,
    foo
}
const bar=obj.foo
doFoo(obj.foo)//global,当应用严格模式的时候为undefined
bar()//global,当应用严格模式的时候为undefined

```
js函数参数的传递实际上是按值传递，传入的函数是foo函数本身，因此会执行默认绑定，指向全局对象输出'global',为严格模式的时候输出undefined。bar亦是如此，虽然他是obj.foo的一个引用实际上引用的是foo()本身。

**3.显示绑定**
JavaScript所有函数对象的原型中都有内置call(),apply()以及bind()方法供我们调用以修改this的指向。
具体实现可以看
[手写call,apply和bind](../%E6%89%8B%E5%86%99%E9%A2%98/%E6%89%8B%E5%86%99call.apply%E5%92%8Cbind.js)

**4.new绑定**
```javascript
function foo(a){
    this.a=a
}
let bar = new foo(2)
console.log(bar.a);//2
```
使用new操作符调用foo的时候，会构造一个新的对象，并把它的this绑定到foo中的this。new操作符发生了什么操作？见
[模拟实现new操作符](../%E6%89%8B%E5%86%99%E9%A2%98/%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0new%E6%93%8D%E4%BD%9C%E7%AC%A6.js)