# js 函数的高级技巧

- 闭包
    closure 
    函数嵌套函数 形成闭包

- arguments
    - 函数运行时参数管理对象  类数组对象
    - Object.prototype.toString.call(arguments) == '[object Arguments]'
    - for  .length 能力 ，但是  forEach, join reduce, 方法肯定是没有的
    - es6 reduce 方法， 数组相加太好了，
    - add arguments 相加？ 
    - 类数组编程真数组 Array.from()
    - ... 扩展运算符 rest 运算符 
    - node 4.js  1 2 3 
    - 箭头函数没有arguments,外层的
    - 因为有es6 rest运算符，没必要arguments了， 
    - 箭头函数就是为了方便而来的
    - 提一提mdn 