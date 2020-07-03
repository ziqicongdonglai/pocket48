// pages/home/totalrunoff/totalrunoff.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['SNH48', 'BEJ48', 'GNZ48', 'IDOLS Ft'],
    currentTab: 0,
    teamTab: 0,
    teamList: [
      {
        id: 1,
        teamName: 'TEAM SII',
        teamColor: '#87ceeb'
      },
      {
        id: 2,
        teamName: 'TEAM NII',
        teamColor: '#ad87b8'
      },
      {
        id: 3,
        teamName: 'TEAM HII',
        teamColor: '#f39a02'
      },
      {
        id: 4,
        teamName: 'TEAM X',
        teamColor: '#a8cd25'
      }
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
  },
  // 切换bar
  navbarTap: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.topcurrentTab3 = e.currentTarget.dataset.idx;
  },
  /* 切换队伍 */
  teambarTap: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.dataset.teamidx
    })
    // 全局变量
    app.globalData.teamTab = e.currentTarget.dataset.teamidx;
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      currentTab: app.globalData.topcurrentTab3
    })
    this.setData({
      teamTab: app.globalData.teamTab
    })
  },
})