#  前端存储考点

## 存在浏览器里

- localStorage    
- cookie 
    - 登录
    - 存储在浏览器的一段字符串  key=value;expires=;path=/;
        domain 会自动设置 

    - cookie 属于相应的domain 
        document.cookie 种下一个cookie domain 
        name  value domain  path expires... 蛮难搞定的  
    - CookieManage 类
        - getCookie
        - setCookie
        - removeCookie
- 日期对象
    - [object Date]
    - 日期操作 
        new Date() 
    - getTime() 格林尼治毫秒数 
    - setTime( + 1000 * 60 * 60 * 24 * 7)
    - cookie expires  面试官穷追猛打
        - 生命期（用户身份）， 到期后登出
        - 退出功能  deleteCookie("username")  -1  

- path  /  全网通用  /a/b/c
- cookie 是什么
    - 某域名，存储在浏览器空间中的一段字符串,格式为 key=value;expires=;key2=value;expires....
    - 一直都在， 除非过期

- cookie 和 localStorage 
    - cookie 是字符串，localStorage 是对象(setItem getItem)
    - cookie 空间小 存储小 关键数据  4kb 为单位 http 1.0 
        - 每次http请求都会带上 弥补http无状态
        - 因为每次http请求都会带上， 所以要克制，不然会影响http性能
    - localStorage 大一些 5M 
    - 不同的应用场景
        - cookie 存储用户身份等
        - localStorage 存储用户数据 掘金首页文章列表 离线访问 


