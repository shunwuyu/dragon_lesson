// app.js
App({
  // 生命周期函数
  onLaunch() {
    // 前端的fetch
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        console.log(response);
        Object.assign(this.globalData, 
          response.data)
        console.log(this.globalData, '/////')
      }
    })
  },
  // 全局共享数据
  globalData: {
  }
})
