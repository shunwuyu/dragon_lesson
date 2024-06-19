nest.js + openai 

- 切换的js 的运行环境
    - 前端 显示 和交互
    - 后端 服务器端 
- 后端首先要了解模块化系统 
    - 前端就是选择元素，事件， 操作，效果 早期是没有模块化系统  
    - 数据放在mysql  里 ，模块放在views里， 逻辑放在各个文件里
        跨文件处理就是家常便饭  
    - node commonJS(require) 升级到 es6 module(import ) .mjs 
- fs 文件系统 
    - 文件系统是操作系统 ，后端的主要模块，内置
    - 代码文件，1.js
    - hello.txt 一般文件
    - node 1.js 
        1.js 在硬盘，-> 读取到内存中-> 启动进程（分配资源的最小单元）-> CPU  -> 分配空间
    - fs.readFile 
    - 内存-> fs（api） -> 硬盘读取hello.txt
    - 内存与硬盘相差的一个数量级 耗时性的任务
    - js 单线程， 放到event loop 中 
    - 回调callback, -> promise  -> async await
    - 后端主要考虑稳定性  err 第一个参数
    - 文件以二进制的方式来存储
    - utf-8 读取的时候，怎么来理解二进制 ,显示 国际通用字符

- node fs 模块是支持同步读取readFileSync的
    像其它java 等大型语言一样  同步代码
    js 单线程（简单）， 性能就不好
    **异步无阻塞**，放入到event Loop 中，可以去做别的事了，高效的原因（性能很好）
- readFileSync  同步写法 缺点是性能，等
    好处是 代码的可读性好
## 代码的执行流程
- readFile  回调函数
- fs.promises then 
- async await  写法已经跟同步的写法几乎是一样了？

