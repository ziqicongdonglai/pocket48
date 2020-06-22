// pages/home/rankings/rankings.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航条文字
    navbar: ['应援值', '生日祝福', '公演MVP', '历代记'],
    currentTab: 0,
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
        rank: 1,
        isgold: 1,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfugnkdhwlj306y06ydfw.jpg',
        memberName: 'GNZ48-方琪',
        teamName: 'Z',
        teamColor: '#eb627c',
        topFansName: 'akult',
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