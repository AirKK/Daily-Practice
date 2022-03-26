//利用Set无法对数组中的数组或者对象进行去重，我们可以手动实现。
function removeRepeat(arr){
    let map = new Map(),ans=[]
    for (let i=0 ; i<arr.length ; i++){
        //先判断是否是数组，或者对象
        if(Array.isArray(arr[i])) arr[i].sort((a,b)=>a-b)
        if(Object.prototype.toString.call(arr[i])==="[object Object]"){
            arr[i]= Object.keys(arr[i]).sort().reduce((pre,cur)=>{
                pre[cur]=arr[i][cur]
                return pre
            },{})
        } 
        let key = Object.prototype.toString.call(arr[i])+JSON.stringify(arr[i])
        if(!map.has(key)){
            ans.push(arr[i])
            map.set(key,'')
        } 
    }
    return ans
}


console.log(removeRepeat([123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili",{a: 1, b: 2},{b: 2, a: 1}]));//[ 123, [ 1, 2, 3 ], [ 1, '2', 3 ], 'meili', { a: 1, b: 2 } ]