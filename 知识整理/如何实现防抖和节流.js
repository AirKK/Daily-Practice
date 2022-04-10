//防抖：防止事件在一定时间内重复触发，它的思想在于 “清零”,只要重复触发就重新计时

function debounce(fn,delay){
    let timer
//利用闭包维护一个timer，要注意这句代码只执行一次。
// 想要防抖生效，每次触发的不是debouce，而是下面return出去的函数。
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn(...args)
        },delay)
    }
}
//节流：在固定的一段时间内事件执行一次，其与防抖不同在于如果时间在一段时间一直触发，节流会
// 根据设定的时间间隔执行，而采用防抖的话只会在最后执行一次,节流的思想在于"上锁"
function throttle(fn,delay){
    let timer
    return function(...args){
        if(timer) return
        else{
            timer =setTimeout(()=>{
                fn(...args)
                timer=null
            },delay)
        }
    }
}

//测试
function sleep(){
    return new Promise(resolve=>{
        setTimeout(resolve,100)
    })
}
const testfn= async ()=>{
    for(let i=0 ; i<50 ; i++){
            await sleep()
            test2(i)
    }
}
const test = debounce(function(i){
    console.log('完成');//完成
},1000)
//使用testfn模拟了连续点击了5000毫秒，如果采用防抖最终只输出一次“完成”；

const test2 = throttle(function(i){
    console.log('完成');     //完成
                            // 完成
                            // 完成
                            // 完成
                            // 完成
},1000)
//使用testfn模拟了连续点击了5000毫秒若采用节流，则会输出5次“完成”
testfn()


