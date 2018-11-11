Page({
  data: {
    postId: 0,
    imageUrl: "/images/record.png",
    index: 0,
    currentClassName: '',
    studentList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取不含人数的当前班级名pearName
    try {
      var name = wx.getStorageSync('currentClassName')
      if (name) {
        this.setData({
          currentClassName: name
        })
        var endIndex = name.lastIndexOf('(')
        var pearName = name.slice(0, endIndex)
      } else {
        console.log('获取当前班级名失败')
      }
    } catch (e) {
      console.log('获取当前班级名失败')
    }
    // 获取本地数据，通过pearName得到当前班级的全部学生的信息
    try {
      var list = wx.getStorageSync(pearName)
      if (list) {
        this.setData({
          studentList: list
        })
      }
      console.log(this.data.studentList)
    } catch (e) {
      console.log('获取当前班级全部学生信息失败')
    }
  },
})
