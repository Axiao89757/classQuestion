Page({
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
    number:"00",
    state:-1,
    grade: [
      {
        degree:"完美",
        score:"+5",
        images:"/images/first.png",
        check: 'touch5', 
        state: true,
        color: "background-color: #fff"
      },
      {
        degree: "很好",
        score: "+3",
        images: "/images/second.png",
        check: 'touch4',
        state: true,
        color: "background-color: #fff"
      },
      {
        degree: "还行",
        score: "+2",
        images: "/images/third.png",
        check: 'touch3',
        state: true,
        color: "background-color: #fff"
      },
      {
        degree: "勉强",
        score: "+1",
        images: "/images/forth.png",
        check: 'touch2',
        state: true,
        color: "background-color: #fff"
      },
      {
        degree: "不行",
        score: "+0",
        images: "/images/smile.png",
        check: 'touch1',
        state: true,
        color: "background-color: #fff"
      },
      {
        degree: "请假",
        score: "+0",
        images: "/images/leave.png",
        check: 'touchleave',
        state: true,
        color: "background-color: #fff"
      },
      {
        degree: "迟到",
        score: "-1",
        images: "/images/lated.png",
        check: 'touchlate',
        state: true,
        color: "background-color: #fff"
      },
      {
        degree: "缺席",
        score: "-3",
        images: "/images/absent.png",
        check: 'touchabsent',
        state: true,
        color: "background-color: #fff"
      },
      {
        degree: "出国",
        score: "-100",
        images: "/images/abroad.png",
        check: 'touchabroad',
        state: true,
        color: "background-color: #fff"
      },
    ]
  },

  touch5: function (e) {
    var color='grade[0].color'
    var stateb = 'grade[0].state'
    var statei = this.data.state
    if (statei==0)
    {
      if (this.data.grade[0].state) {
        this.setData({
          [color]: 'background-color: #99cc99',
          [stateb]: false,
          state:0
        })
      }
      else {
        this.setData({
          [color]: 'background-color: #fff',
          [stateb]: true,
          state:0
        })}
    }
    
    else if (statei == -1) {
      this.setData({
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 0
      })
      }

    else{

      this.setData({
          ['grade[' + statei + '].color']: 'background-color: #fff',
          ['grade[' + statei + '].state']: 'true',
          [color]: 'background-color: #99cc99',
          [stateb]: false,
          state: 0
        })
    }
  },

  touch4: function (e) {
    var color = 'grade[1].color'
    var stateb = 'grade[1].state'
    var statei = this.data.state
    if (statei == 1) {
      if (this.data.grade[1].state) {
        this.setData({
          [color]: 'background-color: #99cc99',
          [stateb]: false,
          state: 1
        })
      }
      else {
        this.setData({
          [color]: 'background-color: #fff',
          [stateb]: true,
          state: 1
        })
      }
    }

    else if (statei == -1) {
      this.setData({
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 1
      })
    }

    else {
      this.setData({
        ['grade[' + statei + '].color']: 'background-color: #fff',
        ['grade[' + statei + '].state']: 'true',
          [color]: 'background-color: #99cc99',
          [stateb]: false,
          state: 1
        })
      
    }
  },

  touch3: function (e) {
    var color = 'grade[2].color'
    var stateb = 'grade[2].state'
    var statei = this.data.state
    if (statei == 2) {
      if (this.data.grade[2].state) {
        this.setData({
          [color]: 'background-color: #99cc99',
          [stateb]: false,
          state: 2
        })
      }
      else {
        this.setData({
          [color]: 'background-color: #fff',
          [stateb]: true,
          state: 2
        })
      }
    }

    else if (statei == -1) {
      this.setData({
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 2
      })
    }

    else {

      this.setData({
        ['grade[' + statei + '].color']: 'background-color: #fff',
        ['grade[' + statei + '].state']: 'true',
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 2
      })
    }
  },

  touch2: function (e) {
    var color = 'grade[3].color'
    var stateb = 'grade[3].state'
    var statei = this.data.state
    if (statei == 3) {
      if (this.data.grade[3].state) {
        this.setData({
          [color]: 'background-color: #99cc99',
          [stateb]: false,
          state: 3
        })
      }
      else {
        this.setData({
          [color]: 'background-color: #fff',
          [stateb]: true,
          state: 3
        })
      }
    }

    else if (statei == -1) {
      this.setData({
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 3
      })
    }

    else {

      this.setData({
        ['grade[' + statei + '].color']: 'background-color: #fff',
        ['grade[' + statei + '].state']: 'true',
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 3
      })
    }
  },

  touchleave: function (e) {
    var color = 'grade[4].color'
    var stateb = 'grade[4].state'
    var statei = this.data.state
    if (statei == 4) {
      if (this.data.grade[4].state) {
        this.setData({
          [color]: 'background-color: #99cc99',
          [stateb]: false,
          state: 4
        })
      }
      else {
        this.setData({
          [color]: 'background-color: #fff',
          [stateb]: true,
          state: 4
        })
      }
    }

    else if (statei == -1) {
      this.setData({
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 4
      })
    }

    else {

      this.setData({
        ['grade[' + statei + '].color']: 'background-color: #fff',
        ['grade[' + statei + '].state']: 'true',
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 4
      })
    }
  },

  touchlate: function (e) {
    var color = 'grade[5].color'
    var stateb = 'grade[5].state'
    var statei = this.data.state
    if (statei == 5) {
      if (this.data.grade[5].state) {
        this.setData({
          [color]: 'background-color: #99cc99',
          [stateb]: false,
          state: 5
        })
      }
      else {
        this.setData({
          [color]: 'background-color: #fff',
          [stateb]: true,
          state: 5
        })
      }
    }

    else if (statei == -1) {
      this.setData({
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 5
      })
    }

    else {

      this.setData({
        ['grade[' + statei + '].color']: 'background-color: #fff',
        ['grade[' + statei + '].state']: 'true',
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 5
      })
    }
  },

  touchabsent: function (e) {
    var color = 'grade[6].color'
    var stateb = 'grade[6].state'
    var statei = this.data.state
    if (statei == 6) {
      if (this.data.grade[6].state) {
        this.setData({
          [color]: 'background-color: #99cc99',
          [stateb]: false,
          state: 6
        })
      }
      else {
        this.setData({
          [color]: 'background-color: #fff',
          [stateb]: true,
          state: 6
        })
      }
    }

    else if (statei == -1) {
      this.setData({
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 6
      })
    }

    else {

      this.setData({
        ['grade[' + statei + '].color']: 'background-color: #fff',
        ['grade[' + statei + '].state']: 'true',
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 6
      })
    }
  },

  touchabroad: function (e) {
    var color = 'grade[7].color'
    var stateb = 'grade[7].state'
    var statei = this.data.state
    if (statei == 7) {
      if (this.data.grade[7].state) {
        this.setData({
          [color]: 'background-color: #99cc99',
          [stateb]: false,
          state: 7
        })
      }
      else {
        this.setData({
          [color]: 'background-color: #fff',
          [stateb]: true,
          state: 7
        })
      }
    }

    else if (statei == -1) {
      this.setData({
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 7
      })
    }

    else {

      this.setData({
        ['grade[' + statei + '].color']: 'background-color: #fff',
        ['grade[' + statei + '].state']: 'true',
        [color]: 'background-color: #99cc99',
        [stateb]: false,
        state: 7
      })
    }
  }
})