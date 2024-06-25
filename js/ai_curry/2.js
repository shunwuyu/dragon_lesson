const items = [1, 2, 3];
// let sum = 0;
// es6 可读性 
// for (let item of items) {
//     sum += item
// }

// console.log(sum);

// items.forEach(function(item) {
//     console.log(item);
// })

const sum = items.reduce((accumulator, currentValue) => 
    accumulator + currentValue,
 0)

console.log(sum);