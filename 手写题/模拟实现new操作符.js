// 1.创建一个新的对象
// 2.将构造函数的prototype链接到新对象
// 3.将新对象绑定到构造函数的this
// 4.如果构造函数有返回值，优先返回，否则返回这个新对象

function create(){
    //从传参中取出构造函数
    let New = [].shift().call(arguments)
    //创建新的对象并将原型链接到构造函数的原型，使其能访问构造函数原型上的属性
    let obj = Object.create(New.prototype)
    //执行构造函数并将this显示绑定到新创建的对象上
    let res = New.apply(obj,arguments)
    //判断返回是对象的话优先返回，否则返回新创建的对象
    return res instanceof Object? res : obj
}
