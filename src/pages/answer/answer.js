Page({

  onLoad: function (options) {
    // 获取主页传过来的输入号码
    this.setData({
      studentNumber: options.studentNumber
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    var ct1 = wx.createCanvasContext('myCanvas')
    ct1.moveTo(0, 0)
    ct1.lineTo(1000, 0)
    ct1.setLineWidth(8)
    ct1.stroke()
    ct1.draw()

  },

  /**
   * 页面的初始数据
   */
  data: {
    studentNumber: '00',

    grade: [
      {
        degree: "完美",
        score: "+5",
        images: "/images/first.png",

        site: 0,
        flag: false,
        form: 'background-color: white'
      },
      {
        degree: "很好",
        score: "+3",
        images: "/images/second.png",

        site: 1,
        flag: false,
        form: 'background-color: white'
      },
      {
        degree: "还行",
        score: "+2",
        images: "/images/third.png",

        site: 2,
        flag: false,
        form: 'background-color: white'
      },
      {
        degree: "勉强",
        score: "+1",
        images: "/images/forth.png",

        site: 3,
        flag: false,
        form: 'background-color: white'
      },
      {
        degree: "不行",
        score: "+0",
        images: "/images/smile.png",

        site: 4,
        flag: false,
        form: 'background-color: white'
      }
    ],

    lastSite: -1,
    selectedForm: 'border-style: solid; border-width: 7rpx; border-color: black; background-color: white;',
    defaultForm: 'background-color: white;',
  },

  /**
   * 勾选函数
   */
  touchSelect: function (event) {
    var site = event.target.dataset.site // 变量准备

    if (this.data.lastSite == -1) { // 1、第一次点击需要对lastSite进行初始化，让它等于当前site
      this.setData({
        lastSite: site
      })
    }

    switch (site) { // 用switch遍历全部的情况
      case 0:
        if (site == this.data.lastSite) { // 2、先判断当前点击位置是否与上一次相同
          if (this.data.grade[site].flag) { // 2.1、相同，则判断上一次的状态是否为亮的
            this.setData({ // 2.1.1、flag为true，说明上一次为亮的，需要执行熄灭操作
              ['grade[' + site + '].form']: this.data.defaultForm,
              ['grade[' + site + '].flag']: false
            })
          }
          else {
            this.setData({ // 2.1.2、flag为false，说明上一次为暗的，需要执行点亮操作，并将flag转为false
              ['grade[' + site + '].form']: this.data.selectedForm,
              ['grade[' + site + '].flag']: true
            })
          }
        }
        else {
          this.setData({ // 2.2、不同，则需要熄灭上一个位置，然后点亮当前位置，并更改相应的flag
            ['grade[' + this.data.lastSite + '].form']: this.data.defaultForm,
            ['grade[' + this.data.lastSite + '].flag']: false,
            ['grade[' + site + '].form']: this.data.selectedForm,
            ['grade[' + site + '].flag']: true
          })
        }
        this.setData({ // 3、重置lastSite，使它指向当前位置
          lastSite: site
        })
        break;

      case 1:
        if (site == this.data.lastSite) {
          if (this.data.grade[site].flag) {
            this.setData({
              ['grade[' + site + '].form']: this.data.defaultForm,
              ['grade[' + site + '].flag']: false
            })
          }
          else {
            this.setData({
              ['grade[' + site + '].form']: this.data.selectedForm,
              ['grade[' + site + '].flag']: true
            })
          }
        }
        else {
          this.setData({
            ['grade[' + this.data.lastSite + '].form']: this.data.defaultForm,
            ['grade[' + this.data.lastSite + '].flag']: false,
            ['grade[' + site + '].form']: this.data.selectedForm,
            ['grade[' + site + '].flag']: true
          })
        }
        this.setData({
          lastSite: site
        })
        break;

      case 2:
        if (site == this.data.lastSite) {
          if (this.data.grade[site].flag) {
            this.setData({
              ['grade[' + site + '].form']: this.data.defaultForm,
              ['grade[' + site + '].flag']: false
            })
          }
          else {
            this.setData({
              ['grade[' + site + '].form']: this.data.selectedForm,
              ['grade[' + site + '].flag']: true
            })
          }
        }
        else {
          this.setData({
            ['grade[' + this.data.lastSite + '].form']: this.data.defaultForm,
            ['grade[' + this.data.lastSite + '].flag']: false,
            ['grade[' + site + '].form']: this.data.selectedForm,
            ['grade[' + site + '].flag']: true
          })
        }
        this.setData({
          lastSite: site
        })
        break;

      case 3:
        if (site == this.data.lastSite) {
          if (this.data.grade[site].flag) {
            this.setData({
              ['grade[' + site + '].form']: this.data.defaultForm,
              ['grade[' + site + '].flag']: false
            })
          }
          else {
            this.setData({
              ['grade[' + site + '].form']: this.data.selectedForm,
              ['grade[' + site + '].flag']: true
            })
          }
        }
        else {
          this.setData({
            ['grade[' + this.data.lastSite + '].form']: this.data.defaultForm,
            ['grade[' + this.data.lastSite + '].flag']: false,
            ['grade[' + site + '].form']: this.data.selectedForm,
            ['grade[' + site + '].flag']: true
          })
        }
        this.setData({
          lastSite: site
        })
        break;

      case 4:
        if (site == this.data.lastSite) {
          if (this.data.grade[site].flag) {
            this.setData({
              ['grade[' + site + '].form']: this.data.defaultForm,
              ['grade[' + site + '].flag']: false
            })
          }
          else {
            this.setData({
              ['grade[' + site + '].form']: this.data.selectedForm,
              ['grade[' + site + '].flag']: true
            })
          }
        }
        else {
          this.setData({
            ['grade[' + this.data.lastSite + '].form']: this.data.defaultForm,
            ['grade[' + this.data.lastSite + '].flag']: false,
            ['grade[' + site + '].form']: this.data.selectedForm,
            ['grade[' + site + '].flag']: true
          })
        }
        this.setData({
          lastSite: site
        })
        break;

      case 5:
        if (site == this.data.lastSite) {
          if (this.data.grade[site].flag) {
            this.setData({
              ['grade[' + site + '].form']: this.data.defaultForm,
              ['grade[' + site + '].flag']: false
            })
          }
          else {
            this.setData({
              ['grade[' + site + '].form']: this.data.selectedForm,
              ['grade[' + site + '].flag']: true
            })
          }
        }
        else {
          this.setData({
            ['grade[' + this.data.lastSite + '].form']: this.data.defaultForm,
            ['grade[' + this.data.lastSite + '].flag']: false,
            ['grade[' + site + '].form']: this.data.selectedForm,
            ['grade[' + site + '].flag']: true
          })
        }
        this.setData({
          lastSite: site
        })
        break;
    }
  }
})