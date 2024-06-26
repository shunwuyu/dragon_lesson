# 前端第一框架React 

- 来自Facebook
- 特别适合中大型项目开发
- 学习成本 搞

## 安装环境
- npm 包管理器

- npm i -g create-react-app
    - react/vue 企业级应用 ， create-react-app来自facebook官方推出的项目脚手架
    - -g  全局安装 装到哪儿去了？
        npm config ls  配置信息 

        create-react-app -> path -> prefix 

- create-react-app my-react    project-name 
    - 不再是index.html , js css , 
        从0开始 
    - 不用从0开始 拿一个标准的项目模板，快速启动

- my-react
    - src 开发目录， 代码的主战场
        index.js 入口文件
        index.css 全局样式文件
    - node_modules 存放依赖包
        package.json 项目描述文件
        react 18 最牛逼的现代开发框架
        react-dom 
    - public 静态资源目录
        index.html 首页
            - root  react 功能挂载点
    - localhost:3000 -> / -> index.html-> load index.js -> react 接管项目开发
    - package.json 项目描述文件
    
- create-react-app  做了什么事
    - git clone 模板项目
    - npm i 依赖   react react-dom
    - npm run start
    - web server  3000  
    - public/index.html 首页
    - src/ 所有react开发代码会打包成 /public/js/bundle.js 
        动态的加载到index.html 
    - react 功能 接管 root 开启react 世界

- defer 异步加载
    推迟到 DOMContentLoaded 之后 
    async 异步加载  浏览器会异步加载

