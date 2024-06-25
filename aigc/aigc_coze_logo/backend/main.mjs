import Koa from 'koa' // 后端简单的框架
import Router from 'koa-router' // 路由对象
import { bodyParser } from '@koa/bodyparser'
import cors from '@koa/cors'
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: 'sk-RB1JaINx7bzL39g8ADREx37rF5jb8WbvrRSYinjRwEAcNCKL',
  // gptsapi 会帮我们做openai的请求转发
  baseURL: 'https://api.302.ai/v1'
})

// web 服务就是一个app
const app = new Koa()
const router = new Router() // 路由实例 
// use 挂载一个服务
// 函数 ctx 是一个对象，里面有 request 和 response
// HTTP是基于请求响应的简单协议

app.use(bodyParser())
app.use(cors())

router.post('/logo',  async (ctx) => {
    // console.log(ctx.request.body/s, '////')
    let { title, desc } = ctx.request.body;
    // console.log(title, desc);
    const prompt = `
    你是一位资深设计师，
    请为标题为 ${title}， 功能为 ${desc} 
    的移动app应用设计一款logo，
    要求 高端大气上档次。
    `
    try {
        const response = await client.images.generate({
            model: 'dall-e-3',
            prompt,
            n:1
        })

        ctx.body = {
            status: 200,
            url: response.data[0].url
        }
    } catch (error) {
        ctx.body = {
            status: 500,
            error: error.message
        }
    }
    

    
})

router.get('/', ctx => {
    ctx.body = '首页'
})

app.use(router.routes())

// app.use((ctx) => {
//     // ctx.response.body  响应体是hello world
//     ctx.body = 'hello world'
// })

// http 协议的提供 
app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})