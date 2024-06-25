// main.mjs 代替main.js 成为主入口
// mjs 使用的模块化方案为es6 module 
import OpenAI from 'openai'
import { add, getSaleReport } from './common.mjs'

console.log(add(1,2))

const client = new OpenAI({
  apiKey: 'sk-RB1JaINx7bzL39g8ADREx37rF5jb8WbvrRSYinjRwEAcNCKL',
  // gptsapi 会帮我们做openai的请求转发
  baseURL: 'https://api.302.ai/v1'
})
// python csv 格式·数据分析 
// ，隔开
const saleData = `
    销售数据：
    日期,产品,销量,单价,总收入
    2023-01-01,iPhone 13,100,6000,600000
    2023-01-01,iPhone 14,50,8000,400000
    2023-01-02,iPhone 13,80,6000,480000
    2023-01-02,iPhone 14,60,8000,480000
    2023-01-03,iPhone 13,120,5800,696000
    2023-01-03,iPhone 14,80,7800,624000
`
// 功能封装 


// const res = await getSaleReport(saleData,
// "根据上述销售数据，计算iPhone 13和iPhone 14的总销量各是多少")
// console.log(res)

const res = await getSaleReport(client, saleData, "根据上述销售数据，那个产品的总收入更高，高多少？")
console.log(res)