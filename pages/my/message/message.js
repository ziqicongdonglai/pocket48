// pages/my/message/message.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航条文字
    navbar: ['评论', '消息', '@我', '通知'],
    currentTab: 0,
    // 消息列表
    messagelist: [
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfrj4tvnkcj306y06y3yk.jpg',
        'memberName': 'SNH48-冉蔚',
        'team': 'X',
        'teamColor': '#a8cd25',
        'sendTime': '昨天',
        'latestInf': '七点《遗忘的国度》见😘',
        'infNumber': 1
      },
      {
        'imgUrl': 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfrj5k70ecj306y06ydfu.jpg',
        'memberName': 'BEJ48-吕蕊',
        'team': 'B',
        'teamColor': '#e6356c',
        'sendTime': '昨天',
        'latestInf': '没说话就是在想你，说话就是忍不住了。',
        'infNumber': 1
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfrj66rzj7j306y06ydfu.jpg',
        'memberName': 'GNZ48-罗可嘉',
        'team': 'G',
        'teamColor': '#a8cd25',
        'sendTime': '昨天',
        'latestInf': '是谁的小口袋还没来跟可嘉聊天👀',
        'infNumber': 2
      },
      {
        'imgUrl': 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfrj6vlzdmj306y06yq2x.jpg',
        'memberName': 'GNZ48-吴羽霏',
        'team': 'NIII',
        'teamColor': '#ffd801',
        'sendTime': '前天',
        'latestInf': '虽然知道你一天要收到很多xox的信息...',
        'infNumber': 1
      },
      {
        'imgUrl': 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfom6iwkkej306i06yq31.jpg',
        'memberName': 'SNH48-周诗雨',
        'team': 'NII',
        'teamColor': '#ad87b8',
        'sendTime': '星期三',
        'latestInf': '快康康我的新微博😍',
        'infNumber': 1
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfrj7u5sipj306y06y0sq.jpg',
        'memberName': 'GNZ48-司珀琳',
        'team': 'Z',
        'teamColor': '#eb627c',
        'sendTime': '星期三',
        'latestInf': '那么我祝你...',
        'infNumber': 1
      },
      {
        'imgUrl': 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfrj8bwh4dj306y06y3yi.jpg',
        'memberName': 'GNZ48-王翠菲',
        'team': 'Z',
        'teamColor': '#eb627c',
        'sendTime': '星期日',
        'latestInf': '来了就别走',
        'infNumber': 0
      },
      {
        'imgUrl': 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfrj8u8p6xj306y06y0sp.jpg',
        'memberName': 'BEJ48-张智杰',
        'team': 'E',
        'teamColor': '#29b8b6',
        'sendTime': '2020/6/5',
        'latestInf': '等不到你...',
        'infNumber': 0
      },
      {
        'imgUrl': 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfrj99wn4xj306y06y0sv.jpg',
        'memberName': 'IDFT-高蔚然',
        'team': 'IDFT',
        'teamColor': '#b4006e',
        'sendTime': '2020/6/2',
        'latestInf': '早上好~今天也要吃好喝好！...',
        'infNumber': 0
      },
      {
        'imgUrl': 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfrj9tzdogj306y06y0so.jpg',
        'memberName': 'GNZ48-冼燊楠',
        'team': 'NIII',
        'teamColor': '#ffd801',
        'sendTime': '2020/6/1',
        'latestInf': '最后几分钟！各位小朋友六一快乐！',
        'infNumber': 0
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfrja6xheij306y06yglj.jpg',
        'memberName': 'IDFT-高雪逸',
        'team': 'IDFT',
        'teamColor': '#b4006e',
        'sendTime': '2020/6/1',
        'latestInf': '嗨~我是小高！想问问大家1.有...',
        'infNumber': 0
      },
      {
        'imgUrl': 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfrjaod81dj306y06yq2z.jpg',
        'memberName': 'BEJ48-熊鑫',
        'team': 'E',
        'teamColor': '#29b8b6',
        'sendTime': '2020/6/1',
        'latestInf': '今天都要做回小朋友嗷！！！...',
        'infNumber': 0
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfrjb6jfcaj306y06ymx9.jpg',
        'memberName': 'SNH48-赵佳蕊',
        'team': 'NII',
        'teamColor': '#ad87b8',
        'sendTime': '2020/6/1',
        'latestInf': '哇(´∇｀)今天六一唉！谁还不是... ',
        'infNumber': 0
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfrjbm485dj306y06y74b.jpg',
        'memberName': 'SNH48-由淼',
        'team': 'SII',
        'teamColor': '#87ceeb',
        'sendTime': '2020/6/1',
        'latestInf': '嘿 谢谢最后的你们...',
        'infNumber': 0
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfrjbyc5h1j305c06yq2z.jpg',
        'memberName': 'BEJ48-曲美霖',
        'team': 'B',
        'teamColor': '#e6356c',
        'sendTime': '2020/6/1',
        'latestInf': '只要心怀赤诚就永远都是值得拥...',
        'infNumber': 0
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfrjcdhoa7j306y06ymx8.jpg',
        'memberName': 'BEJ48-周湘',
        'team': 'J',
        'teamColor': '#006ab6',
        'sendTime': '2020/6/1',
        'latestInf': '好看的皮囊千篇一律，可爱的灵...',
        'infNumber': 0
      },
      {
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfrjcs0jevj306y06y0sr.jpg',
        'memberName': 'SNH48-潘瑛琪',
        'team': 'X',
        'teamColor': '#a8cd25',
        'sendTime': '2020/6/1',
        'latestInf': '六一限定超甜小可爱上线(๑╹っ╹๑)',
        'infNumber': 0
      },
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