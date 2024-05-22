const request = require('request-promise');
const cheerio = require('cheerio'); 
// AIGC LLM 生成式内容
// tr 字符串要生成movie json 对象 
// input prompt 
const OpenAI = require('openai');

const client = new OpenAI({
    // 凭证 密钥  算力收费  token
    apiKey: '****',
    baseURL: 'https://api.chatanywhere.tech/v1'
})
// 入口文件
// 异步的
// 将douban 网页的电影列表html，爬取， 
// 返回JSON数组， 每一电影项包含name, desc, score... 
// 单点入口 
async function main() {
    // 代码 分步细化，程序员思维
    // 伪代码
    // 根据url 发送一个http请求 拿到html 
    // 根据html 分析， 拿到电影内容
    // 返回内容
    // await LLM  
    // 良好的编程规范
    const URL = "https://movie.douban.com/chart";
    // http 请求 html   408  基于请求
    // 攻击
    const html = await request({
        url: URL
    })
    console.log(html);

    

    // 代码的可读性，可能要比功能更重要
    // html分析 document + 选择器 cheerio 满足
    // 编程素养 将html字符串加载到内存中，$ =Document 
    let $ = cheerio.load(html);
    // console.log($('.article table').length)
    // 严谨
    const movieNodes = $('#content .article .item');
    let movie_html = ''
    for ( let i =0; i < 2; i++) {
        movie_html += cheerio.load(movieNodes[i]).html()
    }
    // console.log(movie_html);
    let prompt = `
    ${movie_html}
    这是一段电影列表html,请获取电影名(name), 封面链接(picture),
    简介(info),评分(score),评论人数(commentsNumber), 
    请使用括号的单词作为属性名，以JSON数组的格式返回。
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
    // const movieList = [];
    // for (let i = 0; i < movieNodes.length; i++) {
    //     // 封装？ 
    //     // 将一段电影的html解析，剥离出去， 
    //     // 这段功能相对独立 复用的
    //     // main 比较复杂了， 一个函数超过10行代码， 一定可以再分函数
    //     movieList.push(getMovieInfo(movieNodes[i]));
    // }

    // console.log(movieList);
}

const getMovieInfo = function(node) {
    let movieInfo = {};
    // 将tr加载进内存
    let $$ = cheerio.load(node);
    let title = $$('.pl2 a').text()
    let pic = $$('.nbg img').attr('src')
    // console.log(pic)
    // console.log(title);
    let info = $$('p.pl').text()
    let rating_nums = $$('.rating_nums').text()

    movieInfo.title = title
    movieInfo.pic = pic
    movieInfo.info = info
    movieInfo.rating_nums = rating_nums
    
    return movieInfo
}

main()
