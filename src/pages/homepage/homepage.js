Page({

  answer: function (e) {
    wx.navigateTo({
      url: '/src/pages/answer/answer'
    })
  },
  check: function (e) {
    wx.navigateTo({
      url: '/src/pages/check/check'
    })
  },
  record: function (e) {
    wx.navigateTo({
      url: '/src/pages/record/record'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    menu: [
      {
        name: '学生记录',
        iconImageSrc: '/images/record.png',
        cf: 'record'
      },
      {
        name: '主动回答',
        iconImageSrc: '/images/answer.png',
        cf: 'answer'
      },
      {
        name: '随机抽问',
        iconImageSrc: '/images/check.png',
        cf: 'check'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var ct1 = wx.createCanvasContext('myCanvas')
    ct1.moveTo(0, 0)
    ct1.lineTo(1000,0)
    ct1.setLineWidth(8)
    ct1.stroke()
    ct1.draw()

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})