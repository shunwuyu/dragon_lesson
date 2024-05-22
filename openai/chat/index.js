// console.log('后端服务启动了')
// openai
// require 关键字   首字母大写 类 JS是大小写敏感的
const OpenAI = require('openai');
// 实例化 OpenAI 配置
const client = new OpenAI({
    // 凭证 密钥  算力收费  token
    apiKey: 'sk-r4N8AJ6qidnIWrkqsilwlUMekVpKhoVJ3VEaz8Ss0LUUi7bH',
    baseURL: 'https://api.chatanywhere.tech/v1'
})
// 入口主函数 
// main函数内部会有异步任务 async + await 

async function main() {
    // 和AI LLM  chat 从编程思维-> AI编程思维 -> AIGC -> AGI
    // client 是 openai  对象 chat 聊天 完成
    // LLM 是在远程运行 await 
    // 字符串模板 提示词
    const prompt = `
    <tr class="item">
            <td width="100" valign="top">
                

                    <a class="nbg" href="https://movie.douban.com/subject/35503073/" title="对你的想象">
                        <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2905327559.webp" width="75" alt="对你的想象" class="">
                    </a>
            </td>

            <td valign="top">
                

                <div class="pl2">

                    <a href="https://movie.douban.com/subject/35503073/" class="">
                        对你的想象
                        / <span style="font-size:13px;">关于你的想法 / 概念中的你</span>
                    </a>



                    <p class="pl">2024-03-16(西南偏南电影节) / 2024-05-02(美国网络) / 安妮·海瑟薇 / 尼古拉斯·加利齐纳 / 艾拉·鲁宾 / 安妮·玛莫罗 / 瑞德·斯科特 / 帕芮·马费尔德 / 乔丹·亚伦·霍尔 / 玛蒂尔达·吉安诺普洛斯 / Meg Millidge / 奇克·曼诺哈 / Ray Cham / Jaiden...</p>

                    


                        
                        <div class="star clearfix">
                                <span class="allstar30"></span>
                                <span class="rating_nums">5.9</span>
                                <span class="pl">(21306人评价)</span>

                        </div>


                </div>

            </td>
        </tr>
        这是一段电影html,请获取电影名(name),封面链接(picture),简介(info),
        评分(score),评论人数(commentsNumber)。请使用括号的单词作为属性名，
        以JSON的格式返回。
    `

    const chatCompletion = await client.chat.completions.create({
        model: 'gpt-3.5-turbo', // 适合聊天的模型 很多种
        messages: [
            {
                role: 'user',
                content: prompt
            }
        ]
    })
    console.log(chatCompletion.choices);
}
main();