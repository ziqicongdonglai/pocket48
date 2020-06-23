// pages/juju/messageboard/messageboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 房间消息列表（偶像和粉丝）
    messageList: [
      {
        id: 1,
        time: '上午 10:15',
        messages: [
          {
            id: 1,
            headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg2i7cfiroj306y06y74a.jpg',
            userName: '大吃一鲸',
            teamName: '',
            teamColor: '',
            isHomeUser: 0,
            badges: [
              {
                'vip': '',
                'level': '/images/level/contributionlist_five.png',
                'badgeLevel': '/images/juju/room/fans_badge_level_2.png',
                'badgeActive': ''
              }
            ],
            contentText: '扣扣早',
            contentImg: ''
          },
          {
            id: 2,
            headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gg2i8d0at0j306y06yq2z.jpg',
            userName: 'Gaëlle宋嘉艾',
            teamName: '',
            teamColor: '',
            isHomeUser: 0,
            badges: [
              {
                'vip': '',
                'level': '/images/level/contributionlist_four.png',
                'badgeLevel': '',
                'badgeActive': ''
              }
            ],
            contentText: '早',
            contentImg: ''
          }
        ]
      },
      {
        id: 2,
        time: '下午 01:01',
        messages: [
          {
            headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvu8nx7bj306y06yt8s.jpg',
            userName: '张笑盈',
            teamName: 'E',
            teamColor: '#29b8b6',
            isHomeUser: 1,
            badges: [
              {
                'vip': '',
                'level': '',
                'badgeLevel': '',
                'badgeActive': ''
              }
            ],
            contentText: '我去上学校',
            contentImg: ''
          },
          {
            id: 2,
            headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvu8nx7bj306y06yt8s.jpg',
            userName: '张笑盈',
            teamName: 'E',
            teamColor: '#29b8b6',
            isHomeUser: 1,
            badges: [
              {
                'vip': '',
                'level': '',
                'badgeLevel': '',
                'badgeActive': ''
              }
            ],
            contentText: '谁也不知道',
            contentImg: ''
          },
          {
            id: 3,
            headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg2i8psc3wj306y06ywef.jpg',
            userName: '莫生的🍞片儿',
            teamName: '',
            teamColor: '',
            isHomeUser: 0,
            badges: [
              {
                'vip': '',
                'level': '/images/level/contributionlist_five.png',
                'badgeLevel': '/images/found/lastest/fans_badge_level_1.png',
                'badgeActive': ''
              }
            ],
            contentText: '一起努力吧',
            contentImg: ''
          },
          {
            id: 4,
            headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg2i8psc3wj306y06ywef.jpg',
            userName: '莫生的🍞片儿',
            teamName: '',
            teamColor: '',
            isHomeUser: 0,
            badges: [
              {
                'vip': '',
                'level': '/images/level/contributionlist_five.png',
                'badgeLevel': '/images/found/lastest/fans_badge_level_1.png',
                'badgeActive': ''
              }
            ],
            contentText: '吃东西啊~',
            contentImg: ''
          },
          {
            id: 5,
            headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg2i8x8q52j306y06yglp.jpg',
            userName: '茶不思笔😘',
            teamName: '',
            teamColor: '',
            isHomeUser: 0,
            badges: [
              {
                'vip': '/images/found/find_vip.png',
                'level': '/images/level/contributionlist_eight.png',
                'badgeLevel': '/images/juju/room/fans_badge_activity_2.png',
                'badgeActive': ''
              }
            ],
            contentText: '吃了吗？',
            contentImg: ''
          }
        ]
      },
      {
        id: 4,
        time: '下午 01:06',
        messages: [
          {
            id: 1,
            headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gg2i9r3knuj306y06ymx5.jpg',
            userName: '在线找爸爸',
            teamName: '',
            teamColor: '',
            isHomeUser: 0,
            badges: [
              {
                'vip': '/images/found/find_vip.png',
                'level': '/images/level/contributionlist_six.png',
                'badgeLevel': '',
                'badgeActive': ''
              }
            ],
            contentText: '爸爸爱你，好好学习',
            contentImg: ''
          },
          {
            id: 2,
            headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg2ia21rldj306y06yq31.jpg',
            userName: 'zzj的小聚聚',
            teamName: '',
            teamColor: '',
            isHomeUser: 0,
            badges: [
              {
                'vip': '/images/found/find_vip.png',
                'level': '/images/level/contributionlist_five.png',
                'badgeLevel': '/images/found/lastest/fans_badge_level_1.png',
                'badgeActive': '/images/found/lastest/fans_badge_activity_1.png'
              }
            ],
            contentText: '爸爸爱你，加油',
            contentImg: ''
          },
          {
            id: 3,
            headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfzvu8nx7bj306y06yt8s.jpg',
            userName: '张笑盈',
            teamName: 'E',
            teamColor: '#29b8b6',
            isHomeUser: 1,
            badges: [
              {
                'vip': '',
                'level': '',
                'badgeLevel': '',
                'badgeActive': ''
              }
            ],
            contentText: '你们过哪门子节？我有孙孙了？',
            contentImg: ''
          },
          {
            id: 4,
            headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gg2ib1r9mmj306y03qq2w.jpg',
            userName: '梅洛斯小风',
            teamName: '',
            teamColor: '',
            isHomeUser: 0,
            badges: [
              {
                'vip': '/images/found/find_vip.png',
                'level': '/images/level/contributionlist_five.png',
                'badgeLevel': '/images/found/lastest/fans_badge_level_1.png',
                'badgeActive': '/images/juju/room/fans_badge_activity_4.png'
              }
            ],
            contentText: '其实你要是想过也不是不行把你当成惨爹你也能过节',
            contentImg: ''
          },
          {
            id: 5,
            headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gg2iber325j306y06y3yk.jpg',
            userName: 'DDD的zsj',
            teamName: '',
            teamColor: '',
            isHomeUser: 0,
            badges: [
              {
                'vip': '/images/found/find_vip.png',
                'level': '/images/level/contributionlist_five.png',
                'badgeLevel': '/images/found/lastest/fans_badge_level_1.png',
                'badgeActive': '/images/juju/room/fans_badge_activity_3.png'
              }
            ],
            contentText: '你有孙孙了？那我们后继有人了',
            contentImg: ''
          },
          {
            id: 6,
            headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg2i8x8q52j306y06yglp.jpg',
            userName: '茶不思笔😘',
            teamName: '',
            teamColor: '',
            isHomeUser: 0,
            badges: [
              {
                'vip': '/images/found/find_vip.png',
                'level': '/images/level/contributionlist_eight.png',
                'badgeLevel': '/images/juju/room/fans_badge_activity_2.png',
                'badgeActive': ''
              }
            ],
            contentText: '你有没有孙孙不知道，反正我孙孙是惨惨宝贝😙',
            contentImg: ''
          },
        ]
      },
    ]
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
  // 跳转房间页面
  toRoom: function () {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function (res) {
        // success
      }
    })
  }
})