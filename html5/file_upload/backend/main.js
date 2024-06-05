// node 的后端开发框架
// node 里的关键字，引入一个模块， 模块化的关键字
// 前端早期是没有模块化机制，前端运行一个脚 本
// 后端多个文件，多个库·
// 后端比前端复杂，  node模块化系统 叫CommonJS
const express = require('express');
const cors = require('cors');

// 后端应用
const app = express();
app.use(cors);
// http 是基于请求响应的简单协议
app.get('/', (req, res) => {
    // req request 请求对象
    // res response  响应对象
    res.send('hello world')
})
app.get('/users', (req, res) => {
    // req request 请求对象
    // res response  响应对象
    res.send('hello users')
})
// http服务
app.listen(3000, () => {
    console.log('server is running');
})
