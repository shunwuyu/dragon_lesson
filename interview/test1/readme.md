## 大厂面试题

- js
    - js分水岭 2015年 es6
    - var 基本不用了，常量，大写（编程习惯）
    - js 支持不用var 直接声明变量，挂在在全局，糟粕， "use strict;"严格模式
    - 变量提升一样，hoisting  (坏)
    - Object.defineProperty(obj, key, {
        value: 3.1415926,
        writable:false,
    })
        let obj = {}  
        
        常量作为对象的属性来使用，Object.defineProperty 来定义不可改变
    - MDN 文档
        我在翻看MDN 找到Object.freeze() 实现起来更轻松