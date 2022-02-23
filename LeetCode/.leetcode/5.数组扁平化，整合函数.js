//扁平化
const flat = (arr)=> arr.flat(Infinity)
//手写扁平化
const handwritingFlat = (arr)=>{
    return arr.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?handwritingFlat(cur):cur)
    },[])
}
//去重
const removeRepeat = (arr)=> Array.from(new Set(arr))
//排序
const sort = (arr)=>arr.sort((a,b)=>a-b)
//整合函数
const compose = (...fns)=>(val)=>{
    return fns.reduce((pre,cur)=>{
        return cur(pre)
    },val)
}
arr =compose(handwritingFlat,removeRepeat,sort)(arr)