
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8,4,8],
    set:new Set([2, 4, 8,4,8]),
    map:new Map (),
    reg:/\d+/,
    null:null
};
target.target = target;
console.log(deepClone(target));

//为什么用weakMap？
// WeakMap的key值必须是对象，并且weakMap对键值的对象是弱引用的，而Map中对对象是强引用的。弱引用意味着创建的
// 键值对不需要我们手动释放，垃圾回收机制会自动将其回收。而如果使用强引用的Map，当我们需要
// 拷贝的数据十分庞大，使用Map对内存的消耗会十分庞大。如果我们想让一个强引用的对象被回收我们需要先delete(key) 然后再 key = null


function deepClone(target, map =new WeakMap()){
    let cloneObj=null
    if(map.has(target)){
        return map.get(target)
    } 
    let config = [Date,Error,Map,WeakMap,Set,WeakSet,RegExp]
    if (config.includes(target?.constructor)){
        cloneObj = new target.constructor(target)
    }
    else if(Array.isArray(target)){
        cloneObj=[]
        target.forEach((val,index)=>{
            cloneObj[index]= deepClone(val,map)
        })
    }
    else if(typeof target==='object'&&target!==null){
        cloneObj={}
        map.set(target,cloneObj)
        for(let v in target){
            cloneObj[v]=deepClone(target[v],map)
        }
        
    }
    else{
        return target
    }
    return cloneObj
}
// console.log(deepClone1(target));