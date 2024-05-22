## Key 安全问题
- 如何妥善处理api-key?

- env
    环境变量对象，包含着所有的环境变量，
    dotenv().config() 会读取根目录下.env  key=val 
    添加到env 中 代码中读取到env 对象
    process.env 进程(董事长)对象  进程是分配资源的最小单元
    线程（CEO）？ 是进程的小弟, 执行的最小单元 
    process 在node 中是全局对象， 代表进程
    操作系统 （window/mac/linux）<- 进程(process)<- 环境变量(env)<- project 

### prompt设计模式
    把时间花在设计prompt 上 炼丹 （好的问题比答案也许更重要）
    - 提供清晰、明确的的提示，
        - 长提示效果更好
        - 给它一些例子，few shot 展示LLM的学习能力

## Don't repeat yourself  Dry  
    - 封装