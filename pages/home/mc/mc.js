// pages/home/mc/mc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['SNH48', 'BEJ48', 'GNZ48'],
    currentTab: 0,
    // MC队伍列表
    mcSNHList: [
      {
        id: 1,
        teamIcon: 'https://www.snh48.com/images/team_tag/s_team_s.jpg',
        teamName: 'SII',
        peopleNum: 52
      },
      {
        id: 2,
        teamIcon: 'https://www.snh48.com/images/team_tag/s_team_n.jpg',
        teamName: 'NII',
        peopleNum: 1
      },
      {
        id: 3,
        teamIcon: 'https://www.snh48.com/images/team_tag/s_team_h.jpg',
        teamName: 'HII',
        peopleNum: 13
      },
      {
        id: 4,
        teamIcon: 'https://www.snh48.com/images/team_tag/s_team_x.jpg',
        teamName: 'X',
        peopleNum: 5
      }
    ],
    mcBEJList: [
      {
        id: 1,
        teamIcon: 'https://www.snh48.com/images/team_tag/s_team_b.jpg',
        teamName: 'B',
        peopleNum: 1
      },
      {
        id: 2,
        teamIcon: 'https://www.snh48.com/images/team_tag/s_team_e.jpg',
        teamName: 'E',
        peopleNum: 0
      },
      {
        id: 3,
        teamIcon: 'https://www.snh48.com/images/team_tag/s_team_j.jpg',
        teamName: 'J',
        peopleNum: 0
      }
    ],
    mcGNZList: [
      {
        id: 1,
        teamIcon: 'https://www.snh48.com/images/team_tag/s_team_g.jpg',
        teamName: 'G',
        peopleNum: 0
      },
      {
        id: 2,
        teamIcon: 'https://www.snh48.com/images/team_tag/s_team_niii.jpg',
        teamName: 'NIII',
        peopleNum: 2
      },
      {
        id: 3,
        teamIcon: 'https://www.snh48.com/images/team_tag/s_team_z.jpg',
        teamName: 'Z',
        peopleNum: 2
      }
    ]
  },
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