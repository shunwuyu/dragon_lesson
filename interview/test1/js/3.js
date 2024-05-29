// var PI = 3.1415926

var myObj = {
    // PI: 3.1415926
}

Object.defineProperty(myObj, 'PI', {
    value: 3.1415926,
    writable: false,
    configurable: true
})

myObj.PI = 2
console.log(myObj.PI)

// myObj.PI = 2
