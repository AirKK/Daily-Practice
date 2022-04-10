//async实际上是generator和promise的语法糖
//generator最大的特点是他可以暂停函数执行，Generator 核心代码的内部核心思想本质上就是通过 regeneratorRuntime.wrap 函数包裹一个状态机函数 fn 。
// wrap 函数内部维护一个 _context 对象，从而每次调用返回的生成器对象的 next 方法时，被包裹的状态机函数根据 _context 的对应属性匹配对应状态来完成不同的逻辑。
function fn(number){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(number===4) reject('报错')
            resolve(number*2)
        },1000)
    })
}
function* readNum(){
    const one = yield fn(1)
    console.log(one);
    const two = yield fn(one)
    console.log(two);
    const three = yield fn(two)
    console.log(three);
    return three 
}
function async (){
    const gen = readNum.apply(this,arguments)
    return new Promise((resolve,reject)=>{
        function next(handle,val){
            try{
                const {value,done} = gen[handle](val)
                if(done) return resolve(value)
                else{
                    //因为value可能不是一个promise，所以用Promise.resolve()包裹，当value是一个promise实例时，它可以直接返回这个实例，如何是基本数据类型或者为空的时候，其相当于一个resolve的promise对象
                    Promise.resolve(value).then(res=>{
                        next('next',res)
                    }).catch(err=>{
                        next('throw',err)
                    })
                }
            }
            catch(err){
                resolve(err)
            }
        }   
        next('next')
    })
}
async(readNum()).then(res=>{
    console.log(res);
}).catch(err=>{console.log(err);})