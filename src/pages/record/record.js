var postsData = require('../../../data/record-data.js');
Page({
  data: {
    postId: 0,
    imageUrl: "/images/record.png",
    className: [
      "16级电子信息工程",
      "16信息工程1-4班",
      "16通信工程1-4",
      "16集成电路",
      "16应用电子"
    ],
    index: 0,
    selectedClass: 0
  },
  onLoad: function (options) {
    this.setData({
      postList: postsData.postList
    });
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value,
      selectedClass: e.detail.value
    })
  },
})
