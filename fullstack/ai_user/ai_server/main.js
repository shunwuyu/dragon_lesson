// ai openai, :8888/users?question=
// node 的内置模块 
// - 搭建http服务 
const http = require('http');
const url = require('url');
const OpenAI = require('openai');
require('dotenv').config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
    //proxy 代理
    baseURL: 'https://api.chatanywhere.tech/v1'
})


const server = http.createServer(async function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源访问，也可以指定具体的域名，如'http://example.com'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 允许的请求方法
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // http 基于请求响应的简单协议 req  请求   res 响应
    if (req.url.indexOf('/users') >= 0) {
        // users  ai 服务
        const parsedUrl = url.parse(req.url, true);
        // console.log(parsedUrl);

        const { question, users } = parsedUrl.query;
        console.log(question, users) 
        const prompt = `
        ${users}
        请根据以上用户的json数据，回答${question}这个问题.
        如果回答不了，就返回不清楚
        `

        const response = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: "user", content: prompt }],
            temperature: 0, // 控制输出的随机性，0表示更确定的输出
          });
      
        const result =  response.choices[0].message.content || '';
        console.log(result);
        
        let info = {
            message:result
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.end(JSON.stringify(info))
    }
    console.log(req.url, '////');
    res.end('hello');
})

server.listen(8888, function() {
    console.log('服务器启动了')
})