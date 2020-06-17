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
  // 跳转到个人信息页面
  toEditor: function () {
    wx.navigateTo({
      url: '/pages/my/personalinformation/personalinformation',
      success: function (res) {
        // success
      }
    })
  },
  // 跳转到消息盒子
  toMessage: function () {
    wx.navigateTo({
      url: '/pages/my/message/message',
      success: function (res) {
        // success
      }
    })
  },
  // 跳转到账户记录
  toAccountrecords: function () {
    wx.navigateTo({
      url: '/pages/my/accountrecords/accountrecords',
      success: function (res) {
        // success
      }
    })
  },
  // 跳转到我的特权
  toMyVip: function () {
    wx.navigateTo({
      url: '/pages/my/myvip/myvip',
      success: function (res) {
        // success
      }
    })
  },
  // 跳转到充值中心
  toVoucherCentre: function () {
    wx.navigateTo({
      url: '/pages/my/vouchercentre/vouchercentre',
      success: function (res) {
        // success
      }
    })
  },
  // 跳转到商城
  toMall: function () {
    wx.navigateTo({
      url: '/pages/my/mall/mall',
      success: function (res) {
        // success
      }
    })
  },
  // 跳转到徽章
  toBadge: function () {
    wx.navigateTo({
      url: '/pages/my/badge/badge',
      success: function (res) {
        // success
      }
    })
  }
})