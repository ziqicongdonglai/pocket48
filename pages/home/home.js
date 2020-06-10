// pages/home/home.js
// 获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    // 导航条文字
    navbar: ['广场', '创造营2020'],
    currentTab: 0,
    // 首页公演数据（6条）
    showlist: [
      {
        "showUrl": 'https://wx1.sinaimg.cn/mw690/006c5eFZgy1gf2h8bzdlxj31hc0u04qp.jpg'
      },
      {
        "showUrl": 'https://wx1.sinaimg.cn/mw690/006c5eFZgy1gf2h8bzdlxj31hc0u04qp.jpg'
      },
      {
        "showUrl": 'https://wx1.sinaimg.cn/mw690/006c5eFZgy1gf2h8bzdlxj31hc0u04qp.jpg'
      },
      {
        "showUrl": 'https://wx1.sinaimg.cn/mw690/006c5eFZgy1gf2h8bzdlxj31hc0u04qp.jpg'
      },
      {
        "showUrl": 'https://wx1.sinaimg.cn/mw690/006c5eFZgy1gf2h8bzdlxj31hc0u04qp.jpg'
      },
      {
        "showUrl": 'https://wx1.sinaimg.cn/mw690/006c5eFZgy1gf2h8bzdlxj31hc0u04qp.jpg'
      }
    ],
    // 应援榜
    rankinglist: [
      {
        'imgUrl': 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfnlk8eh56j306y06yglo.jpg',
        'headcolor': '#ffcb09',
        'rankimg': '/images/home/one.png',
        'memberName': 'SNH48-孙芮'
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfnlkq1ubmj305706ydfx.jpg',
        'headcolor': '#bebebe',
        'rankimg': '/images/home/two.png',
        'memberName': 'SNH48-宋昕冉'
      },
      {
        'imgUrl': 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfnlkvwqk9j306y06yq2u.jpg',
        'headcolor': '#f0a639',
        'rankimg': '/images/home/three.png',
        'memberName': 'SNH48-莫寒'
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