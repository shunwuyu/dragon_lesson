var arr = [1, [2, [3, 4,[5,[6]]]]]

function flatten(arr) {
    // ['1','2','3']
    // map 
    return arr.toString().split(',').map(function(item) {
        // console.log(item);
        return +item
    })
}

console.log(flatten(arr));