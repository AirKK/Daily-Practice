// Promise.all() 方法接收一个 promise 的 iterable 类型，并且只返回一个Promise实例，所有promise resolve的结果是一个数组。只要有一个promise被reject则立即抛出错误。返回值将会按照参数内的 promise 顺序排列
Promise.all = (promiseArray) => {
    //转换为数组
    promiseArray = Array.from(promiseArray)
    let result = [], len = promiseArray.length, count = 0
    return new Promise((resolve, reject) => {
        for (let i = 0; i < len; i++) {
            //使用Promise.resolve保证所有数据都转化为 Promise
            Promise.resolve(promiseArray[i]).then(res => {
                result[i] = res
                if (++count === len) resolve(result)
            }).catch(err => {
                reject(err)
            })
        }
    })
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 400, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.all([promise1, promise2]).then((value) => {
    console.log(value);
}).catch(err => { console.log(err, 'err'); });