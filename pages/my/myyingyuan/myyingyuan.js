// pages/my/myyingyuan/myyingyuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yingyuanList: [
      {
        id: 1,
        // 获得应援力的时间
        dateTime: '2020-06-17',
        // 获得应援力的方式
        type: '总选投票',
        // 得到多少应援力
        yingyuan: 10
      },
      {
        id: 2,
        dateTime: '2020-06-16',
        type: '点赞',
        yingyuan: 1
      },
      {
        id: 3,
        dateTime: '2020-06-15',
        type: '每日礼包',
        yingyuan: 1
      },
      {
        id: 4,
        dateTime: '2020-06-14',
        type: '每日礼包',
        yingyuan: 1
      },
      {
        id: 5,
        dateTime: '2020-06-11',
        type: '每日礼包',
        yingyuan: 1
      },
      {
        id: 6,
        dateTime: '2020-06-10',
        type: '每日礼包',
        yingyuan: 1
      },
      {
        id: 7,
        dateTime: '2020-06-09',
        type: '点赞',
        yingyuan: 1
      },
      {
        id: 8,
        dateTime: '2020-06-08',
        type: '点赞',
        yingyuan: 1
      },
      {
        id: 9,
        dateTime: '2020-06-08',
        type: '每日礼包',
        yingyuan: 1
      },
      {
        id: 10,
        dateTime: '2020-06-07',
        type: '每日礼包',
        yingyuan: 1
      },
      {
        id: 11,
        dateTime: '2020-06-06',
        type: '每日礼包',
        yingyuan: 1
      },
      {
        id: 12,
        dateTime: '2020-05-18',
        type: '观看直播',
        yingyuan: 1
      },
      {
        id: 13,
        dateTime: '2020-05-18',
        type: '每日礼包',
        yingyuan: 1
      },
      {
        id: 14,
        dateTime: '2020-05-17',
        type: '每日礼包',
        yingyuan: 1
      },
      {
        id: 15,
        dateTime: '2020-05-15',
        type: '每日礼包',
        yingyuan: 1
      },
    ]
  },
  // 取消事件 返回到上一个页面
  handleCancel: function () {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function (res) {
        // success
      }
    })
  }
})