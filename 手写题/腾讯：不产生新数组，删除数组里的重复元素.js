//手动去重，不产生新数组

const sort =(arr)=>{
    let len = arr.length-1
    for (let i=len ; i>=0 ; i--){
        if(arr.indexOf(arr[i])!=i){
            //说明不是第一次出现，要删除，用最后一个不需要删除的元素覆盖当前元素
            arr[i]=arr[len--]
        }
    }
    return arr.splice(0,len+1)
}
// console.log(sort([1, 2, 3, 1, 3]));


