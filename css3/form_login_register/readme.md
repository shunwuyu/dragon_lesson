# 登录注册表单

## 带来了选择登录还是注册的状态
- 相同name radio 一种状态
- label for raido #id
- css 
    input:checked form 

## html DOM 树
    - 浏览器会将 HTML 解析成一棵DOM树
    - 组成这棵树的 Node 节点
        - tag | id，class 
        - childNodes 
        - 文本结点 
    - 文本与标签都是结点Node, nodeType 不一样， 可以用于判断
        文本是3  标签结点是1

## flex 布局与定位
    - 都会触发新的bfc 
    - em 绝对定位离开了文档流
    - flex  1 分配
    - 登录与注册二字是文本节点，
    - 再次使用弹性布局完成水平垂直居中

## 能用css 做的不用JS
    - 性能更好 
    - css + html 威力也很大

## html5 表单功能增强
    - placeholder 把用户当小白（不需要用户思考），体验最好
    - require  必填
    - 手机

## 正则表达式
    - 输入的校验 ，永远不要相信用户的输入
    - test 方法 字符与正则表达式匹配
    - /  /
    - ^$ 开始结束 
    - [] 在某范围内 匹配一个字符 
        [a-zA-Z]
