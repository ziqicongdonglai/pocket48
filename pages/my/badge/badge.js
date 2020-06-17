// pages/my/badge/badge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // type: ['level', 'achive'],
    // 等级徽章图标列表
    levelBadgeList: [],
    // 成就徽章图标列表
    achiveBadgeList: []
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    // this.addLevelBadge(17, this.type[0], levelBadgeList);
    // this.addLevelBadge(34, this.type[1], achiveBadgeList);
    this.addLevelBadge();
    this.addAchiveBadge();
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
  // 循环给徽章列表赋值
  // addLevelBadge: function (num, type, list) {
  addLevelBadge: function () {
    let badgeList = [];
    // for (let i = 0; i < num; i++) {
    for (let i = 0; i < 17; i++) {
      let badge = {};
      badge.id = i + 1;
      // badge.icon = '/images/my/badge/badge_' + type + '_' + (i + 1) + '.png'
      badge.icon = '/images/my/badge/badge_level_' + (i + 1) + '.png';
      badgeList.push(badge);
    }
    // let getList = list;
    this.setData({
      // getList: badgeList
      levelBadgeList: badgeList
    })
  },
  addAchiveBadge: function () {
    let badgeList = [];
    // for (let i = 0; i < num; i++) {
    for (let i = 0; i < 34; i++) {
      let badge = {};
      badge.id = i + 1;
      // badge.icon = '/images/my/badge/badge_' + type + '_' + (i + 1) + '.png'
      badge.icon = '/images/my/badge/badge_achive_' + (i + 1) + '.png';
      badgeList.push(badge);
    }
    // let getList = list;
    this.setData({
      // getList: badgeList
      achiveBadgeList: badgeList
    })
  }
})