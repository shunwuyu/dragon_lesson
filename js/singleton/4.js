
function Duck () {

}
//函数表达式，
// js 变量类型由值决定
var Singleton = function(name) {
    this.name = name   
}

var obj1 = new Singleton('周亮清')
var obj2 = new Singleton('周亮清')
console.log(obj1 == obj2)

var obj = {'a':1}
var obj3 = {'a':1}
var obj4 = obj
console.log(obj == obj3)
console.log(obj == obj4)
