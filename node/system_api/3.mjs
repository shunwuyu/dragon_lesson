// es6 module 后端 + 新的模块
import fs from 'fs'
// ajax , 同步写法
const syncData = fs.readFileSync('./test.txt', 'utf-8')
console.log('hello~');
console.log(syncData);

fs.readFile('./test.txt', 'utf-8', (err, data) => {
  if (!err) {
    console.log(data);
    fs.readFile('./hello.txt', 'utf-8', (err, data) => {
      if (!err) {
        console.log(data);
        // fs.
      }
    })
  }
})

// 异步很好，回调地狱（代码可读性不好）但是可以优化 
fs
    .promises
    .readFile('./test.txt', 'utf-8')
    .then(promiseData => {
        console.log(promiseData)
    })
// 链式调用虽然将代码执行流程扁平化，但是可读性不好
;(async () => {
    // 跟同步差不多
    const data = await fs.promises.readFile(
        './test.txt', 'utf-8');
    console.log(data)
})()