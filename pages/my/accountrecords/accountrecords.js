// pages/my/accountrecords/accountrecords.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航条文字
    navbar: ['成长值', '鸡腿', '翻牌', '应援力', '丝瓜'],
    currentTab: 0,
    // 成长值列表
    experList: [
      {
        id: 1,
        experTitle: '每日礼包',
        experDate: '2020.06.15',
        experNum: '+1',
      },
      {
        id: 2,
        experTitle: '每日礼包',
        experDate: '2020.06.14',
        experNum: '+1',
      },
      {
        id: 3,
        experTitle: '每日礼包',
        experDate: '2020.06.11',
        experNum: '+1',
      },
      {
        id: 4,
        experTitle: '每日礼包',
        experDate: '2020.06.10',
        experNum: '+1',
      },
      {
        id: 5,
        experTitle: '点赞',
        experDate: '2020.06.09',
        experNum: '+1',
      },
      {
        id: 6,
        experTitle: '点赞',
        experDate: '2020.06.08',
        experNum: '+1',
      },
      {
        id: 7,
        experTitle: '每日礼包',
        experDate: '2020.06.08',
        experNum: '+1',
      },
      {
        id: 8,
        experTitle: '每日礼包',
        experDate: '2020.06.07',
        experNum: '+1',
      },
      {
        id: 9,
        experTitle: '每日礼包',
        experDate: '2020.06.06',
        experNum: '+1',
      },
      {
        id: 10,
        experTitle: '观看直播',
        experDate: '2020.05.18',
        experNum: '+1',
      },
      {
        id: 11,
        experTitle: '每日礼包',
        experDate: '2020.05.18',
        experNum: '+1',
      },
      {
        id: 12,
        experTitle: '每日礼包',
        experDate: '2020.06.17',
        experNum: '+1',
      },
      {
        id: 13,
        experTitle: '每日礼包',
        experDate: '2020.05.15',
        experNum: '+1',
      },
      {
        id: 14,
        experTitle: '观看直播',
        experDate: '2020.06.12',
        experNum: '+1',
      },
    ],
    // 鸡腿列表
    jituiList: [
      {
        id: 1,
        experTitle: '打卡',
        experDate: '2019-04-13 13:39:00',
        experNum: '+5',
      },
      {
        id: 2,
        experTitle: '打卡',
        experDate: '2019-04-11 17:47:47',
        experNum: '+5',
      },
      {
        id: 3,
        experTitle: '打卡',
        experDate: '2019-04-10 17:03:07',
        experNum: '+5',
      },
      {
        id: 4,
        experTitle: '打卡',
        experDate: '2019-04-08 10:53:37',
        experNum: '+5',
      },
      {
        id: 5,
        experTitle: '打卡',
        experDate: '2019-04-07 19:52:49',
        experNum: '+5',
      },
      {
        id: 6,
        experTitle: '打卡',
        experDate: '2019-03-29 17:52:30',
        experNum: '+5',
      },
      {
        id: 7,
        experTitle: '打卡',
        experDate: '2019-03-27 07:46:09',
        experNum: '+5',
      },
      {
        id: 8,
        experTitle: '打卡',
        experDate: '2019-03-22 22:22:02',
        experNum: '+5',
      },
      {
        id: 9,
        experTitle: '打卡',
        experDate: '2019-03-17 10:58:03',
        experNum: '+5',
      },
      {
        id: 10,
        experTitle: '打卡',
        experDate: '2019-03-16 12:26:55',
        experNum: '+5',
      },
      {
        id: 11,
        experTitle: '打卡',
        experDate: '2019-03-14 14:07:35',
        experNum: '+5',
      },
      {
        id: 12,
        experTitle: '打卡',
        experDate: '2019-03-09 22:26:19',
        experNum: '+5',
      },
      {
        id: 13,
        experTitle: '打卡',
        experDate: '2019-03-08 16:02:39',
        experNum: '+5',
      },
      {
        id: 14,
        experTitle: '打卡',
        experDate: '2019-03-07 23:02:25',
        experNum: '+5',
      },
    ]
  },
  // 切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab5 = e.currentTarget.dataset.idx;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      currentTab: app.globalData.currentTab5
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab5 = e.detail.current
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