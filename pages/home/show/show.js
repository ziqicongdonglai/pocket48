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
    isIcon: true,
    iconUrl: '/images/home/show/live_list_cover.png',
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
        // 1为正在直播
        livebroadcastStatus: 1,
        // 公演直播开始直播的时间
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
    ],
    // 成员直播列表 大组 直播中 重播中 再进一层 是 时间分组
    memberLiveList: [
      {
        id: 1,
        groupTitle: '直播中',
        // 1为在直播中 0为录播
        liveStatus: 1,
        timeGroup: [
          {
            id: 1,
            time: '2020-06-21',
            liveList: [
              {
                id: 1,
                liveImg: 'https://source.48.cn/20200621/159266926661269N06NCtWT.jpg',
                headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvfssuqbj306y06y0sr.jpg',
                liveType: 1,
                liveTitle: 'Hi————',
                memberName: 'SNH48-卢天惠',
                teamName: 'NII',
                teamColor: '#ad87b8'
              },
              {
                id: 2,
                liveImg: 'https://source.48.cn/20200621/15926740514413Yf3WZR7dR.jpg',
                headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfrj8u8p6xj306y06y0sp.jpg',
                liveType: 1,
                liveTitle: '开心了',
                memberName: 'BEJ48-张智杰',
                teamName: 'E',
                teamColor: '#29b8b6'
              },
              {
                id: 3,
                liveImg: 'https://source.48.cn/20200616/15923159204211Xit8OU693.jpeg',
                headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfzvgjvu1yj306y06yq2u.jpg',
                liveType: 1,
                liveTitle: '直播',
                memberName: 'BEJ48-沈小爱',
                teamName: 'B',
                teamColor: '#e6356c'
              },
              {
                id: 4,
                liveImg: 'https://source.48.cn/20200621/1592669341360jNlEPEV913.jpg',
                headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfzvgzyqi0j306y06ydfs.jpg',
                liveType: 1,
                liveTitle: '🍗',
                memberName: 'IDFT-杨宇馨',
                teamName: 'IDFT',
                teamColor: '#b4006e'
              },
              {
                id: 5,
                liveImg: 'https://source.48.cn/20200620/1592667449555axyIu4b6Ls.jpg',
                headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfzvh9cb79j308c0b4t95.jpg',
                liveType: 1,
                liveTitle: '孜孜孜',
                memberName: 'SNH48-陈雨孜',
                teamName: 'SII',
                teamColor: '#87ceeb'
              }
            ],
          },
          {
            id: 2,
            time: '2020-06-20',
            liveList: [
              {
                id: 1,
                liveImg: 'https://source.48.cn/20200620/1592658240464t6vQvnq0XK.jpg',
                headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfrja6xheij306y06yglj.jpg',
                liveType: 1,
                liveTitle: '嗨',
                memberName: 'IDFT-高雪逸',
                teamName: 'IDFT',
                teamColor: '#b4006e'
              },
              {
                id: 2,
                liveImg: 'https://source.48.cn/20200610/1591804086679Rlgx63t8L2.jpeg',
                headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvjpeukyj304m06yq2u.jpg',
                liveType: 1,
                liveTitle: '开心了',
                memberName: 'BEJ48-彭嘉敏',
                teamName: 'E',
                teamColor: '#29b8b6'
              },
              {
                id: 3,
                liveImg: 'https://source.48.cn/20200620/1592667145858vB5TVDVCjc.jpg',
                headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfzvjxhvjfj306y06y3yk.jpg',
                liveType: 0,
                liveTitle: '直播',
                memberName: 'BEJ48-胡晓慧',
                teamName: 'B',
                teamColor: '#e6356c'
              },
              {
                id: 4,
                liveImg: 'https://source.48.cn/20200620/15926683548699zOYICk8LE.jpg',
                headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfzvk6uz6dj306y06ydg4.jpg',
                liveType: 1,
                liveTitle: '聊',
                memberName: 'SNH48-王奕',
                teamName: 'HII',
                teamColor: '#f39a02'
              },
              {
                id: 5,
                liveImg: 'https://source.48.cn/20200620/1592666806921W740IdnXeK.jpg',
                headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvke9xapj306y06y3yh.jpg',
                liveType: 1,
                liveTitle: '来啦',
                memberName: 'GNZ48-陈楠茜',
                teamName: 'NIII',
                teamColor: '#ffd801'
              }
            ],
          }
        ]
      },
      {
        id: 2,
        groupTitle: '录播',
        liveStatus: 0,
        timeGroup: [
          {
            id: 1,
            time: '2020-06-20',
            liveList: [
              {
                id: 1,
                liveImg: 'https://source.48.cn/20200620/15926682182657mvU47hOk9.jpg',
                headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfrjbm485dj306y06y74b.jpg',
                liveType: 1,
                liveTitle: '🐱',
                memberName: 'SNH48-由淼',
                teamName: 'SII',
                teamColor: '#87ceeb'
              },
              {
                id: 2,
                liveImg: 'https://source.48.cn/20200620/1592664662184111F55652G.jpg',
                headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvo5shx0j306y06ymx5.jpg',
                liveType: 0,
                liveTitle: '轰轰轰轰🏍💨一起走吗',
                memberName: 'GNZ48-农燕萍',
                teamName: 'Z',
                teamColor: '#eb627c'
              },
              {
                id: 3,
                liveImg: 'https://source.48.cn/20200619/1592574167850gUCs5S42VW.jpg',
                headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfzvpbpk5kj306y06ymx4.jpg',
                liveType: 1,
                liveTitle: '来看小朋友',
                memberName: 'GNZ48-马昕玥',
                teamName: '预备生',
                teamColor: '#d4d4d4'
              },
              {
                id: 4,
                liveImg: 'https://source.48.cn/20200620/1592660265917gDflfw5391.jpg',
                headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfzvpobkzbj306y0570sq.jpg',
                liveType: 1,
                liveTitle: '画画捏🤏',
                memberName: 'BEJ48-刘闲',
                teamName: 'J',
                teamColor: '#006ab6'
              },
              {
                id: 5,
                liveImg: 'https://source.48.cn/20200619/159257971797744NJWC5Gby.jpeg',
                headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfzvpytzs2j306y06xaa3.jpgS',
                liveType: 0,
                liveTitle: '随缘',
                memberName: 'SNH48-吕一',
                teamName: 'X',
                teamColor: '#a8cd25'
              }
            ],
          },
          {
            id: 2,
            time: '2020-06-19',
            liveList: [
              {
                id: 1,
                liveImg: 'https://source.48.cn/20200524/1590329533492oVB4c9E41G.jpeg',
                headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfzvu0w1odj306y06y3yk.jpg',
                liveType: 1,
                liveTitle: '只狼一周目',
                memberName: 'SNH48-孙歆文',
                teamName: 'X',
                teamColor: '#a8cd25'
              },
              {
                id: 2,
                liveImg: 'https://source.48.cn/20200619/15925771004436XeyhC8q85.jpg',
                headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvu8nx7bj306y06yt8s.jpg',
                liveType: 0,
                liveTitle: '111',
                memberName: 'BEJ48-张笑盈',
                teamName: 'E',
                teamColor: '#29b8b6'
              },
              {
                id: 3,
                liveImg: 'https://source.48.cn/20200619/1592579333365giZ8389Cfm.jpg',
                headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvulhgtwj306y06yjro.jpg',
                liveType: 0,
                liveTitle: '上线🙋🏻‍♀️',
                memberName: 'SNH48-李玉倩',
                teamName: 'HII',
                teamColor: '#f39a02'
              },
              {
                id: 4,
                liveImg: 'https://source.48.cn/20200619/15925780613739qbqwS20BK.jpg',
                headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfzvuv91vej306y06yaa5.jpg',
                liveType: 1,
                liveTitle: '生日快乐🎂',
                memberName: 'SNH48-徐晨辰',
                teamName: 'SII',
                teamColor: '#87ceeb'
              },
              {
                id: 5,
                liveImg: 'https://source.48.cn/20200619/1592579990622302WPVhdVN.jpg',
                headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfzvvc2vl2j306y06ymx7.jpg',
                liveType: 0,
                liveTitle: '来啦听取蛙声一片',
                memberName: 'GNZ48-刘力菲',
                teamName: 'NIII',
                teamColor: '#ffd801'
              }
            ],
          }
        ]
      },
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
  },
  // 改变布局
  changeCSS: function (e) {
    console.log('被点击');
    if (this.isIcon) {
      this.setData({
        iconUrl: '/images/home/show/live_list_cover.png',
        isIcon: true
      })
    } else {
      this.setData({
        iconUrl: '/images/home/show/live_icon_cover.png',
        isIcon: false
      })
    }
  }
})