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

  /* 添加班级 */
  // 点击添加按钮响应
  addClass: function () {
    this.setData({
      hiddenInputClassMessages: false
    })
  },
  // 输入班级名响应
  inputClassName: function (e) {
    console.log(e.detail.value)
    this.inputTempClassName = e.detail.value
  },
  // 输入学生总数响应
  inputStudentNumber: function (e) {
    this.inputTempStudentNumber = e.detail.value
  },
  // 信息填写确认响应
  inputClassMessagesConfirm: function () {
    var name = this.inputTempClassName
    var num = this.inputTempStudentNumber
    var obj = {className: name, studentNumber: '(' + num + '人)'} //把班级名和人数做成一个对象
    // 判断输入是否合法
    if (!name) {
      wx.showModal({
        content: '还没填写名字呢！',
      })
    } else if (!num) {
      wx.showModal({
        content: '还没填写人数呢！',
      })
    } else if (num < 1) {
      wx.showModal({
        content: '不可能只有0人吧？',
      })
    } else if (num > 300) {
      wx.showModal({
        content: '技术有限，目前一个班最多只能支持300人,带来不便还请谅解！',
      })
    } else {
      this.data.classList.push(obj) // 用数组的push()函数将obj添加到对象数组中
      var update = this.data.classList // 复制一份数组，以便后面的画面渲染赋值使用
      this.setData({
        classList: update
      })
      wx.setStorage({
        key: 'classMessage',
        data: this.data.classList
      })
      this.setData({
        hiddenInputClassMessages: true
      })
    }
    
  },
  // 信息填写取消响应
  inputClassMessagesCancel: function () {
    this.setData({
      hiddenInputClassMessages: true
    })
  },

  // 选择班级
  classSelect: function (event) {
    var that = this
    var name
    var clickName = event.currentTarget.dataset.classname
    // 由event的内容找出是点击了哪一个
    for (var i = 0; i < this.data.classList.length; i++) {
      if (clickName == this.data.classList[i].className) {
        name = that.data.classList[i].className + that.data.classList[i].studentNumber
        this.setData({
          currentClassName: name,
          currentClassSettingHiddent: true
        })
        wx.setStorage({
          key: 'currentClassName',
          data: name,
        })
        return
      }
    }
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


  /*‘随机抽查’响应*/
  check: function (e) {
    var randomDigit = Math.floor(Math.random() * 93)
    wx.navigateTo({
      url: '/src/pages/check/check?randomDigit=' + randomDigit
    })
  },

  /*‘学生记录’响应*/
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

    hiddenInputClassMessages: true, // 输入班级信息弹窗控制
    inputTempClassName: '', // 输入班级名暂时量
    inputTempStudentNumber: 0, // 输入班级总人数暂时量

    hiddenmodalput: true, // 输入号码弹窗隐藏控制变量
    erroHiddenmodalput: true, // 输入号码错误弹窗隐藏控制变量

    inputNumber: '00',

    classList: [], //存放各班级信息

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
    
    //每一次加载画面时，将获取数据缓存区的数据进行画面渲染
    try {
      var value1 = wx.getStorageSync('classMessage')
      if (value1) {
        this.setData({
          classList: value1,  
        })
      }
    } catch (e) {}

    try {
      var value2 = wx.getStorageSync('currentClassName')
      if (value2) {
        console.log(value2)
        this.setData({
          currentClassName: value2,
        })
      }
    } catch (e) { console.log(value2)}
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
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