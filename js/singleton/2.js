"use strict";

let name = '黄飞鸿'

let obj = {
    name: '黄相炜'
}

let obj2 = {
    name: '韦小宝',
    getName: function() {
        console.log('////////////////////////')
        console.log(this.name)
    }
}
// 函数this指向是由运行方式来决定
// 对象的方法调用 this是动态的 
// obj2.getName();
const fn = obj2.getName;
// console.log(fn);
// 最普通的函数来运行， 指向全局
// 如果启用了严格模式 普通函数 this undefined， js的错误
// fn();
// apply可以手动指定this为第一个参数， 余下要传给函数运行的参数照样传
fn.apply(obj)