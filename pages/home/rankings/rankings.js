// pages/home/rankings/rankings.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航条文字
    navbar: ['应援榜', '生日祝福', '公演MVP', '历代记'],
    currentTab: 3,
    // 弹出选择器选择的日期数组
    timeArray: [
      '06月08日-06月14日',
      '06月01日-06月07日',
      '05月25日-05月31日',
      '05月18日-05月24日',
      '05月11日-05月17日',
      '05月04日-05月10日',
      '04月27日-05月03日',
      '04月20日-04月26日',
      '04月13日-04月19日',
      '04月06日-04月12日',
    ],
    // 默认的选择时间索引
    index: 0,
    // 当周成员应援值榜列表
    weekMemberRankingsList: [
      {
        id: 1,
        // 排名
        rank: 1,
        // 第一名
        isgold: 1,
        // 头像
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfugnkdhwlj306y06ydfw.jpg',
        // 名字
        memberName: 'GNZ48-方琪',
        // 队伍
        teamName: 'Z',
        // 队色
        teamColor: '#eb627c',
        // 头号粉丝名字
        topFansName: 'akult',
        // 当周截止的应援值
        yingyuanValue: '49.93万'
      },
      {
        id: 2,
        rank: 2,
        isgold: 2,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gg0v2fyoe4j306y06yglj.jpg',
        memberName: 'SNH48-戴萌',
        teamName: 'SII',
        teamColor: '#87ceeb',
        topFansName: '半糖榛果摩卡',
        yingyuanValue: '45.54万'
      },
      {
        id: 3,
        rank: 3,
        isgold: 3,
        headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYly1gg0v2lpjavj306y06yt8q.jpg',
        memberName: 'SNH48-张语格',
        teamName: 'SII',
        teamColor: '#87ceeb',
        topFansName: 'homuuu',
        yingyuanValue: '33.19万'
      },
      {
        id: 4,
        rank: 4,
        isgold: 0,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfnlkq1ubmj305706ydfx.jpg',
        memberName: 'SNH48-宋昕冉',
        teamName: 'X',
        teamColor: '#a8cd25',
        topFansName: 'zc_sail',
        yingyuanValue: '29.65万'
      },
      {
        id: 5,
        rank: 5,
        isgold: 0,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gg0v2ranmoj306y06y748.jpg',
        memberName: 'GNZ48-唐莉佳',
        teamName: '预备生',
        teamColor: '#d4d4d4',
        topFansName: 'GNZ48-唐莉佳应援会',
        yingyuanValue: '19.28万'
      },
      {
        id: 6,
        rank: 6,
        isgold: 0,
        headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfnlkvwqk9j306y06yq2u.jpg',
        memberName: 'SNH48-莫寒',
        teamName: 'SII',
        teamColor: '#87ceeb',
        topFansName: '云之谷',
        yingyuanValue: '19.19万'
      },
      {
        id: 7,
        rank: 7,
        isgold: 0,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gg0v2why97j306y06ymx6.jpg',
        memberName: 'SNH48-孔肖吟',
        teamName: 'SII',
        teamColor: '#87ceeb',
        topFansName: '低调滴FT',
        yingyuanValue: '18.22万'
      },
      {
        id: 8,
        rank: 8,
        isgold: 0,
        headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYly1gg0v32wec9j306y06yaa3.jpg',
        memberName: 'SNH48-张昕',
        teamName: 'HII',
        teamColor: '#f39a02',
        topFansName: '阿兽不想当小朋友',
        yingyuanValue: '17.48万'
      },
      {
        id: 9,
        rank: 9,
        isgold: 0,
        headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYly1gg0v38nkl3j305706ymx0.jpg',
        memberName: 'SNH48-吴哲晗',
        teamName: 'SII',
        teamColor: '#87ceeb',
        topFansName: '别动我河内崽',
        yingyuanValue: '17.37万'
      },
      {
        id: 10,
        rank: 10,
        isgold: 0,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gg0vp4weqjj306y06ymx4.jpg',
        memberName: 'GNZ48-谢艾琳',
        teamName: 'NIII',
        teamColor: '#ffd801',
        topFansName: '超_无奈',
        yingyuanValue: '15.53万'
      },
      {
        id: 11,
        rank: 11,
        isgold: 0,
        headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYly1gg0vuhf350j306y06yaa2.jpg',
        memberName: 'GNZ48-罗寒月',
        teamName: 'G',
        teamColor: '#a8cd25',
        topFansName: '罗寒月应援会',
        yingyuanValue: '14.44万'
      },
      {
        id: 12,
        rank: 12,
        isgold: 0,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gg0w1qsvhtj306y06idfy.jpg',
        memberName: 'SNH48-许杨玉琢',
        teamName: 'HII',
        teamColor: '#f39a02',
        topFansName: 'caomuyixin',
        yingyuanValue: '12.98万'
      },
      {
        id: 13,
        rank: 13,
        isgold: 0,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gg0vuq1x4nj306y06y3ym.jpg',
        memberName: 'IDFT-雷宇霄',
        teamName: 'IDFT',
        teamColor: '#b4006e',
        topFansName: '雷宇霄要很棒',
        yingyuanValue: '12.95万'
      },
      {
        id: 14,
        rank: 14,
        isgold: 0,
        headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYly1gg0vuv047pj306y06yt8s.jpg',
        memberName: 'IDFT-谯玉珍',
        teamName: 'IDFT',
        teamColor: '#b4006e',
        topFansName: '九牛一毛',
        yingyuanValue: '11.79万'
      },
      {
        id: 15,
        rank: 15,
        isgold: 0,
        headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYly1gg0vuzv5jbj306y06ya9y.jpg',
        memberName: 'GNZ48-郑丹妮',
        teamName: 'NIII',
        teamColor: '#ffd801',
        topFansName: '道系侠士萌帅',
        yingyuanValue: '11.76万'
      },
      {
        id: 16,
        rank: 16,
        isgold: 0,
        headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYly1gg0vv5cmfcj306y06y74e.jpg',
        memberName: 'SNH48-陈思',
        teamName: 'SII',
        teamColor: '#87ceeb',
        topFansName: '匿名用户',
        yingyuanValue: '11.75万'
      },
      {
        id: 17,
        rank: 17,
        isgold: 0,
        headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYly1gg0vva75qdj306y06yjrd.jpg',
        memberName: 'SNH48-冯晓菲',
        teamName: 'X',
        teamColor: '#a8cd25',
        topFansName: '匿名用户',
        yingyuanValue: '10.24万'
      },
      {
        id: 18,
        rank: 18,
        isgold: 0,
        headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYly1gg0w8a4e63j306x06ydft.jpg',
        memberName: 'GNZ48-李姗姗',
        teamName: 'G',
        teamColor: '#a8cd25',
        topFansName: 'GNZ48-李姗姗应援会',
        yingyuanValue: '9.92万'
      },
      {
        id: 19,
        rank: 19,
        isgold: 0,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfzvuv91vej306y06yaa5.jpg',
        memberName: 'SNH48-徐晨辰',
        teamName: 'SII',
        teamColor: '#87ceeb',
        topFansName: '匿名用户',
        yingyuanValue: '9.46万'
      },
      {
        id: 20,
        rank: 20,
        isgold: 0,
        headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYly1gg0vvmfo5uj306y06yq2v.jpg',
        memberName: 'GNZ48-黄楚茵',
        teamName: 'G',
        teamColor: '#a8cd25',
        topFansName: '字母',
        yingyuanValue: '9.02万'
      }
    ],
    // 生日祝福列表（近期过生日的小偶像）
    memberBirthList: [
      {
        id: 1,
        // 头像
        headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvfssuqbj306y06y0sr.jpg',
        // 成员名字
        memberName: 'SNH48-卢天惠',
        // 队伍名字
        teamName: 'NII',
        // 队色
        teamColor: '#ad87b8',
        // 生日弹幕祝福条数
        birthNum: '47'
      },
      {
        id: 2,
        headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYly1gg11cbekr8j306y06yq30.jpg',
        memberName: 'GNZ48-刘倩倩',
        teamName: 'NIII',
        teamColor: '#ffd801',
        birthNum: '101'
      },
      {
        id: 3,
        headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYly1gg11cjmu2ej306y06yq31.jpg',
        memberName: 'SNH48-陈俊羽',
        teamName: 'SII',
        teamColor: '#87ceeb',
        birthNum: '150'
      },
      {
        id: 4,
        headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfzvgjvu1yj306y06yq2u.jpg',
        memberName: 'BEJ48-沈小爱',
        teamName: 'B',
        teamColor: '#e6356c',
        birthNum: '61'
      },
      {
        id: 5,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfom7x2410j306y06ygls.jpg',
        memberName: 'GNZ48-杨媛媛',
        teamName: 'Z',
        teamColor: '#eb627c',
        birthNum: '56'
      },
      {
        id: 6,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gg11coev69j306y05c0sp.jpg',
        memberName: 'GNZ48-张秋怡',
        teamName: 'Z',
        teamColor: '#eb627c',
        birthNum: '19'
      },
      {
        id: 7,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfo8wxiz8qj306y04mq2w.jpg',
        memberName: 'GNZ48-卢静',
        teamName: 'NIII',
        teamColor: '#ffd801',
        birthNum: '53'
      },
      {
        id: 8,
        headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfrj9tzdogj306y06y0so.jpg',
        memberName: 'GNZ48-冼燊楠',
        teamName: 'NIII',
        teamColor: '#ffd801',
        birthNum: '14'
      },
      {
        id: 9,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gg11cud0flj306y06yq2y.jpg',
        memberName: 'SNH48-王睿琦',
        teamName: 'X',
        teamColor: '#a8cd25',
        birthNum: '67'
      },
      {
        id: 10,
        headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYly1gg11d16x6gj306y06yq2y.jpg',
        memberName: 'SNH48-颜沁',
        teamName: 'NII',
        teamColor: '#ad87b8',
        birthNum: '168'
      }
    ],
    // 每场公演MVP排行
    livebroadcastMvpList: [
      {
        id: 1,
        livebroadcastTitle: '2020年06月14日 18:45 TEAM NII《时之卷》公演',
        /* 每场公演的每位小偶像的mvp排行 */
        memberMvpList: [
          {
            id: 1,
            // mvp排名
            mvpRank: 1,
            // 头像
            headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvfssuqbj306y06y0sr.jpg',
            // 成员名字
            memberName: 'SNH48-卢天惠',
            // 队伍名字
            teamName: 'NII',
            // 队色
            teamColor: '#ad87b8',
            // 得票数
            mvpVoteNum: '32.0'
          },
          {
            id: 2,
            mvpRank: 2,
            headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg17binssnj306y06ywei.jpg',
            memberName: 'SNH48-金莹玥',
            teamName: 'NII',
            teamColor: '#ad87b8',
            mvpVoteNum: '19.1'
          },
          {
            id: 3,
            mvpRank: 3,
            headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gg17bqtzolj304w06ymxa.jpg',
            memberName: 'SNH48-祁静',
            teamName: 'X',
            teamColor: '#a8cd25',
            mvpVoteNum: '12.0'
          }
        ]
      },
      {
        id: 2,
        livebroadcastTitle: '2020年02月02日 13:45 TEAM B《B A Fighter》剧场公演',
        /* 每场公演的每位小偶像的mvp排行 */
        memberMvpList: [
        ]
      },
      {
        id: 3,
        livebroadcastTitle: '2020年02月02日 18:45 TEAM J《梦想的旗帜》剧场公演',
        /* 每场公演的每位小偶像的mvp排行 */
        memberMvpList: [
        ]
      },
      {
        id: 4,
        livebroadcastTitle: '2020年05月24日 14:15 GNZ48 "GNZ48星愿树下"',
        /* 每场公演的每位小偶像的mvp排行 */
        memberMvpList: [
          {
            id: 1,
            mvpRank: 1,
            headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gg0v2ranmoj306y06y748.jpg',
            memberName: 'GNZ48-唐莉佳',
            teamName: '预备生',
            teamColor: '#d4d4d4',
            mvpVoteNum: '0.1'
          },
          {
            id: 2,
            mvpRank: 2,
            headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvo5shx0j306y06ymx5.jpg',
            memberName: 'GNZ48-农燕萍',
            teamName: 'Z',
            teamColor: '#eb627c',
            mvpVoteNum: '0.0'
          }
        ]
      },
      {
        id: 5,
        livebroadcastTitle: '2020年05月24日 15:45 GNZ48 "GNZ48星愿树下"',
        /* 每场公演的每位小偶像的mvp排行 */
        memberMvpList: [
          {
            id: 1,
            mvpRank: 1,
            headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYly1gg0vvmfo5uj306y06yq2v.jpg',
            memberName: 'GNZ48-黄楚茵',
            teamName: 'G',
            teamColor: '#a8cd25',
            mvpVoteNum: '1.2'
          },
          {
            id: 2,
            mvpRank: 2,
            headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gg17sqk5yuj306y057jre.jpg',
            memberName: 'GNZ48-符冰冰',
            teamName: 'G',
            teamColor: '#a8cd25',
            mvpVoteNum: '0.0'
          }
        ]
      },
      {
        id: 6,
        livebroadcastTitle: '2020年05月24日 19:15 GNZ48 《夏至》直播公演 第八场',
        /* 每场公演的每位小偶像的mvp排行 */
        memberMvpList: [
          {
            id: 1,
            mvpRank: 1,
            headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYly1gg0vvmfo5uj306y06yq2v.jpg',
            memberName: 'GNZ48-黄楚茵',
            teamName: 'G',
            teamColor: '#a8cd25',
            mvpVoteNum: '1.1'
          },
          {
            id: 2,
            mvpRank: 2,
            headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gg0vp4weqjj306y06ymx4.jpg',
            memberName: 'GNZ48-谢艾琳',
            teamName: 'NIII',
            teamColor: '#ffd801',
            mvpVoteNum: '1.0'
          },
          {
            id: 3,
            mvpRank: 3,
            headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg17xf1fz8j306y061t8q.jpg',
            memberName: 'GNZ48-林芝',
            teamName: 'G',
            teamColor: '#a8cd25',
            mvpVoteNum: '1.0'
          }
        ]
      },
    ],
    // 历代记列表
    importantActivitysList: [
      {
        id: 1,
        activityTime: '2019年7月27日',
        activityImg: 'https://wx3.sinaimg.cn/mw690/a04b2a1dgy1g51pi8bggcj21c30is7wi.jpg',
        activityTitle: '第六届总选'
      },
      {
        id: 2,
        activityTime: '2019年1月19日',
        activityImg: 'https://wx4.sinaimg.cn/mw690/6f4898e1gy1fz65guc6tqj20u016f7wh.jpg',
        activityTitle: '第五届金曲大赏'
      },
      {
        id: 3,
        activityTime: '2018年7月28日',
        activityImg: 'https://wx2.sinaimg.cn/mw690/006c99bxly1fwn77cwyv6j31kw0w0qv6.jpg',
        activityTitle: '第四届风尚大赏'
      },
      {
        id: 4,
        activityTime: '2018年7月28日',
        activityImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg1earooooj31hc0qptgk.jpg',
        activityTitle: '第五届总选'
      },
      {
        id: 5,
        activityTime: '2018年2月3日',
        activityImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg1eedyunyj30p00dwgnj.jpg',
        activityTitle: '第四届金曲大赏'
      },
      {
        id: 6,
        activityTime: '2017年11月18日',
        activityImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gg1eeheoh6j30q80dw7jv.jpg',
        activityTitle: '第三届风尚大赏'
      },
      {
        id: 7,
        activityTime: '2017年7月29日',
        activityImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gg1ean17v4j31c00u0q75.jpg',
        activityTitle: '第四届总选'
      },
      {
        id: 8,
        activityTime: '2017年1月7日',
        activityImg: 'https://ww3.sinaimg.cn/mw690/a04b2a1dgw1fbi5kq2k8lj21120rtgre.jpg',
        activityTitle: '第三届金曲大赏'
      },
      {
        id: 9,
        activityTime: '2016年11月5日',
        activityImg: 'https://ww1.sinaimg.cn/mw690/a04b2a1dgw1f9hsgm8yavj21e00xc18y.jpg',
        activityTitle: '第二届风尚大赏'
      },
      {
        id: 10,
        activityTime: '2016年7月30日',
        activityImg: 'https://ww2.sinaimg.cn/mw690/dab20f8dgw1f6ct2gdny7j21dn1e0e82.jpg',
        activityTitle: '第三届总选'
      },
      {
        id: 11,
        activityTime: '2015年12月26日',
        activityImg: 'https://ww2.sinaimg.cn/mw690/a04b2a1djw1eot095susqj218f0p0n0e.jpg',
        activityTitle: '第二届金曲大赏'
      },
      {
        id: 12,
        activityTime: '2015年7月25日',
        activityImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg1eaiaezcj30uu0hcmyx.jpg',
        activityTitle: '第二届总选'
      },
      {
        id: 13,
        activityTime: '2015年10月31日',
        activityImg: 'https://wx3.sinaimg.cn/mw690/a04b2a1dgy1fl1iqbl2x0j21e00uck5r.jpg',
        activityTitle: '第一届风尚大赏'
      },
      {
        id: 14,
        activityTime: '2015年1月31日',
        activityImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg1ee8s4uqj30m80etdjj.jpg',
        activityTitle: '第一届金曲大赏'
      },
      {
        id: 15,
        activityTime: '2014年7月26日',
        activityImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gg1eadlpcuj30dw0993z8.jpg',
        activityTitle: '第一届总选'
      },
    ]
  },
  // 切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab10 = e.currentTarget.dataset.idx;
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      currentTab: app.globalData.currentTab10
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab10 = e.detail.current
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

  // 选择时间
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value
    })
  }
})