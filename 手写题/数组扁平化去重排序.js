//  已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
//调用api实现扁平化
function flat (arr){
    return arr.flat(Infinity)
}
//利用Set去重
function set(arr){
    return Array.from(new Set(arr))
}
//利用sort实现升序
function sort(arr){
    return arr.sort((a,b)=>a-b)
}
//手动实现扁平化
function handleFlat (arr){
    return arr.reduce((pre,cur)=>{
        return Array.isArray(cur)? [...pre, ...handleFlat(cur)]:[...pre,cur]
    },[])
}
//手动实现去重
function handleSet(arr){
    let map = new Map(),ans=[]
    for (let v of arr){
        if(!map.has(v)){
            ans.push(v)
            map.set(v,'')
        }
    }
    return ans
}
//手动实现升序（快排）
function quickSort(arr){
    if(arr.length<2) return arr
    let temp = arr.pop(),left=[],right=[]
    for (let i=0 ; i<arr.length ;i++){
        if(arr[i]<=temp) left.push(arr[i])
        else right.push(arr[i])
    }
    return [...quickSort(left),temp,...quickSort(right)]
}
//整合函数
let compose = (...fns)=>(arr)=>{
   return fns.reduce((pre,cur)=>{
        return cur(pre)
    },arr)
}
console.log(compose(handleFlat,handleSet,quickSort)(arr));//[1,  2, 3,  4,  5,  6,7,  8, 9, 10, 11, 12,13, 14]


