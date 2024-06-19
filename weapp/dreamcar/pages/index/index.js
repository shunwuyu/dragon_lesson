// Page 的一些js业务配置
// 小程序API , 拿到app.js 里的App对象
const app = getApp()

Page({
  // 页面的数据区
  data: {
    txt: '123',
    slides: null
  },  
  // 生命周期 加载时
  onLoad() {
    // 调用Page 上的setData 方法，设置slides 
    setTimeout(() => {
      this.setData({
        slides: app.globalData.slides
      })
    }, 1000)
    
  },
  testDrive() {
    console.log('试驾')
  },
  learnMore() {
    console.log('learnmore')
  }
})
