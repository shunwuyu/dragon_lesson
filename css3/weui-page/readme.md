# 发哥的店，第一项服务高效界面开发

- stylus  css 预处理工具 
    npm i -g stylus 
    更快
    更强
    更专业
- stylus common.styl -o common.css
- stylus 让css 拥有各项编程能力
    嵌套 + 模块化的能力

- 表达能力
    - 使用弹性布局和子元素flex 比例分配实现等比例以及2倍比例
    - 使用hover 状态 修改相应li的flex : 2 
    - li上设置css transition 过渡动画
    - 使用:nth-child 设置不同元素的颜色 
    - 这是一个精典的手风琴效果，stylus 嵌套方便这个模块的样式封装，便于维护

## weui 源码分析

- outline   做到border一样的效果，但是不影响例子模型 轮廓
    不同浏览器默认的input等outline样式不一样  css reset 就要干掉它 
- -apple-system 
    苹果字体 
- -webkit-tap-highlight-color 
    webkit 浏览器内核 android  ios 用的是webkit 
    PC firefox edge 就不是webkit
    移动端按上去的高亮颜色 
- -webkit-overflow-scrolling touch 界面滑动更贴合手势