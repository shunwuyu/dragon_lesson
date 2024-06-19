function add(a, b) {
    if (arguments.length < 2) {
        console.log('参数数量不够哦');
        return
    }
    // 数据类型， 参数数量的问题
    if (typeof a != 'number' || typeof b != 'number') {
        console.log('类型错误');
        return 
    }
    return  a + b
}
console.log(add(2, 4))
console.log(add(2))