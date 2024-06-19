js 函数， 两数相加 

## 函数收集参数
    curry(fn)
    - 使用es5 , 函数里有一个 arguments arguments[1] ->arguments[arguments.length - 1]
    - 使用es6 
        让我们代码运行简洁  ...args rest 运算符
        curry(fn, ...args)
    - 问题是什么？ 
        即使用了箭头函数 arrow function ,
        我又去用了es5 里面的arguments 
        箭头函数里面没有arguments , 违反了es6 简洁 
        应该用rest 运算符