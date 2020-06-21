// pages/my/mall/goodsdetail/goodsdetail.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['商品', '详情'],
    currentTab: 0,
    goodsItem: {}
  },
  // 接受商品列表页面的数据
  onLoad: function (options) {
    let goods = JSON.parse(options.goods);
    // console.log(options.goods);
    this.setData({
      goodsItem:goods
    })
    console.log(this.data.goodsItem.price);
  },
  // 切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab9 = e.currentTarget.dataset.idx;
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      currentTab: app.globalData.currentTab9
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab9 = e.detail.current
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