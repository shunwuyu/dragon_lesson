# AI全栈之logo生成
> 最佳实战功能亮点验点

## AI全栈架构
- 前端
    - bootstrap 快速搭建页面
        布局
            container row col  12  offset 
        组件 
            表单
    - form 表单 
    - ajax 
        - POST 请求的处理
            - method POST
            - body 字符串
                - json  组织各个表单的值
                - JSON.stringify 
- 后端
    - openai dalle 3 多模态模型
    - koa 搭建web 服务器
    - 中间件  app.use(函数)
    - ctx.body 结束 用户拿到他想访问的资源
    - :3000/login 路由功能
        - npm i koa-router koa家族
        - new koa-router()
        - get/post('/pathName')
            / 是路径的开始
        - 中间件函数
        - app.use(router.routes()) 
    - @koa/cors 解决跨域
        - npm i @koa/cors
        - app.use(cors())
    
    - nodemon 监听文件修改运行
- 全栈
    - 前端5500  
    - 后端3000
    - frontend   backend 前后端分离
    - 5500 3000  跨域
        来自于前端js的同源策略
    - 前后端数据交换格式是json
        - post {title, desc} JSON.stringify()
        - backend @koa/bodyParser 中间件 解析post请求
        - headers Content-Type: application/json  JSON.parse()
        - ctx.request.body  { }

- LLM
    - 安装openai
    - 管理好key 
    - 调用接口
    - 文本模型 gpt-3.5-turbo
    - 多模态模型 gpt-4(强大) gpt-4o（AGI模型） dalle-3
        文本，图片， 视频 音频... 
        client.images.generate
        
