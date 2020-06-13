// pages/my/my.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
  },
  // 跳转消息盒子
  toMessage: function () {
    wx.navigateTo({
      url: '/pages/my/message/message',
      success: function (res) {
        // success
      }
    })
  }
})