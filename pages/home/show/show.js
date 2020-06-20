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
    topcurrentTab: 0,
    // 公演历史回放列表
    livebroadcastPlaybackList: [
      {
        id: 1,
        // 公演封面图片
        livebroadcastImg: 'https://source.48.cn/mediasource/live/15922764546210K72p4f8C4.jpg',
        // 公演状态
        // livebroadcastStatus: '',
        // 公演直播开始直播
        livebroadcastTime: '2020-06-19 19:15:00',
        // 公演的名字
        livebroadcastTitle: '《梦想的旗帜》夏日版云公演',
        // 公演的队伍
        teamName: 'J',
        // 队色
        teamColor: '#006ab6'
      },
      {
        id: 2,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1592210342539l774NYPS35.jpg',
        livebroadcastTime: '2020-06-19 19:15:00',
        livebroadcastTitle: '《遗忘的国度》剧场公演',
        teamName: 'X',
        teamColor: '#a8cd25'
      },
      {
        id: 3,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1592276100517Ps0OSihY7S.jpg',
        livebroadcastTime: '2020-06-18 19:15:00',
        livebroadcastTitle: '《丝芭618》直播购物节',
        teamName: '',
        teamColor: ''
      },
      {
        id: 4,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1591340782794Fu5mXm2w2E.jpg',
        livebroadcastTime: '2020-06-16 18:45:00',
        livebroadcastTitle: 'CKG48《那时花开》',
        teamName: '',
        teamColor: ''
      },
      {
        id: 5,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1591941330409WRaW0RJVB4.jpg',
        livebroadcastTime: '2020-06-14 19:45:00',
        livebroadcastTitle: '云公演专属直拍',
        teamName: '',
        teamColor: ''
      },
      {
        id: 6,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/159168315519685Cn3CMYsg.jpg',
        livebroadcastTime: '2020-06-14 19:15:00',
        livebroadcastTitle: '《暑你最闪耀》B队云公演',
        teamName: '',
        teamColor: ''
      },
      {
        id: 7,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1591687120537I76hhhOtJz.jpg',
        livebroadcastTime: '2020-06-14 18:45:00',
        livebroadcastTitle: '《时之卷》公演',
        teamName: 'NII',
        teamColor: '#ad87b8'
      },
      {
        id: 8,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1591941206171VFy2GnBfTC.jpg',
        livebroadcastTime: '2020-06-13 20:00:00',
        livebroadcastTitle: '云公演专属直拍',
        teamName: '',
        teamColor: ''
      },
      {
        id: 9,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1591692251196kenp4SYpb1.jpg',
        livebroadcastTime: '2020-06-13 19:25:00',
        livebroadcastTitle: '《夏至》线上公演 最终场',
        teamName: '',
        teamColor: ''
      },
      {
        id: 10,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/15916830491395j2G0Cqj5E.jpg',
        livebroadcastTime: '2020-06-13 19:15:00',
        livebroadcastTitle: '《暑你最闪耀》J队云公演',
        teamName: '',
        teamColor: ''
      },
    ],
    // 正在直播或即将开始的直播列表
    livebroadcastLiveList: [
      {
        id: 1,
        // 公演封面图片
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1592225830275C1FiglEW4Y.jpg',
        // 公演状态 (正在直播 或者 即将开始 或 回放)
        livebroadcastStatus: 1,
        // 公演直播开始直播
        livebroadcastTime: '2020-06-20 18:45:00',
        // 公演的名字
        livebroadcastTitle: 'CKG48《Miss Camellia 绽放》 公演首演	',
        // 公演的队伍
        teamName: '',
        // 队色
        teamColor: ''
      },
      {
        id: 2,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1592210401957MNd4205oWa.jpg',
        livebroadcastStatus: 1,
        livebroadcastTime: '2020-06-20 18:45:00',
        livebroadcastTitle: '《时之卷》 卢天惠生日公演',
        teamName: 'NII',
        teamColor: '#ad87b8'
      },
      {
        id: 3,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/15924700687431jQ4nN7DFx.jpg',
        livebroadcastStatus: 1,
        livebroadcastTime: '2020-06-20 19:00:00',
        livebroadcastTitle: '云公演专属直拍',
        teamName: '',
        teamColor: ''
      },
      {
        id: 4,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1592276672932zcTnK3cWJu.jpg',
        livebroadcastStatus: 1,
        livebroadcastTime: '2020-06-20 19:15:00',
        livebroadcastTitle: '《羽化成蝶》夏日版云公演',
        teamName: 'E',
        teamColor: '#29b8b6'
      },
      {
        id: 5,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/15922104452621manOyE92A.jpg',
        livebroadcastStatus: 0,
        livebroadcastTime: '2020-06-21 18:45:00',
        livebroadcastTitle: '《头号新闻》 剧场公演',
        teamName: 'HII',
        teamColor: '#f39a02'
      },
      {
        id: 6,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1592276856017n18JDqD8FI.jpg',
        livebroadcastStatus: 0,
        livebroadcastTime: '2020-06-21 19:15:00',
        livebroadcastTitle: '《B A Fighter》夏日版云公演	',
        teamName: 'B',
        teamColor: '#e6356c'
      },
      {
        id: 7,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1592415534491xEX9X2pJSn.jpg',
        livebroadcastStatus: 0,
        livebroadcastTime: '2020-06-23 18:45:00',
        livebroadcastTitle: 'CKG48《状况练歌房》',
        teamName: '',
        teamColor: ''
      },
      {
        id: 8,
        livebroadcastImg: 'https://source.48.cn/mediasource/live/1592415464847Ee01vJMhMs.jpg',
        livebroadcastStatus: 0,
        livebroadcastTime: '2020-06-27 18:45:00',
        livebroadcastTitle: 'CKG48《Miss Camellia 绽放》公演',
        teamName: '',
        teamColor: ''
      }
    ]
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