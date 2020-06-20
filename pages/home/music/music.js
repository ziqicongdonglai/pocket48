// pages/home/music/music.js
// 获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['专辑', '单曲'],
    currentTab: 0,
    // 专辑列表
    albumList: [
      {
        id: 1,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        albumName: '《Be A Fighter》',
        singer: 'BEJ48'
      },
      {
        id: 2,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwdo0i4j30dw0dwt9t.jpg',
        albumName: '《Say No》',
        singer: 'GNZ48'
      },
      {
        id: 3,
        img: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfyjwh1tipj30dw0dw75w.jpg',
        albumName: '《百变惊叹号》',
        singer: 'BEJ48TOP16'
      },
      {
        id: 4,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwkdfb1j30qo0qo0xt.jpg',
        albumName: '那不勒斯的黎明',
        singer: 'SNH48,BEJ48,GNZ48'
      },
      {
        id: 5,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwnthnfj30co0bwjst.jpg',
        albumName: '《前行的力量》',
        singer: 'SHY48'
      },
      {
        id: 6,
        img: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfyjxh1i7gj30dw0dwaav.jpg',
        albumName: '《双面偶像》',
        singer: 'GNZ48'
      },
      {
        id: 7,
        img: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfyjxk12nxj30qo0qoabr.jpg',
        albumName: '鞠婧祎《等不到你》',
        singer: '鞠婧祎'
      },
      {
        id: 8,
        img: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfyjxn48f4j30dw0dwjsf.jpg',
        albumName: '《宣言》',
        singer: 'BEJ48 TeamB,TeamE,'
      },
      {
        id: 9,
        img: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfyjxqatp4j30qo0hsad0.jpg',
        albumName: '7SENSES《Girl Crush》',
        singer: '7SENSES,张语格,许佳琪,戴萌'
      },
      {
        id: 10,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjxtfpmhj30dw0bh3zm.jpg',
        albumName: '《BOOM!BOOM!BOOM!》',
        singer: 'GNZ48'
      },
      {
        id: 11,
        img: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfyjy72f6sj30jp0jpq5x.jpg',
        albumName: '《微笑的向日葵》',
        singer: 'BEJ48 TeamB,TeamE,'
      },
      {
        id: 12,
        img: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfyjybu056j306y06y0t2.jpg',
        albumName: '新年这一刻',
        singer: 'SNH48'
      },
      {
        id: 13,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjygqv5fj30dw0dw0td.jpg',
        albumName: '每一天',
        singer: '鞠婧祎'
      },
      {
        id: 14,
        img: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfyjykubyzj30cv0cv407.jpg',
        albumName: '公主披风',
        singer: 'BEJ48,GNZ48,SNH48'
      },
      {
        id: 15,
        img: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfyjyohloqj30dw0e4jsk.jpg',
        albumName: '浪漫关系',
        singer: 'BEJ48,GNZ48,SNH48'
      },
      {
        id: 16,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjz8nagtj30m80m8dim.jpg',
        albumName: '《你所不知道的我》',
        singer: 'GNZ48'
      },
      {
        id: 17,
        img: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfyjzcfzp7j30pw0qojwd.jpg',
        albumName: '《元气觉醒》',
        singer: 'BEJ48 TeamB,TeamE'
      },
      {
        id: 18,
        img: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfyjzfl650j30fa0fa766.jpg',
        albumName: '梦想岛',
        singer: 'SNH48'
      },
      {
        id: 19,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjzj4q6mj30cw0cwta7.jpg',
        albumName: '源动力',
        singer: 'SNH48'
      },
      {
        id: 20,
        img: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfyjzmky3oj30id0id416.jpg',
        albumName: '新年的钟声',
        singer: 'SNH48'
      },
      {
        id: 21,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyk01m05dj30qo0qodhw.jpg',
        albumName: '苦与甜',
        singer: '赵嘉敏,鞠婧祎,李艺彤'
      },
      {
        id: 22,
        img: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfyk05n969j3050050wej.jpg',
        albumName: '万圣节之夜',
        singer: 'SNH48'
      },
      {
        id: 23,
        img: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfyk09wkpnj30dw0dwmyp.jpg',
        albumName: '盛夏好声音',
        singer: 'SNH48'
      },
      {
        id: 24,
        img: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfyk0ddhwrj30dw0dwgnn.jpg',
        albumName: '雨季之后',
        singer: 'SNH48'
      },
      {
        id: 25,
        img: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfyk0gy81pj30go0gojt9.jpg',
        albumName: '青春的约定',
        singer: 'SNH48'
      }
    ],
    // 单曲列表
    singerList: [
      {
        id: 1,
        img: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfymdf9d2jj30qo0hsabg.jpg',
        singName: '哪种朋友',
        singer: '莫寒',
        likes: 2165,
        comments: 646,
        shares: 800
      },
      {
        id: 2,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: 'Spy',
        singer: 'BEJ48 TEAM B',
        likes: 371,
        comments: 34,
        shares: 28
      },
      {
        id: 3,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '一天天一点点',
        singer: 'BEJ48 TEAM B',
        likes: 130,
        comments: 1,
        shares: 8
      },
      {
        id: 4,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: 'Show',
        singer: 'BEJ48 TEAM B',
        likes: 172,
        comments: 6,
        shares: 6
      },
      {
        id: 5,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '子弹日记',
        singer: 'BEJ48 TEAM B',
        likes: 76,
        comments: 2,
        shares: 0
      },
      {
        id: 6,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '绅士风度》',
        singer: 'BEJ48 TEAM B',
        likes: 57,
        comments: 1,
        shares: 0
      },
      {
        id: 7,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '爱与前方',
        singer: 'BEJ48 TEAM B',
        likes: 64,
        comments: 6,
        shares: 5
      },
      {
        id: 8,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '前行吧！彼异界号',
        singer: 'BEJ48 TEAM B',
        likes: 50,
        comments: 5,
        shares: 2
      },
      {
        id: 9,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '虹色警戒',
        singer: 'BEJ48 TEAM B',
        likes: 60,
        comments: 1,
        shares: 0
      },
      {
        id: 10,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '笨',
        singer: 'BEJ48 TEAM B',
        likes: 177,
        comments: 14,
        shares: 9
      },
      {
        id: 11,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: 'If You',
        singer: 'BEJ48 TEAM B',
        likes: 51,
        comments: 3,
        shares: 2
      },
      {
        id: 12,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '华夏-紫禁城',
        singer: 'BEJ48 TEAM B',
        likes: 49,
        comments: 1,
        shares: 1
      },
      {
        id: 13,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '星梦奇遇记',
        singer: 'BEJ48 TEAM B',
        likes: 29,
        comments: 3,
        shares: 2
      },
      {
        id: 14,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '飞行国度',
        singer: 'BEJ48 TEAM B',
        likes: 38,
        comments: 1,
        shares: 2
      },
      {
        id: 15,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '速',
        singer: 'BEJ48 TEAM B',
        likes: 42,
        comments: 2,
        shares: 1
      },
      {
        id: 16,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: '先锋号角',
        singer: 'BEJ48 TEAM B',
        likes: 56,
        comments: 1,
        shares: 0
      },
      {
        id: 17,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwajtmij30qo0hsjsn.jpg',
        singName: 'Be a fighter',
        singer: 'BEJ48 TEAM B',
        likes: 53,
        comments: 6,
        shares: 0
      },
      {
        id: 18,
        img: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfymdiit11j30qo0hs40d.jpg',
        singName: '入梦-徐诗琪',
        singer: '徐诗琪',
        likes: 544,
        comments: 102,
        shares: 47
      },
      {
        id: 19,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfymdlfk9lj30qo0hswgp.jpg',
        singName: '被遗弃的公主-陈问言',
        singer: '陈问言',
        likes: 316,
        comments: 80,
        shares: 33
      },
      {
        id: 20,
        img: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfymdoi669j30qo0hsgmn.jpg',
        singName: '星星的眼睛-陈问言',
        singer: '陈问言',
        likes: 307,
        comments: 78,
        shares: 25
      },
      {
        id: 21,
        img: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfymdr7xcgj30qo0qon1n.jpg',
        singName: '梦开始的地方',
        singer: 'SNH48',
        likes: 471,
        comments: 81,
        shares: 45
      },
      {
        id: 22,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwdo0i4j30dw0dwt9t.jpg',
        singName: '未知方向',
        singer: '陈珂,陈雨琪,高源婧,林嘉佩,李沁洁',
        likes: 65,
        comments: 3,
        shares: 18
      },
      {
        id: 23,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwdo0i4j30dw0dwt9t.jpg',
        singName: '就是现在',
        singer: '陈珂,陈雨琪,高源婧,林嘉佩,李沁洁',
        likes: 65,
        comments: 5,
        shares: 49
      },
      {
        id: 24,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwdo0i4j30dw0dwt9t.jpg',
        singName: '蠢蠢',
        singer: '陈珂,陈雨琪,高源婧,林嘉佩,李沁洁',
        likes: 68,
        comments: 3,
        shares: 18
      },
      {
        id: 25,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwdo0i4j30dw0dwt9t.jpg',
        singName: 'I Know',
        singer: '陈珂,陈雨琪,高源婧,林嘉佩,李沁洁',
        likes: 90,
        comments: 7,
        shares: 49
      },
      {
        id: 26,
        img: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfyjwdo0i4j30dw0dwt9t.jpg',
        singName: 'Say No',
        singer: '陈珂,陈雨琪,高源婧,林嘉佩,李沁洁',
        likes: 91,
        comments: 5,
        shares: 9
      }
    ]
  },
  // 切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab7 = e.currentTarget.dataset.idx;
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
      currentTab: app.globalData.currentTab7
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab7 = e.detail.current
  },
  // 创造营导航条 切换navbar
  topnavbarTap: function (e) {
    this.setData({
      navbarcurrentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab7 = e.currentTarget.dataset.idx;
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