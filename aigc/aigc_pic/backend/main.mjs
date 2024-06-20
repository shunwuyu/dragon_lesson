// 不用require commonjs
// es6 module 
// 启动 后端服务
// 引入最好，最火，最简单node 框架
// es6 module 模块化 引入koa 框架
import Koa from 'koa';
import Router from 'koa-router';// 路由
import cors from '@koa/cors';
import { bodyParser } from '@koa/bodyparser';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({
    path:'.env'
})

// console.log()

const client = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
  baseURL:'https://api.gptsapi.net/v1'
});

// 网站就是一个app 
const app = new Koa();
const router = new Router();

// 挂载跨域功能
app.use(cors())
// 挂载post 请求体解析功能
app.use(bodyParser())

router.post('/logo', async (ctx) => {
    console.log(ctx.request.body, '///////');
    const { title, desc } = ctx.request.body;
    // const desc = ctx.request.body.desc;
    // const prompt = `我要开发${title}的一款App, 
    // 功能细节是${desc}，请告诉我找你做外包要多少钱？`

    let response;
    try {
        const prompt = `
            你是一位互联网大厂设计师，
            请为应用名为${title},
            功能细节为${desc}的移动端App
            设计一个高端、大气、上档次的logo
        `
        response = await client.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        })
        console.log(response.data, '///////')
        ctx.body = {
            code:200,
            url: response.data[0].url
        }
    } catch(err) {
        console.log(err)
        ctx.body = {
            code: 500,
            msg: '出错了'
        }
    }
    
    // console.log(response, '//////')

    // ctx.body = {
    //     title,
    //     desc
    // };
})
router.get('/', (ctx) => {
    ctx.body = 'index page';
})
// use 加个什么服务
// 用户通过http请求进来，use 里面的函数一定会执行
// 请求  中间件 响应
// app.use((ctx) => {
//     // ctx 是上下文
//     // 响应体
//     ctx.body = 'hello'
// })
// router.routers 路由上的所有路由的声明加上去
app.use(router.routes());
// http 服务 3000
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
})
