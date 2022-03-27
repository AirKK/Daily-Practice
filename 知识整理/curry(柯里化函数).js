var curry = fn =>
    judge = (...args) =>{
        console.log(fn.length,'www',args.length);
        args.length === fn.length
            ? fn(...args)
            : (arg) => judge(...args, arg)
    }
        

var fn = curry(function() {
    console.log([a, b, c, d, e]);
});
fn(1,2,3,4)