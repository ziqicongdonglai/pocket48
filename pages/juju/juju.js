// pages/juju/juju.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    // 导航条文字
    navbar: ['房间', '动态'],
    currentTab: 0,
    // 成员房间数据列表
    roomlist: [
      {
        'roomTitle': '段艺璇',
        'updateTime': '18:52',
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gfkl3olgp6j306y06ywed.jpg',
        'memberName': 'BEJ48-段艺璇',
        'team': 'B',
        'teamColor': '#e6356c',
        'latestInf': '我去点个外卖',
        'infNumber': '19'
      },
      {
        'roomTitle': '🌍',
        'updateTime': '18:26',
        'imgUrl': 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfon4yqam9j306y06ymx0.jpg',
        'memberName': 'GNZ48-洪静雯',
        'team': 'NIII',
        'teamColor': '#ffd801',
        'latestInf': '[直播消息]',
        'infNumber': '99+'
      },
      {
        'roomTitle': '你掉了一只兔子ᕱ⑅ᕱ',
        'updateTime': '18:21',
        'imgUrl': 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfnlkvwqk9j306y06yq2u.jpg',
        'memberName': 'SNH48-莫寒',
        'team': 'SII',
        'teamColor': '#87ceeb',
        'latestInf': '一小时怎么可能吃够(๑•ω•๑)',
        'infNumber': '20'
      },
      {
        'roomTitle': '爽爽的QQ空间',
        'updateTime': '17:01',
        'imgUrl': 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfom66a8j0j306y06tjre.jpg',
        'memberName': 'SNH48-郭爽',
        'team': 'HII',
        'teamColor': '#f39a02',
        'latestInf': '[翻牌消息]',
        'infNumber': '99+'
      },
      {
        'roomTitle': '😸',
        'updateTime': '17:01',
        'imgUrl': 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfom6iwkkej306i06yq31.jpg',
        'memberName': 'SNH48-周诗雨',
        'team': 'NII',
        'teamColor': '#ad87b8',
        'latestInf': '我甚至翻了个白眼 然后他对我笑了...',
        'infNumber': '10'
      },
      {
        'roomTitle': '周日创造营',
        'updateTime': '17:01',
        'imgUrl': 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfom76z7v2j306y06ya9y.jpg',
        'memberName': '袋王',
        'team': '',
        'teamColor': '',
        'latestInf': '现在所有发the9的都要加个#the9六...',
        'infNumber': '99+'
      },
      {
        'roomTitle': '🎀🎀🎀🎀',
        'updateTime': '17:01',
        'imgUrl': 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfom5npbduj305706ydft.jpg',
        'memberName': 'BEJ48-王雨兰',
        'team': 'E',
        'teamColor': '#29b8b6',
        'latestInf': '[图片消息]',
        'infNumber': '99+'
      },
      {
        'roomTitle': 'y3⭕⭕',
        'updateTime': '16:59',
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfom7x2410j306y06ygls.jpg',
        'memberName': 'GNZ48-杨媛媛',
        'team': 'Z',
        'teamColor': '#eb627c',
        'latestInf': '然后我只能借到lss的她的度数居然...',
        'infNumber': '99+'
      },
      {
        'roomTitle': '孙芮',
        'updateTime': '16:43',
        'imgUrl': 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfnlk8eh56j306y06yglo.jpg',
        'memberName': 'SNH48-孙芮',
        'team': 'SII',
        'teamColor': '#87ceeb',
        'latestInf': '流口水',
        'infNumber': '16'
      },
      {
        'roomTitle': '宋昕冉',
        'updateTime': '01:17',
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfnlkq1ubmj305706ydfx.jpg',
        'memberName': 'SNH48-宋昕冉',
        'team': 'X',
        'teamColor': '#a8cd25',
        'latestInf': '[图片消息]',
        'infNumber': '11'
      },
    ]
  },
  // 切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab2 = e.currentTarget.dataset.idx;
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
      currentTab: app.globalData.currentTab2
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab2 = e.detail.current
  }
})