function Duck(nickname) {
    console.log(this);
    this.nickname = nickname
}
Duck.prototype.singing = function() {
    console.log('嘎嘎嘎')
}
Duck.prototype.walk = function() {
    console.log('鸭子步伐')
}
// es6 reset 运算符
function myNew(Fun, ...args) {
    // this
    // console.log(arguments);
    // let a = 1; // 简单数据类型，内存在栈内存
    // let b = a; // 值的拷贝
    let obj = {};// 对象，内存在堆内存中  地址引用
    Fun.apply(obj, args);
    // console.log(obj, '???????????????')
    obj.__proto__ = Fun.prototype;// 原型对象
    return obj;
}
// let duck = new Duck('张朝熔')
let duck = myNew(Duck, '张朝熔', '宜春', '猛男')
console.log(duck.nickname);
duck.singing();