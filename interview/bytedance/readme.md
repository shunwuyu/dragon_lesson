- css 适配
    - PC lg pad 横竖屏切换 phone(小米，苹果，华为)
    - 在要适配的设备上体验一至
    - 等比例 vw/vh 相对单位
        vw 相对单位 屏幕的宽度   
        %解决不了问题 
        div
            div
                div 10% 
        px 绝对单位
    - vw有兼容性问题 怎么办？
    - rem html根元素字体大小做比例

- 移动适配就是要等比例
    - 移动适配用vw/vh 绝绝子
    - % 因为dom层级关系不好用
    - rem 兼容性更好
    - script 阻塞 在dom + css并发渲染之前设置好html fontSize 
    - 1rem = 屏幕宽度十分之一
    - 移动端(phone pad) 横竖屏切换 
 