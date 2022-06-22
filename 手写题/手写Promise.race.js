// Promise.race()​​​ 返回一个 ​​promise​​​，一旦迭代器中的某个 ​​promise​​​ 履行或拒绝，返回的 ​​promise​​ 就会履行或拒绝。

Promise.race = (promiseArray) => {
    return new Promise((resolve, reject) => {
        promiseArray.forEach(item => {
            Promise.resolve(item).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    })
}
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 400, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
}).catch(err => { console.log(err); });