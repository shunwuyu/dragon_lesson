// 只有一句代码 返回值 本身
const curry = (fn, ...args) => 
    // console.log(args.length, fn.length); 
    args.length >= fn.length
    ? fn(...args)
    :(..._args) => curry(fn, ...args, ..._args)

// 原函数
// 柯里化， 参数慢 慢 收集 
const add = (x, y, z, m) => {
    return x  + y + z + m
}
// console.log(curry(add, 1, 2,3,4))
console.log(curry(add, 1)(2)(3, 4))


// console.log(curryAdd)