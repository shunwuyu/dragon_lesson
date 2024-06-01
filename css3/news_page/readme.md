# 基于weui  快速搭建新闻列表页

- 组件
    - tabbar 导航栏
    - searchbar 搜索栏 
    - List列表组件

- WEUI 组件库
    - 微信生态 
    - link  引入  weui.min.css  快
    - http传输更快， 浏览器不需要换行.., 理解css  上线的版本
    - 非压缩  开发阶段/源码阅读 
    - CDN  内容分发网络 离我们最近的一台服务器， 提供内容 

- tab 切换
    - 事件监听在dom元素上，而不是集合上
    - 循环时间监听中，拿到下标
        - for 同步
        - event 异步 
        - 添加作用域
            - es5  立即执行闭包i 
            - es6 let  块级作用域 + for  {  }
    - this 事件元素
    - classList add contains remove 等方法
    - 点击当前已选中 return 

- weui 使命， 盲人也要能用 无障碍浏览 读屏器
    label 可以被读出来
    label  for  input id 
    - input 被visibility hidden 
    - weui-search-bar_focusing 