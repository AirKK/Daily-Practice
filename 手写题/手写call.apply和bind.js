//手写实现call

Function.prototype.call2=function(context){
     context = context || window //当不传值的时候,指向window
    context.fn=this 
    let nums = []
    for (let i=1 ; i<arguments.length ; i++){
        nums.push(arguments[i])
    }
    let ans= context.fn(...nums)
    delete context.fn
    return ans
}
// console.log(bar.call(obj, 'marcoKun', 22));//{ value: 1, name: 'marcoKun', age: 22 }

// 手写实现apply
// apply和call的区别仅在与传值，apply有两个参数，第二个参数为数组

Function.prototype.apply2=function(context,arr){
    context = context||window
    context.fn = this
    if(!arr.length) context.fn()
    else{
        let nums=[]
        for(let i=0 ; i<arr.length ; i++){
            nums.push('arr['+ i+']');
        }
        let ans = eval('context.fn('+nums+')')
        return ans
    }
    delete context.fn
}
// console.log(bar.apply2(obj, ['marcoKun', 22]));//{ value: 1, name: 'marcoKun', age: 22 }

//手动实现bind
// bind 和call，apply 的区别在于 bind返回一个函数，当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this
Function.prototype.bind2 = function(context){
    let that = this,nums=Array.prototype.splice.call(arguments,1),
    bindFn = function (){
        let _nums = Array.prototype.splice.call(arguments)
        let arr = [...nums,..._nums]
        //因为bind返回的函数作为构造函数的时候，bind 时指定的 this 值会失效
        //所以我们需要判断函数是否作为构造函数,通过 instance of 判断this 是否是bindFn的一个实例
        if(this instanceof bindFn) return that.apply(this,arr)
        else return that.apply(context,arr)
    }
    //我们还要让bindFn 和 this关联起来，如果直接 让 bindFn.prototype = this.prototype 
    //this.prototype会随着bindFn.prototype修改发生改变,可以通过一个新的对象作为中转
    let temp = Object.create(this)
    bindFn.prototype = temp.prototype
    return bindFn
}

var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

// let temp = bar.bind2(obj,'marcoKun', 22) 
// let test = new temp()
// console.log(test);{ value: undefined, name: 'marcoKun', age: 22 }
// console.log(temp.prototype===bar.prototype); true

// let temp = bar.bind(obj,'marcoKun', 22) 
// let test = new temp()
// console.log(test);注意bind返回的函数作为构造函数的时候，bind 时指定的 this 值会失效
//                 { value: undefined, name: 'marcoKun', age: 22 }
