// pages/juju/room/room.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 小偶像房间消息列表
    messageList: [
      {
        id: 1,
        time: '凌晨 00:06',
        messages: [
          {
            id: 1,
            contentText: '',
            contentImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gg2d621o8fj30n00pw41s.jpg'
          },
          {
            id: 2,
            contentText: '瘦了瘦了',
            contentImg: ''
          },
          {
            id: 3,
            contentText: '嘿嘿',
            contentImg: ''
          },
          {
            id: 4,
            contentText: '心疼不心疼',
            contentImg: ''
          }
        ]
      },
      {
        id: 2,
        time: '凌晨 02:03',
        messages: [
          {
            id: 1,
            contentText: '睡觉啦！！！晚安',
            contentImg: ''
          },
          {
            id: 2,
            contentText: '过节啦',
            contentImg: ''
          },
          {
            id: 3,
            contentText: '晚安',
            contentImg: ''
          }
        ]
      },
      {
        id: 3,
        time: '凌晨 02:48',
        messages: [
          {
            id: 1,
            contentText: '我太喜欢看公演了',
            contentImg: ''
          },
          {
            id: 2,
            contentText: '睡觉',
            contentImg: ''
          }
        ]
      },
      {
        id: 4,
        time: '下午 01:01',
        messages: [
          {
            id: 1,
            contentText: '我去上学校',
            contentImg: ''
          },
          {
            id: 2,
            contentText: '谁也不知道',
            contentImg: ''
          }
        ]
      },
      {
        id: 5,
        time: '下午 01:17',
        messages: [
          {
            id: 1,
            contentText: '你们过哪门子节？我有孙孙了？',
            contentImg: ''
          }
        ]
      }
    ],
    // 留言板页面

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
  // 跳转留言板页面
  toMessageBoard: function () {
    wx.navigateTo({
      url: '/pages/juju/messageboard/messageboard',
      success: function(res){
        // success
      }
    })
  }
})