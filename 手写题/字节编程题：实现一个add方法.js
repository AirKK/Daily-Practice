// add(1)(2,3)(4,).value()   
// 输出： 10

const add =(...nums)=>{
    const inner=(..._nums)=>{
        return add(...nums,..._nums)
    }
    inner.value=()=>nums.reduce((pre,cur)=>pre+cur)
    return inner
}

console.log(add(1)(2,3)(4,2).value());//12