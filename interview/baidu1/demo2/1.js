// 展平  递归 
const arr = [1, [2, [3, 4]]];

function flatten(arr) {
    let result = []
    // len 缓存了值 arr是对象， .length 耗时
    for (let i = 0, len= arr.length; i < len; i++) {
        // 数组， 递归
        if(Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
        // 否者 加入数组
    }
    return result
}
console.log(flatten(arr))
