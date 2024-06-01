// 数组对象 toString一下，1，2，3，4 扁平化的希望了
// console.log([1, [2, [3, 4,[5,[6]]]]].toString(), typeof [1, [2, [3, 4]]].toString())
var arr = [1, [2, [3, 4,[5,[6]]]]]
// 扁平化
function flatten(arr) {
    var strArr = arr.toString(); // ,隔开的字符串
    var numArr = strArr.split(',');
    var result = []
    for (var i = 0,len = numArr.length; i < len; i++) {
        // numArr[i]字符串， js 可以强制类型转换（Number() 显示类型转换）
        // + 和 Number()是一样的，  + 一是拼接字符串， 二是数值计算 
        // 三是类型转换  隐式类型转换 
        result.push(+numArr[i])
    }
    // console.log(numArr);
    // return  
    return result
}
console.log(flatten(arr))