// 多模态能力
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: 'sk-RB1JaINx7bzL39g8ADREx37rF5jb8WbvrRSYinjRwEAcNCKL',
  // gptsapi 会帮我们做openai的请求转发
  baseURL: 'https://api.302.ai/v1'
})

// prompt  
// 1. 它是一位资深的设计师 
// 2. 请它为标题明为 title, 功能为  app 应用设计一款logo
// 3. 要求 高端大气上档次
let  title = '探探'
let  desc = '陌生人社交，相互点赞的陌生人快速交友。'

// const prompt = `
// 你是一位资深设计师，
// 请为标题为 ${title}， 功能为 ${desc} 
// 的移动app应用设计一款logo，
// 要求 高端大气上档次。
// `

const prompt = `
    A spaceship flying through the universe
`

const main = async () => {
    // 文生图 AIGC 
    const response = await client.images.generate({
        model: 'dall-e-3',
        prompt,
        n:1
    })

    console.log(response.data[0].url)
}

main()

