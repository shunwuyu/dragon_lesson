require('dotenv').config();
const OpenAI = require('openai')
const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
    baseURL:'https://api.chatanywhere.tech/v1'
})
const getChatResponse = async function(model,prompt,n){
    const response = await client.chat.completions.create({
        model:model, // 适合聊天的模型   有很多种
        messages: [{
            role : 'user',
            content : prompt
        }]
    })
    return response.choices[0].message.content;
}

const main = async () => {
    //AIGC 优势就是处理文本， 生成内容
    const text = `
        泡一杯茶很容易。首先，需要把水烧开。
        在等待期间，拿一个杯子并把茶包放进去。
        一旦水开了，就把它倒在茶包上。
        等待一会儿，让茶叶浸泡，几分钟后，取出茶包。
        如果你愿意，可以加一些糖或牛奶调味。
        就这样，您可以享受一杯美味的茶了。
    `
    const prompt = `
    您将获得由三个引号括起来的文本。
    如果它包含一系列的指令，则需要按照以下格式重新编写这些指令。
    
    第一步 - ...
    第二步 - ...
    ...
    第N步 - ...

    如果文本中不包含一系列的指令，则直接写"未提供步骤"

    """${text}"""
    `

    const result = await getChatResponse('gpt-3.5-turbo', prompt);
    console.log(result);
}

main();