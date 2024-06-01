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

let obj3 = {}
obj3.__proto__ = obj2
console.log(obj3.name)
obj3.__proto__ = obj
console.log(obj3.name)