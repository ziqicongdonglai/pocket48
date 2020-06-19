// pages/home/music/music.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['专辑', '单曲'],
    currentTab: 0,
  },
  // 切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab7 = e.currentTarget.dataset.idx;
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
      currentTab: app.globalData.currentTab7
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab7 = e.detail.current
  },
  // 创造营导航条 切换navbar
  topnavbarTap: function (e) {
    this.setData({
      navbarcurrentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab7 = e.currentTarget.dataset.idx;
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