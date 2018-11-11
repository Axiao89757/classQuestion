Page({

  onLoad: function (options) {
    // 获取当前学生对象
    // 获取主页传过来的随机号码
    this.setData({
      number: options.randomDigit
    })
    // 获取不含人数的当前班级名pearName
    try {
      var name = wx.getStorageSync('currentClassName')
      if (name) {
        var endIndex = name.lastIndexOf('(')
        var pearName = name.slice(0, endIndex)
        this.setData({
          currentClassName: pearName
        })
      } else {
        console.log('获取当前班级名失败')
      }
    } catch (e) {
      console.log('获取当前班级名失败')
    }
    // 获取本地数据，得到当前班级的全部学生的信息
    try {
      var list = wx.getStorageSync(pearName)
      if (list) {
        this.setData({
          studentList: list,
          currentStudent: list[options.randomDigit - 1] // 创建并初始化被选中同学的对象
        })
      }
    } catch (e) {
      console.log('获取当前班级全部学生信息失败')
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
  },

  /**
   * 页面的初始数据
   */
  data: {
    number: '00',
    currentScore: null, // 当前得分
    absent: false, // 是否缺席
    beLated: false, // 是否迟到
    
    grade: [
      {
        degree:"完美",
        score:"+5",
        images:"/images/first.png", 

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
      },
      {
        degree: "请假",
        score: "+0",
        images: "/images/leave.png",

        site: 5,
        flag: false,
        form: 'background-color: white'
      },
      {
        degree: "迟到",
        score: "-1",
        images: "/images/lated.png",

        site: 6,
        flag: false,
        form: 'background-color: white'
      },
      {
        degree: "缺席",
        score: "-3",
        images: "/images/absent.png",

        site: 7,
        flag: false,
        form: 'background-color: white'
      },
      {
        degree: "出国",
        score: "-100",
        images: "/images/abroad.png",

        site: 8,
        flag: false,
        form: 'background-color: white'
      },
    ],

    // 数据准备
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
          lastSite: site,
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
          lastSite: site,
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
          lastSite: site,
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
          lastSite: site,
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
          lastSite: site,
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
          lastSite: site,
        })
        break;

      case 6:
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
          lastSite: site,
        })
        break;

      case 7:
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
          lastSite: site,
        })
        break;

      case 8:
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
  },

  /*确定提交*/
  submit: function (e) {
    // 找出被选中的评分项
    var index = -1
    for (let i = 0; i < 9; i++) {
      if (this.data.grade[i].flag) {
        index = i
        break
      }
    }
    // 根据index改变响应的学生信息
    switch (index) {
      case 0:
        this.data.currentScore = 5
        this.data.beLated = false
        this.data.absent = false
      break

      case 1:
        this.data.currentScore = 3
        this.data.beLated = false
        this.data.absent = false
      break

      case 2:
        this.data.currentScore = 2
        this.data.beLated = false
        this.data.absent = false
      break

      case 3:
        this.data.currentScore = 1
        this.data.beLated = false
        this.data.absent = false
      break

      case 4:
        this.data.currentScore = 0
        this.data.beLated = false
        this.data.absent = false
      break

      case 5:
        this.data.currentScore = 0
        this.data.beLated = false
        this.data.absent = false
      break

      case 6:
        this.data.currentScore = -1
        this.data.beLated = true
        this.data.absent = false
      break

      case 7:
        this.data.currentScore = -3
        this.data.beLated = false
        this.data.absent = true
        break
      case 8:
        this.data.currentScore = -100
        this.data.beLated = false
        this.data.absent = false
        break
    }
    // 判断是否有选择了评分，没有的话，提示还没有进行评分，数据不用更新
    if (this.data.currentScore != null) {
      this.data.currentStudent.score += this.data.currentScore // 总分更新
      if (this.data.beLated) { // 判断是否有迟到
        this.data.currentStudent.beLatedCount++
      } else if(this.data.absent) { // 判断是否有缺席
          this.data.currentStudent.absentCount++
        }
      // 替换掉班级数组中的旧的数据
      this.data.studentList.splice(this.data.number-1, 1, this.data.currentStudent)
      // 更新本地数据
      wx.setStorage({
        key: this.data.currentClassName,
        data: this.data.studentList,
      })
      // 跳转回到主界面，然后提示消息：已经评分成功
      wx.navigateTo({
        url: '/src/pages/homepage/homepage',
      })
      wx.showToast({
        title: '评分成功',
      })
    }
    else {
      wx.showModal({
        content: '还没有评分呢！',
        showCancel: false,
      })
    }
  }

})