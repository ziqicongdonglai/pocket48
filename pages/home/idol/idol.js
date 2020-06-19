// pages/home/idol/idol.js
// 获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['成员', '饭圈'],
    currentTab: 0,
    elhide: false,
    // 所有成员列表
    allmemberList: [
      {
        id: 1,
        // 分组名称（队伍名称）
        groupName: '官方',
        // 是否全部关注（不过其实不应该写在这里而是判断子项的isFollow是不是都为1）
        // 1为全部关注 0为没有全部关注
        'isAllFollow': 1,
        // 队伍名称
        teamName: '',
        // 队伍颜色 队色 用来给成员头像加边框（边框的颜色）
        teamColor: '',
        // 具体的成员列表
        memberList: [
          {
            id: 1,
            // 成员头像
            headImg: 'https://tvax2.sinaimg.cn/crop.42.45.927.927.180/005XMeCEly8g7bua1m2dyj30sg0sgdhe.jpg?KID=imgbed,tva&Expires=1592540542&ssig=J8jT6objfN',
            // 成员名字
            memberName: '袋王',
            // 期数 （出道时的团名及期数）
            periods: '',
            // 是否关注
            isFollow: 1,
          },
          {
            id: 2,
            headImg: 'https://tvax1.sinaimg.cn/crop.0.0.512.512.180/a04b2a1dly8gdixjrdga4j20e80e8mxa.jpg?KID=imgbed,tva&Expires=1592539410&ssig=PKC51GpNl9',
            memberName: 'SNH48',
            periods: '',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: 'https://tvax1.sinaimg.cn/crop.0.0.996.996.180/006c99bxly8gdirldj6laj30ro0rot9n.jpg?KID=imgbed,tva&Expires=1592537772&ssig=xbAhj2UvxW',
            memberName: 'BEJ48',
            periods: '',
            isFollow: 1,
          },
          {
            id: 4,
            headImg: 'https://tvax4.sinaimg.cn/crop.0.0.751.751.180/006c5eFZly8gdi6io2gd5j30kv0kvgm0.jpg?KID=imgbed,tva&Expires=1592540476&ssig=kvIXo5yMMu',
            memberName: 'GNZ48',
            periods: '',
            isFollow: 1,
          }
        ]
      },
      {
        id: 2,
        groupName: '创造营2020',
        'isAllFollow': 1,
        teamName: '',
        teamColor: '#ffb8c8',
        memberList: [
          {
            id: 1,
            headImg: 'https://source.48.cn/20200408/1586342581671Xuory4TXk9.jpg',
            memberName: '陈珂',
            periods: 'SNH48 五期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: 'https://source2.48.cn/20200408/15863425749964nhv7g1a87.jpg',
            memberName: '陈倩楠',
            periods: 'SNH48 六期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: 'https://source1.48.cn/20200408/1586342585696ng3A8nq94W.jpg',
            memberName: '黄恩茹',
            periods: 'BEJ48 一期生',
            isFollow: 1,
          },
          {
            id: 4,
            headImg: 'https://source3.48.cn/20200408/1586342575962BTUgw7KI3P.jpg',
            memberName: '李佳恩',
            periods: 'SNH48 六期生',
            isFollow: 1,
          },
          {
            id: 5,
            headImg: 'https://source1.48.cn/20200408/1586342580896OUo3h45xPZ.jpg',
            memberName: '马玉灵',
            periods: 'SNH48 六期生',
            isFollow: 1,
          },
          {
            id: 6,
            headImg: 'https://source3.48.cn/20200408/158634258440979A6O0894E.jpg',
            memberName: '孙珍妮',
            periods: 'SNH48 六期生',
            isFollow: 1,
          },
          {
            id: 7,
            headImg: 'https://source3.48.cn/20200408/15863425781500mG9XTK186.jpg',
            memberName: '赵粤',
            periods: 'SNH48 二期生',
            isFollow: 1,
          }
        ]
      },
      {
        id: 3,
        groupName: '明星殿堂',
        'isAllFollow': 0,
        teamName: '',
        teamColor: '#000',
        memberList: [
          {
            id: 1,
            headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYly1gfxjfjmdtjj305706yaa0.jpg',
            memberName: '鞠婧祎',
            periods: 'SNH48 二期生',
            isFollow: 0,
          },
          {
            id: 2,
            headImg: '',
            memberName: '李艺彤',
            periods: 'SNH48 二期生',
            isFollow: 1,
          }
        ]
      },
      {
        id: 4,
        groupName: 'THE9',
        'isAllFollow': 0,
        teamName: 'TNE',
        teamColor: '#7766e6',
        memberList: [
          {
            id: 1,
            headImg: 'https://ww1.sinaimg.cn/bmiddle/006FQpDely1gewxgqp9hzj30u019077q.jpg',
            memberName: '许佳琪',
            periods: 'SNH48 一期生',
            isFollow: 0,
          }
        ]
      },
      {
        id: 5,
        groupName: 'TEAM SII',
        'isAllFollow': 0,
        teamName: 'SII',
        teamColor: '#87ceeb',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '陈观慧',
            periods: 'SNH48 一期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: '',
            memberName: '陈俊羽',
            periods: 'SHY48 三期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: '',
            memberName: '陈思',
            periods: 'SNH48 一期生',
            isFollow: 1,
          }
          , , , , , , , , , , , , , , , , , , , , ,
        ]
      },
      {
        id: 6,
        groupName: 'TEAM NII',
        'isAllFollow': 1,
        teamName: 'NII',
        teamColor: '#ad87b8',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '陈佳莹',
            periods: 'SNH48 二期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: '',
            memberName: '冯薪朵',
            periods: 'SHH48 二期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: '',
            memberName: '何晓玉',
            periods: 'SNH48 二期生',
            isFollow: 1,
          }
          , , , , , , , , , , , , , , , ,
        ]
      },
      {
        id: 7,
        groupName: 'TEAM HII',
        'isAllFollow': 1,
        teamName: 'HII',
        teamColor: '#f39a02',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '陈盼',
            periods: 'SNH48 九期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: '',
            memberName: '费沁源',
            periods: 'SNH48 五期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: '',
            memberName: '郭爽',
            periods: 'CKG48 三期生',
            isFollow: 1,
          }
          , , , , , , , , , , , , , , , , , ,
        ]
      },
      {
        id: 8,
        groupName: 'TEAM X',
        'isAllFollow': 1,
        teamName: 'X',
        teamColor: '#a8cd25',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '陈琳',
            periods: 'SNH48 四期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: '',
            memberName: '冯晓菲',
            periods: 'SNH48 四期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: '',
            memberName: '鲁静萍',
            periods: 'SNH48 十期生',
            isFollow: 1,
          }
          , , , , , , , , , , , , , , , , , ,
        ]
      },
      {
        id: 9,
        groupName: 'TEAM B',
        'isAllFollow': 1,
        teamName: 'B',
        teamColor: '#e6356c',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '程戈',
            periods: 'SHY 三期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: '',
            memberName: '段艺璇',
            periods: 'SNH48 五期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: '',
            memberName: '胡晓慧',
            periods: 'SNH48 五期生',
            isFollow: 1,
          }
          , , , , , , , , , , , , , , ,
        ]
      },
      {
        id: 10,
        groupName: 'TEAM E',
        'isAllFollow': 0,
        teamName: 'E',
        teamColor: '#29b8b6',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '程宇璐',
            periods: 'BEJ48 五期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: '',
            memberName: '陈亿杉',
            periods: 'BEJ 七期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: '',
            memberName: '冯思佳',
            periods: 'SNH48 六期生',
            isFollow: 1,
          }
          , , , , , , , , , , , , , , , ,
        ]
      },
      {
        id: 11,
        groupName: 'TEAM J',
        'isAllFollow': 1,
        teamName: 'J',
        teamColor: '#006ab6',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '柏欣妤',
            periods: 'CKG48 一期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: '',
            memberName: '陈雅钰',
            periods: 'BEJ48 一期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: '',
            memberName: '杜亚轩',
            periods: 'BEJ48 七期生',
            isFollow: 1,
          }
          , , , , , , , , , , , , , , , ,
        ]
      },
      {
        id: 12,
        groupName: '预备生',
        'isAllFollow': 0,
        teamName: '预备生',
        teamColor: '#d4d4d4',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '王贝妮',
            periods: 'BJE48 八期生',
            isFollow: 0,
          },
          {
            id: 2,
            headImg: '',
            memberName: '张睿怡',
            periods: 'BJE48 八期生',
            isFollow: 0,
          }
        ]
      },
      {
        id: 13,
        groupName: 'TEAM G',
        'isAllFollow': 1,
        teamName: 'G',
        teamColor: '#a8cd25',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '陈佳莹',
            periods: 'GNZ48 二期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: '',
            memberName: '符冰冰',
            periods: 'GNZ48 三期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: '',
            memberName: '高源婧',
            periods: 'SNH48 五期生',
            isFollow: 1,
          }
          , , , , , , , , , , , , , , , ,
        ]
      },
      {
        id: 14,
        groupName: 'TEAM NIII',
        'isAllFollow': 1,
        teamName: 'NIII',
        teamColor: '#ffd801',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '陈楠茜',
            periods: 'SNH48 六期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: '',
            memberName: '邓熳慧',
            periods: 'GNZ48 六期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: '',
            memberName: '洪静雯',
            periods: 'SNH48 六期生',
            isFollow: 1,
          }
          , , , , , , , , , , , ,
        ]
      },
      {
        id: 15,
        groupName: '预备生',
        'isAllFollow': 0,
        teamName: '预备生',
        teamColor: '#d4d4d4',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '石竹君',
            periods: 'GNZ48 八期生',
            isFollow: 0,
          },
          {
            id: 2,
            headImg: '',
            memberName: '杨若惜',
            periods: 'GNZ48 八期生',
            isFollow: 0,
          },
          {
            id: 3,
            headImg: '',
            memberName: '张书瑀',
            periods: 'GNZ48 八期生',
            isFollow: 0,
          }
          , , , , , , ,
        ]
      },
      {
        id: 16,
        groupName: 'IDFT',
        'isAllFollow': 0,
        teamName: 'IDFT',
        teamColor: '#b4006e',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '卞佳宁',
            periods: 'SHY48 四期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: '',
            memberName: '曾佳',
            periods: 'CKG48 一期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: '',
            memberName: '曹露丹',
            periods: 'CKG48 三期生',
            isFollow: 1,
          }
          , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
        ]
      },
      {
        id: 17,
        groupName: '海外练习生',
        'isAllFollow': 1,
        teamName: '',
        teamColor: '#7766e6',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '高崇',
            periods: 'SHY48 二期生',
            isFollow: 1,
          }
        ]
      },
      {
        id: 18,
        groupName: '暂休',
        'isAllFollow': 0,
        teamName: '',
        teamColor: '#d4d4d4',
        memberList: [
          {
            id: 1,
            headImg: '',
            memberName: '赵嘉敏',
            periods: 'SNH48 一期生',
            isFollow: 1,
          },
          {
            id: 2,
            headImg: '',
            memberName: '徐子轩',
            periods: 'SNH48 二期生',
            isFollow: 1,
          },
          {
            id: 3,
            headImg: '',
            memberName: '袁丹妮',
            periods: 'SNH48 三期生',
            isFollow: 1,
          }
          , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
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
    app.globalData.currentTab6 = e.currentTarget.dataset.idx;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    app.editTabbar();
    // that.lishHidden();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      currentTab: app.globalData.currentTab6
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab6 = e.detail.current
  },
  // 创造营导航条 切换navbar
  topnavbarTap: function (e) {
    this.setData({
      navbarcurrentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab6 = e.currentTarget.dataset.idx;
  },
  // 对超过三个的进行隐藏
  lishHidden: function (e) {
    // for (let i = 0; i < this.allmemberList.length; i++) {
    //   for (let j = 0; j < this.allmemberList[i].memberList.length; j++) {
    //     console.log(this.allmemberList[i].memberList);
    //   }
    // }
    console.log(e);
    // if (listlength > 3) {

    // }
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