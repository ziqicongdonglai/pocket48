// pages/found/found.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    // 导航条文字
    navbar: ['最新', '精选'],
    currentTab: 0,
    // 热门话题列表
    topiclist: [
      {
        'topicTitle': '塞纳河攻略'
      },

      {
        'topicTitle': '我是新粉，求指导'
      },

      {
        'topicTitle': '创造营2020'
      }

    ],
    // 帖子列表
    postlist: [
      {
        // 粉丝头像地址
        'imgUrl': '',
        // 粉丝名字
        'fansName': '',
        // VIP标识
        'vip': '',
        // 等级数字图标
        'level': '',
        // 等级徽章
        'badgeLevel': '',
        // 成就徽章
        'badgeActive': '',
        // 帖子发布日期
        'createDate': '',
        // 帖子发布时间
        'createTime': '',
        // 帖子标题
        'postTitle': '',
        // 帖子内容
        'postContent': '',
        // 喜爱数
        'likeTimes': '',
        // 评论（条数及内容：评论人名称及评论内容 超过3条只显示最早的3条）
        // 最早的在最上面
        'comments': '',
        // 看过（次数 及 看过的人的头像 超过4个只显示4个）
        'lookTimes': ''
      }
    ]
  },
  // 切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab = e.currentTarget.dataset.idx;
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
      currentTab: app.globalData.currentTab
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab = e.detail.current
  }
})