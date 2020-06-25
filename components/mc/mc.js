// components/mc/mc.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navbar: ['SNH48', 'BEJ48', 'GNZ48'],
    currentTab: 0,
    // MC队伍列表
    mcSNHList: [
      {
        id: 1,
        teamIcon: 'https://wx4.sinaimg.cn/mw690/005FbhyYly1gg32ij2qr2j302a01j3yb.jpg',
        teamName: 'SII',
        peopleNum: 52
      },
      {
        id: 2,
        teamIcon: 'https://wx2.sinaimg.cn/mw690/005FbhyYly1gg32hxyhk5j302a01j743.jpg',
        teamName: 'NII',
        peopleNum: 1
      },
      {
        id: 3,
        teamIcon: 'https://wx1.sinaimg.cn/mw690/005FbhyYly1gg32gxcvfrj302a01jjr8.jpg',
        teamName: 'HII',
        peopleNum: 13
      },
      {
        id: 4,
        teamIcon: 'https://wx2.sinaimg.cn/mw690/005FbhyYly1gg32iuwdejj302a01jglf.jpg',
        teamName: 'X',
        peopleNum: 5
      }
    ],
    mcBEJList: [
      {
        id: 1,
        teamIcon: 'https://wx2.sinaimg.cn/mw690/005FbhyYly1gg32g9c61aj302a01jdfn.jpg',
        teamName: 'B',
        peopleNum: 1
      },
      {
        id: 2,
        teamIcon: 'https://wx1.sinaimg.cn/mw690/005FbhyYly1gg32gj50mkj302a01jmwz.jpg',
        teamName: 'E',
        peopleNum: 0
      },
      {
        id: 3,
        teamIcon: 'https://wx2.sinaimg.cn/mw690/005FbhyYly1gg32hag08hj302a01j3yc.jpg',
        teamName: 'J',
        peopleNum: 0
      }
    ],
    mcGNZList: [
      {
        id: 1,
        teamIcon: 'https://wx1.sinaimg.cn/mw690/005FbhyYly1gg32gpyushj302a01jwea.jpg',
        teamName: 'G',
        peopleNum: 0
      },
      {
        id: 2,
        teamIcon: 'https://wx4.sinaimg.cn/mw690/005FbhyYly1gg32i4by47j302a01j0sj.jpg',
        teamName: 'NIII',
        peopleNum: 2
      },
      {
        id: 3,
        teamIcon: 'https://wx1.sinaimg.cn/mw690/005FbhyYly1gg32j4yf6lj302a01j3yb.jpg',
        teamName: 'Z',
        peopleNum: 2
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 切换bar
    navbarTap: function (e) {
      this.setData({
        currentTab: e.currentTarget.dataset.idx
      })
      // 全局变量
      app.globalData.topcurrentTab2 = e.currentTarget.dataset.idx;
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      this.setData({
        currentTab: app.globalData.topcurrentTab2
      })
    },
  }
})
