# 图片懒加载  LazyLoad

## 浏览器会做什么？
    - 渲染页面
    - 下载html 标签 ->内存建立DOM树(document.querySelector)
    - 下载css 样式表 -> 渲染树 
    - DOM树 + CSS 渲染树 = 页面 
    - JS是单线程 
    - 浏览器是多线程的 
    - img link  script ... 浏览器会启动新的下载线程
    - 上高速 堵车
    - 有必要同时并发那么多图片吗？ 

## 性能优化 
    - 首屏的图片(视窗)
    - 滚动懒加载 
    - 前端的天职是尽快显示页面 

## 步骤
- 手动控制图片加载
    img src 标签属性 立马下载
- data-src 数据属性
    dataset  一个元素可以有多个数据属性 

## 收获 
    - 前端性能主题之图片懒加载
    - 浏览器的底层原理 下载线程
        要并发  快速显示 
        并发数不能太多 tcp/ip 通道 
    - clientHeight  scrollTop offsetTop
    - dataset 
    - 业务逻辑优化
        imgs.length  removeEventListener scroll 
    - 减少它的出发次数？
        scroll 太敏感