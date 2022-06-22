const { log } = require("console")

class PromiseA {
    static pending = '待定状态'
    static fulfilled = '成功状态'
    static rejected = '失败状态'
    constructor(fn) {
        this.status = PromiseA.pending
        this.result = null
        this.rejectedStack = []
        this.fulfilledStack = []
        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        }
        catch (err) {
            this.reject(err)
        }
    }
    resolve(value) {
        setTimeout(() => {
            if (this.status === PromiseA.pending) {
                this.status = PromiseA.fulfilled
                this.reslut = value
                this.fulfilledStack.forEach((fn) => {
                    fn();
                });
            }
        }, 0);
    }
    reject(value) {
        setTimeout(() => {
            if (this.status === PromiseA.pending) {
                this.status = PromiseA.rejected
                this.reslut = value
                this.rejectedStack.forEach(fn => {
                    fn()
                })
            }
        }, 0);
    }
    then(onFulfilled, onRejected) {
        return new PromiseA((resolve, reject) => {
            onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
            onRejected = typeof onRejected === 'function' ? onRejected : () => { }
            if (this.status === PromiseA.fulfilled) {
                onFulfilled(this.reslut)
            }
            else if (this.status === PromiseA.rejected) {
                onRejected(this.result)
            }
            else if (this.status === PromiseA.pending) {
                this.fulfilledStack.push(() => {
                    onFulfilled(this.reslut)
                })
                this.rejectedStack.push(() => {
                    onRejected(this.reslut)
                })
            }
        })

    }
}

const promise = new PromiseA((resolve, reject) => {
    console.log(1);
    resolve('success')
    console.log(2);
});
promise.then((res) => {
    console.log(res);
    console.log(3);
});
console.log(4);