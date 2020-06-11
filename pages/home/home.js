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
        // 头像地址
        'imgUrl': 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfnlk8eh56j306y06yglo.jpg',
        // 头像边框颜色
        'headcolor': '#ffcb09',
        // 排名图标
        'rankimg': '/images/home/one.png',
        // 成员名称
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
    ],
    // 正在直播的成员
    livinglist: [
      {
        // 头像地址
        'imgUrl': 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfnlk8eh56j306y06yglo.jpg',
        // 头像边框颜色（目前来看是一个颜色）
        // 'headcolor': '#ffcb09',
        // 成员名称
        'memberName': 'SNH48-孙芮',
        // 队名
        'team': 'SII',
        // 队色
        'teamColor': '#87ceeb',
        // 直播标题
        'liveTitle': '是我是我是我'
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfnlkq1ubmj305706ydfx.jpg',
        // 'headcolor': '#bebebe',
        'memberName': 'SNH48-宋昕冉',
        'team': 'X',
        'teamColor': '#a8cd25',
        'liveTitle': '哈'
      },
      {
        'imgUrl': 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfnlkvwqk9j306y06yq2u.jpg',
        // 'headcolor': '#f0a639',
        'memberName': 'SNH48-莫寒',
        'team': 'SII',
        'teamColor': '#87ceeb',
        'liveTitle': '(  •̆ ᵕ •̆ )◞♡ '
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gfkl3olgp6j306y06ywed.jpg',
        // 'headcolor': '#bebebe',
        'memberName': 'BEJ48-段艺璇',
        'team': 'B',
        'teamColor': '#e6356c',
        'liveTitle': '纠结发色'
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfo8wxiz8qj306y04mq2w.jpg',
        // 'headcolor': '#f0a639',
        'memberName': 'GNZ48-卢静',
        'team': 'NII',
        'teamColor': '#ffd801',
        'liveTitle': '唠唠 '
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