# AI全栈开发， 24年最火最高薪的方向

- AI全栈
    - 前端 frontend
        - bootstrap css 框架 PC 项目可以快速完成页面开发
        - container  row col 页面的布局  
        - html5 表单增强
            - placeholder 输入框提示 用户体验
            - required 必填项
        - 前后端交接的时刻
            - 前后端分离
            - 后端 在 localhost:3000/logo logo生成的接口
            - 前后端数据交换标准是JSON 
                - JSON keyval  适合做数据的
            - http协议 接口文档
                - POST 请求   
                - JSON格式的字符串 
            - 请求行  url  method   http 版本
            - 请求头  Content-Type  cookie token ... 
            - 请求体 


    - 后端 backend
        - 提供路由， 用户可以从哪里来？
            - 实例化router 对象  new Router()
            - method + path  /logo  路径对象
            - 函数 ctx 
            - app.use(router.routes()) 挂载一下 

        - postman
            - 前后端分离的
            - http/router/测试接口的可用性
            - http 请求模拟工具
                - 下拉了Method  填了 URL
                - 请求体 
                - 测试成功 

        - nodemon
            - npm i -g nodemon 全局
            - nodemon  main.mjs  监听文件并重启服务器    
        
        - @koa/bodyParser
            - node 这种后端开发，一个个服务慢慢挂载的方式来实现的 
            - post  请求体接受   @koa/bodyParser 
            - 挂载一下 app.use()

        - 后端开发成功
            - :3000/logo logo  的JSON数据返回了
            - 接口开发任务完成 
            - 前端注重用户体验， 后端稳定性 try{} catch(err) {}
            - status  200  成功
            - 返回JSON 数据 

        - 跨域
            - http://localhost:5500  前端  
            - http://localhost:3000 后端 
            - 域名（淘宝，pdd） 端口不一样（不同的服务）
            - 被 CORS 同源策略  警察  blocked 
            - @koa/cors 跨域解决
                挂载  app.use(cors())

    - ai server 

- 前端为什么要学习AI?
    - AI是大势所趋，24年是中国AI元年
    - 前端用户体验因AI带来了改变和创新 AIGC是一种用户体验 
        - coze logo 生成
            - 传统 文件上传
            - AIGC 文生图 dalle-3 多模态模型（文本，图片，视频，音频）
    - gpt4o 集合  （文本，图片，视频，音频）通往AGI 之路的模型
        和硬件结合起来， 机器人就来了， AGI的世界