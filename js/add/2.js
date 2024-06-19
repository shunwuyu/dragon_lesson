// js 闭包完成一个add, 可以分步去接收参数， 一次只接收一个
// add2 = add(2)   返回的仍然是一个函数， 闭包？ 2 自由变量 
// add2(4)  6  

function add(a) {
    // 第 一个参数a
    return function(b) {
        return a + b
    }
}

console.log(add(2)(4))