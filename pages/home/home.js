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
    // 创造营导航条
    topnavbar: ['训练生', '应援榜', '往期榜单'],
    navbarcurrentTab: 0,
    // 首页公演数据（6条）
    showlist: [
      {
        id: 1,
        "showUrl": 'https://wx1.sinaimg.cn/mw690/006c5eFZgy1gf2h8bzdlxj31hc0u04qp.jpg'
      },
      {
        id: 2,
        "showUrl": 'https://wx3.sinaimg.cn/mw690/a04b2a1dgy1ga0v1omp5xj20u00u07wh.jpg'
      },
      {
        id: 3,
        "showUrl": 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfs2benppzj30ak06on0r.jpg'
      },
      {
        id: 4,
        "showUrl": 'https://wx1.sinaimg.cn/mw690/006c5eFZgy1gf2h8bzdlxj31hc0u04qp.jpg'
      },
      {
        id: 5,
        "showUrl": 'https://wx1.sinaimg.cn/mw690/006c5eFZgy1gf2h8bzdlxj31hc0u04qp.jpg'
      },
      {
        id: 6,
        "showUrl": 'https://wx1.sinaimg.cn/mw690/006c5eFZgy1gf2h8bzdlxj31hc0u04qp.jpg'
      }
    ],
    // 应援榜
    rankinglist: [
      {
        id: 1,
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
        id: 2,
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfnlkq1ubmj305706ydfx.jpg',
        'headcolor': '#bebebe',
        'rankimg': '/images/home/square/two.png',
        'memberName': 'SNH48-宋昕冉'
      },
      {
        id: 3,
        'imgUrl': 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfnlkvwqk9j306y06yq2u.jpg',
        'headcolor': '#f0a639',
        'rankimg': '/images/home/square/three.png',
        'memberName': 'SNH48-莫寒'
      }
    ],
    // 正在直播的成员
    livinglist: [
      {
        id: 1,
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
        id: 2,
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfnlkq1ubmj305706ydfx.jpg',
        // 'headcolor': '#bebebe',
        'memberName': 'SNH48-宋昕冉',
        'team': 'X',
        'teamColor': '#a8cd25',
        'liveTitle': '哈'
      },
      {
        id: 3,
        'imgUrl': 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfnlkvwqk9j306y06yq2u.jpg',
        // 'headcolor': '#f0a639',
        'memberName': 'SNH48-莫寒',
        'team': 'SII',
        'teamColor': '#87ceeb',
        'liveTitle': '(  •̆ ᵕ •̆ )◞♡ '
      },
      {
        id: 4,
        'imgUrl': 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gfkl3olgp6j306y06ywed.jpg',
        // 'headcolor': '#bebebe',
        'memberName': 'BEJ48-段艺璇',
        'team': 'B',
        'teamColor': '#e6356c',
        'liveTitle': '纠结发色'
      },
      {
        id: 5,
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
    ],
    // 应援榜前三
    topthreeList: [
      {
        id: 1,
        avatar: 'https://source3.48.cn/20200408/15863425781500mG9XTK186.jpg',
        topicon: 'https://h5.48.cn/2020apppage/creative/img/level/top1.png',
        memberName: '赵粤'
      },
      {
        id: 2,
        avatar: 'https://source.48.cn/20200408/1586342581671Xuory4TXk9.jpg',
        topicon: 'https://h5.48.cn/2020apppage/creative/img/level/top2.png',
        memberName: '陈珂'
      },
      {
        id: 3,
        avatar: 'https://source2.48.cn/20200408/15863425749964nhv7g1a87.jpg',
        topicon: 'https://h5.48.cn/2020apppage/creative/img/level/top3.png',
        memberName: '陈倩楠'
      },
    ],
    // 第4-35名
    memberyingyuanList: [
      {
        id: 4,
        avatar: 'https://source2.48.cn/20200408/158634258440979A6O0894E.jpg',
        memberName: '孙珍妮',
      },
      {
        id: 5,
        avatar: 'https://source1.48.cn/20200408/1586342575962BTUgw7KI3P.jpg',
        memberName: '李佳恩',
      },
      {
        id: 6,
        avatar: 'https://source3.48.cn/20200408/15863425742672YYxxAjJHU.jpg',
        memberName: '王艺瑾',
      },
      {
        id: 7,
        avatar: 'https://source3.48.cn/20200408/158634257183263A1hVOuSk.jpg',
        memberName: '希林娜依高',
      },
      {
        id: 8,
        avatar: 'https://source2.48.cn/20200408/1586342576477iAt5ot4ynq.jpg',
        memberName: '许潇晗',
      },
      {
        id: 9,
        avatar: 'https://source1.48.cn/20200408/1586342572550D55DVuB26e.jpg',
        memberName: '陈卓璇',
      },
      {
        id: 10,
        avatar: 'https://source.48.cn/20200408/158634258079119Uj6rojTC.jpg',
        memberName: '姜贞羽',
      },
      {
        id: 11,
        avatar: 'https://source2.48.cn/20200408/1586342578002qGc026Wa63.jpg',
        memberName: '刘些宁',
      },
      {
        id: 12,
        avatar: 'https://source1.48.cn/20200408/1586342580023j9qBxeNhUh.jpg',
        memberName: '张艺凡',
      },
      {
        id: 13,
        avatar: 'https://source2.48.cn/20200408/15863425756816s41N4dDLs.jpg',
        memberName: '曾雪瑶',
      },
      {
        id: 14,
        avatar: 'https://source2.48.cn/20200408/1586342576124AT528I3l3u.jpg',
        memberName: '朱主爱',
      },
      {
        id: 15,
        avatar: 'https://source1.48.cn/20200408/1586342574555V6AFLb6LWO.jpg',
        memberName: '刘念',
      },
      {
        id: 16,
        avatar: 'https://source1.48.cn/20200408/15863425838732Tr83G443d.jpg',
        memberName: '林君怡',
      },
      {
        id: 17,
        avatar: 'https://source2.48.cn/20200408/1586342579005a5raZhx0KC.jpg',
        memberName: '谢安然',
      },
      {
        id: 18,
        avatar: 'https://source1.48.cn/20200408/15863425707933I6oP7pOG4.jpg',
        memberName: '李梦琦',
      },
      {
        id: 19,
        avatar: 'https://source2.48.cn/20200408/1586342569113LBEwLg2R32.jpg',
        memberName: '刘梦',
      },
      {
        id: 20,
        avatar: 'https://source2.48.cn/20200408/1586342572737rDP2mf6dP4.jpg',
        memberName: '苏芮琪',
      },
      {
        id: 21,
        avatar: 'https://source2.48.cn/20200408/1586342579142LwPzY6lo38.jpg',
        memberName: '徐艺洋',
      },
      {
        id: 22,
        avatar: 'https://source.48.cn/20200408/158634257958783ac4580Bc.jpg',
        memberName: '郑乃馨',
      },
      {
        id: 23,
        avatar: 'https://source3.48.cn/20200408/1586342579735ht319lEa5L.jpg',
        memberName: '姚慧',
      },
      {
        id: 24,
        avatar: 'https://source.48.cn/20200408/158634258309761iWzGbkND.jpg',
        memberName: '伍雅露',
      },
      {
        id: 25,
        avatar: 'https://source2.48.cn/20200408/15863425847234DHFC29rSU.jpg',
        memberName: '张清',
      },
      {
        id: 26,
        avatar: 'https://source1.48.cn/20200408/1586342577757hfUijcv0lO.jpg',
        memberName: '华承妍',
      },
      {
        id: 27,
        avatar: 'https://source2.48.cn/20200408/158634258026243yt0e28Lb.jpg',
        memberName: '康汐',
      },
      {
        id: 28,
        avatar: 'https://source3.48.cn/20200408/1586342584272jz8b5bACWa.jpg',
        memberName: '王柯',
      },
      {
        id: 29,
        avatar: 'https://source.48.cn/20200408/15863425840012by0r2oVD0.jpg',
        memberName: '田京凡',
      },
      {
        id: 30,
        avatar: 'https://source2.48.cn/20200408/1586342570123hz7i8g819f.jpg',
        memberName: '冯琬贺',
      },
      {
        id: 31,
        avatar: 'https://source.48.cn/20200408/1586342575272K68Vm6USaD.jpg',
        memberName: '胡嘉欣',
      },
      {
        id: 32,
        avatar: 'https://source1.48.cn/20200408/1586342579456q4386Y3Lb3.jpg',
        memberName: '拉娜',
      },
      {
        id: 33,
        avatar: 'https://source3.48.cn/20200408/1586342581019Im5c7M8DrZ.jpg',
        memberName: '胡玛尔',
      },
      {
        id: 34,
        avatar: 'https://source2.48.cn/20200408/1586342571640TD2wSo8th4.jpg',
        memberName: '吉扬柳',
      },
      {
        id: 35,
        avatar: 'https://source.48.cn/20200408/1586342573067K5QasTa24X.jpg',
        memberName: '王一桥',
      },
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
      currentTab: app.globalData.currentTab1,
      topcurrentTab: app.globalData.topcurrentTab1
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab1 = e.detail.current
  },
  // 创造营导航条 切换navbar
  topnavbarTap: function (e) {
    this.setData({
      navbarcurrentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.topcurrentTab1 = e.currentTarget.dataset.idx;
  },
  //跳转MC话题
  toMC: function () {
    wx.navigateTo({
      url: '/pages/home/mc/mc',
      success: function(res){
        // success
      }
    })
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