# B站就地编辑  EditInPlace

## 用户体验
    - 平时文本状态，显示签名
    - mouseover 进入编辑状态，显示编辑框
    - 推出编辑状态 自动保存， 切换到文本状态

## 考点
    - 有开发经验 就地编辑（JS高级用户体验）
    - 用类的概念来封装 复用， 考虑队友 
    - EditInPlace 类里的事件监听，内部this丢失 self/that = this 暂存
    - 正好利用 箭头函数 没有this， 直接拿外层的this 来实现对象方法调用
    - html5  localStorage 本地存储  getItem  setItem 方法 
    - 原型式面向对象虽好， 其他语言开发者看不懂
    - es6 提供了 class 语法糖， 大型企业级开发语言 面向对象思想
    - es5不支持 class 关键字 

- npm init -y 初始化   package.json 配置
- npm i json-server   
- scripts  
    npm run dev  json-server --watch db.json

- 什么是网站？
    - 一切皆资源  restful 的概念 
    - db.json  users 
    - 定义了资源的访问方式 
    http://localhost:3000/users  用户的集合资源·
    http://localhost:3000/users/1  用户的单个资源

    https://juejin.cn/post/7362789570217525311

- event  loop 事件循环
    - JS是单线程的 ，它又负责着 用户体验， 不能卡， 简单
    - 将同步代码（ms 级别可以快速一行行按顺序运行的） 快速执行
    - 如果碰到 定时器，ajax, 事件监听等异步任务 先放入 event loop中 （事件池） 登记  click 放进池子里的是事件的处理函数
        - fetch  then  函数 
    - 继续执行同步任务  111
    - 程序进入idle 状态
    - 一直检测event 有没有任务可以执行了 
        loop 轮询 
    - 