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
        "showUrl": 'https://wx3.sinaimg.cn/mw690/a04b2a1dgy1ga0v1omp5xj20u00u07wh.jpg'
      },
      {
        "showUrl": 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfs2benppzj30ak06on0r.jpg'
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
        'rankimg': '/images/home/square/one.png',
        // 成员名称
        'memberName': 'SNH48-孙芮'
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfnlkq1ubmj305706ydfx.jpg',
        'headcolor': '#bebebe',
        'rankimg': '/images/home/square/two.png',
        'memberName': 'SNH48-宋昕冉'
      },
      {
        'imgUrl': 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfnlkvwqk9j306y06yq2u.jpg',
        'headcolor': '#f0a639',
        'rankimg': '/images/home/square/three.png',
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
    ],
    // 创造营成员列表
    memberList: [
      {
        id: 1,
        avatar: 'https://source3.48.cn/20200408/15863425781500mG9XTK186.jpg',
        memberName: '赵粤'
      },
      {
        id: 2,
        avatar: 'https://source.48.cn/20200408/1586342581671Xuory4TXk9.jpg',
        memberName: '陈珂'
      },
      {
        id: 3,
        avatar: 'https://source3.48.cn/20200408/158634258440979A6O0894E.jpg',
        memberName: '孙珍妮'
      },
      {
        id: 4,
        avatar: 'https://source2.48.cn/20200408/15863425749964nhv7g1a87.jpg',
        memberName: '陈倩楠'
      },
      {
        id: 5,
        avatar: 'https://source3.48.cn/20200408/1586342575962BTUgw7KI3P.jpg',
        memberName: '李佳恩'
      }
    ]
  },
  // 切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab1 = e.currentTarget.dataset.idx;
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
      currentTab: app.globalData.currentTab1
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab1 = e.detail.current
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