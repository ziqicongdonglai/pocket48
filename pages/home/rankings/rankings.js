// pages/home/rankings/rankings.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航条文字
    navbar: ['应援值', '生日祝福', '公演MVP', '历代记'],
    currentTab: 0,
  },
  // 切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab10 = e.currentTarget.dataset.idx;
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      currentTab: app.globalData.currentTab10
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab10 = e.detail.current
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