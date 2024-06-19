// console.log('123')
// 对文件系统中的hello.txt读取
// node  内置模块
// 模块化系统  require 关键字 commonJS 
const fs = require('fs')
// js 单线程语言
// 内存 快 
// hello.txt 硬盘里的 慢 
// 异步任务 事件， 定时器， ajax, ... 耗时任务
// fs.readFile('./hello.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// console.log('start')

const fsPromise = () => {
    return new Promise((resolve, reject)=> {
        fs.readFile('./helle.txt', 'utf8',(err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

fsPromise().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})