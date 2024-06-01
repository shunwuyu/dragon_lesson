# 小程序
    - 小，相对于Android/IOS Native程序
    - 不需要安装， 扫码既可以用 
    - O2O  online 2 offline 

## 技术架构
    - pages 概念
        一个个的页面
        - wxml 页面的结构 模板
            {{motto}}
            组件， swiper 
        - wxss  样式
        - js   data  数据

## 技术细节
    -  wxss 细腻， 复用
    拆分，由多个基础类组成
    section  100vh 
    hero.white 白色主题

    -  数据绑定 
    slides  数组  wx:for="{{slides}}"  wx:key="id" 唯一值
    {{item.image}} 

    - 每个页面的js ,都有一个Page函数，代表页面 {} 这个页面的配置
    Page({
        数据项
        data: {
            slides:。。。    
        }，
        method...
    })
- Vue MVVM 的世界 ，不再需要DOM编程，专注于业务
-   bindtap 
- 伪元素
    - 没有标签，但是可以显示在DOM树中
    - css 选择器  ::after  ::before 
        :: placeholder 
        :hover :focus
    - content属性一定要给
    - border  

## 小程序+AI 