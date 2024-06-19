// 文件后缀改为mjs 
// node 后端比前端复杂 
// es6 模块化系统 默认是commonjs
// 更强大
import fs from 'node:fs'
// 回调函数
// err 出错了？ 后端比较复杂
fs.readFile('./hello.txt', 'utf-8', (err, data) => {
    // 二进制
    // 文件在硬盘里是以二进制的方式来存储的
    console.log(data);
})