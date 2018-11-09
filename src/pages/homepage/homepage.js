Page({

  /*当前班级的管理*/
  // ‘班级名’响应
  classManage: function() {
    this.setData({
      currentClassSettingHiddent: false
    })
  },
  // 弹窗确认响应 
  currentClassSettingConfirm: function() {
    this.setData({
      currentClassSettingHiddent: true
    })
  },
  // 删除班级
  rmClass: function () {

  },
  // 添加班级
  addClass: function () {

  },
  // 选择班级
  classSelect: function () {

  },


  /*主动回答号码获取*/
  // 弹窗取消响应
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  // 弹窗确认响应 
  confirm: function () {
    // 参数合法性判断
    if (!this.inputNumber) {
      wx.showModal({
        title: '错误',
        content: '请输入学生号码',
        showCancel: false
      })
    } else if (this.inputNumber < 0 || this.inputNumber > 92) {
      wx.showModal({
        title: '错误',
        content: '未找到该号码学生，请重新输入',
        showCancel: false
      })
      this.setData({
        hiddenmodalput: true
      })
    }
    else {
      wx.navigateTo({
        url: '/src/pages/answer/answer?studentNumber=' + this.inputNumber
      })
      this.setData({
        hiddenmodalput: true
      })
    }
    
    
  },
  // input输入响应
  bindKeyInput: function(e) {
    this.inputNumber = e.detail.value //注意这里不能用this.setData
  },
  // ‘主动回答’响应
  answer: function (e) {
    this.setData({
      hiddenmodalput: false,
    })
  },


  // ‘随机抽查’响应
  check: function (e) {
    var randomDigit = Math.floor(Math.random() * 93)
    wx.navigateTo({
      url: '/src/pages/check/check?randomDigit=' + randomDigit
    })
  },

  // ‘学生记录’响应
  record: function (e) {
    wx.navigateTo({
      url: '/src/pages/record/record'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    currentClassSettingHiddent: true, // 班级管理弹窗隐藏控制变量
    currentClassName: '请选择班级',

    hiddenmodalput: true, // 输入号码弹窗隐藏控制变量
    erroHiddenmodalput: true, // 输入号码错误弹窗隐藏控制变量

    inputNumber: '00',

    classList: [
      
    ],

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