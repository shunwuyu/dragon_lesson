// add 函数 
function add(...args) {
    // arguments 是 一个类（似）数组对象
    // 对象？ 只要不是简单数据类型，就是对象 object 
    console.log(Object.prototype.toString.call(args))
    // console.log(arguments.length);
    
    // for (let i = 0; i < arguments.length; i++) {
    //     console.log(arguments[i]);
    // }
    // 不过度设计 类数组， 普通数组上得方法它没有
    // arguments.forEach(function(item) {
    //     console.log(item);
    // })
    // console.log(arguments.reduce);
    // if (arguments.length < 2) {
    //     console.log('参数数量不对')
    //     return 
    // }
    // // 创建数组的一种 
    // const items = Array.from(arguments);
    // console.log(Object.prototype.toString.call(items));

    return args.reduce((prev, cur) => prev + cur, 0)
}

add(1,2,3)