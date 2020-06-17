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
    ],
    // 小偶像动态 （应该是同步微博的）
    idolPostList: [
      {
        id: 1,
        headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfujv433nvj306y06y74a.jpg',
        memberName: 'BEJ48-苏杉杉',
        team: 'E',
        teamColor: '#29b8b6',
        dateTime: '2020-06-16 21:24:42',
        title: '',
        contentText: '森林外的小🦌',
        contentImg: [],
        anchor: '网页链接',
        looks: '150',
        likes: '264',
        comments: '349'
      },
      {
        id: 2,
        headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfuktnpz24j306y06ywek.jpg',
        memberName: 'SNH48-邵雪聪',
        team: 'SII',
        teamColor: '#87ceeb',
        dateTime: '2020-06-16 20:19:54',
        title: '',
        contentText: '笑累了，盐一盐🧂 拳击聪 🥊 半年了终于出现了',
        contentImg: [
          {
            id: 1,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005XzBb9gy3gfueap5jg6j312q1kw7wh.jpg'
          },
          {
            id: 2,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005XzBb9gy3gfueapun09j31kw11xkjl.jpg'
          }
        ],
        anchor: '网页链接',
        looks: '35',
        likes: '113',
        comments: '32'
      },
      {
        id: 3,
        // 成员头像
        headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfuectapmbj3044044745.jpg',
        // 成员名字
        memberName: 'SNH48-蒋舒婷',
        // 队伍名称
        team: 'HII',
        // 队伍颜色
        teamColor: '#f39a02',
        // 日期及时间
        dateTime: '2020-06-16 19:24:42',
        // 动态标题
        title: '',
        // 动态文字内容
        contentText: '是甜妹就来录这个视频吧[悲伤][悲伤][悲伤]',
        // 动态图片内容
        contentImg: [],
        // 链接
        anchor: '网页链接',
        // 谁看过 看过的人数
        looks: '17',
        // 喜爱数
        likes: '26',
        // 评论数
        comments: '3'
      },
      {
        id: 4,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfugnkdhwlj306y06ydfw.jpg',
        memberName: 'GNZ48-方琪',
        team: 'Z',
        teamColor: '#eb627c',
        dateTime: '2020-06-16 18:04:42',
        title: '',
        contentText: '你不是 一个人 为了番茄快振作起来',
        contentImg: [],
        anchor: '网页链接',
        looks: '19',
        likes: '16',
        comments: '46'
      },
      {
        id: 5,
        headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfon4yqam9j306y06ymx0.jpg',
        memberName: 'GNZ48-洪静雯',
        team: 'NIII',
        teamColor: '#ffd801',
        dateTime: '2020-06-16 17:50:11',
        title: '',
        contentText: '✨"做颗星星，有棱有角，还会发光"',
        contentImg: [
          {
            id: 1,
            imgUrl: 'https://wx3.sinaimg.cn/mw690/006qkRSogy1gfu9uy3qytj32kg3uob2d.jpg'
          },
          {
            id: 2,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/006qkRSogy1gfu9tyef0yj32kg3uo4qv.jpg'
          },
          {
            id: 3,
            imgUrl: 'https://wx3.sinaimg.cn/mw690/006qkRSogy1gfu8zq11etj31z32ftx6p.jpg'
          },
          {
            id: 4,
            imgUrl: 'https://wx4.sinaimg.cn/mw690/006qkRSogy1gfu8zlt13gj32kg3uohdw.jpg'
          },
        ],
        anchor: '',
        looks: '7',
        likes: '29',
        comments: '45'
      },
      {
        id: 6,
        headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfujsebqqaj306y06yq2v.jpg',
        memberName: 'GNZ48-黄楚茵',
        team: 'G',
        teamColor: '#a8cd25',
        dateTime: '2020-06-16 17:29:42',
        title: '',
        contentText: '一切过往，皆为序章，直挂云帆，乘风破浪。想站在舞台中央，期待着可以发光[心]今年也一起加油吧！[羞嗒嗒]黄楚茵',
        contentImg: [],
        anchor: '网页链接',
        looks: '5',
        likes: '12',
        comments: '25'
      },
      {
        id: 7,
        headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfujsebqqaj306y06yq2v.jpg',
        memberName: 'SNH48-许杨玉琢',
        team: 'HII',
        teamColor: '#f39a02',
        dateTime: '2020-06-16 17:00:10',
        title: '',
        contentText: '紫色的！！！💜💜💜💜💜喜欢紫色的请举手',
        contentImg: [
          {
            id: 1,
            imgUrl: 'https://wx4.sinaimg.cn/mw690/005HOofily1gfu6ek6262j32c02c0qv6.jpg'
          },
          {
            id: 2,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005HOofily1gfu6jsw52sj31o0280npd.jpg'
          },
          {
            id: 3,
            imgUrl: 'https://wx3.sinaimg.cn/mw690/005HOofily1gfu6jkcw4uj31o0280x6q.jpg'
          },
          {
            id: 4,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005HOofily1gfu6vp89rnj30u0140qv5.jpg'
          },
          {
            id: 5,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005HOofily1gfu6ehth47j32c02c0e83.jpg'
          },
          {
            id: 6,
            imgUrl: 'https://wx4.sinaimg.cn/mw690/005HOofily1gfu801zr6nj31o0280x6q.jpg'
          },
          {
            id: 7,
            imgUrl: 'https://wx3.sinaimg.cn/mw690/005HOofily1gfu6jf1sycj31o0280b29.jpg'
          },
          {
            id: 8,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005HOofily1gfu6vmuki6j31o0280u0x.jpg'
          },
          {
            id: 9,
            imgUrl: 'https://wx4.sinaimg.cn/mw690/005HOofily1gfu6jy39glj31o0280u0x.jpg'
          },
        ],
        anchor: '',
        looks: '475',
        likes: '694',
        comments: '572'
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