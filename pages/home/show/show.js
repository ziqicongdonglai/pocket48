// pages/home/show/show.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['直播', '公演'],
    currentTab: 0,
    topnavbar: ['最新演出', '历史回放', 'MC话题'],
    topcurrentTab: 0
  },

  // 切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab8 = e.currentTarget.dataset.idx;
  },
  // 公演导航切换
  topnavbarTap: function (e) {
    this.setData({
      topcurrentTab: e.currentTarget.dataset.topidx
    })
    // 全局变量
    app.globalData.topcurrentTab3 = e.currentTarget.dataset.topidx;
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
      currentTab: app.globalData.currentTab8,
      topcurrentTab: app.globalData.topcurrentTab3
    })
  },
  swiperChange: function (e) {
    // console.log(e);
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab8 = e.detail.current
  },
  // 公演导航滑动
  topswiperChange: function (e) {
    // console.log(e);
    this.setData({
      topcurrentTab: e.detail.current
    })
    // 全局变量
    app.globalData.topcurrentTab3 = e.detail.current
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