# html5 有哪些特性

- 语义化标签
    article header footer section ... 
- video audio canvas 
- drag and drop 
- localStorage 存储
- form 表单增强功能  placeholder 
- file 对象

- 文件上传的两种用户体验
    - 普通input type file 文件上传
       change  event.target.files 
    - 拖拽式上传 欣颖的用户体验
        drop  event.preventDefault 
        event.dataTransfer.files
    - 封装
        uploadFile 是一样的
        函数要和事件分离
        抽离共同点  files 
    - File 对象是HTML5最新提供的
        File对象可以帮助我们立马在本地处理图片, 远程（服务器）
        File 对象帮助JS用户，跳出了浏览器的束缚，可以访问系统 的文件内容了
        先显示缩略图，反馈给用户
- 好的用户体验是不让用户犯错
    用户永远是对的， 用户永远可以是小白

- cors 跨域
    - JS 有同源策略 为了安全
    - 127.0.0.1:5177 
    127.0.0.1:3000 
    端口不一样 也是跨域 