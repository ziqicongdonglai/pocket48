// pages/home/trip/trip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 行程列表
    tripList: [
      {
        id: 1,
        month: '一月',
        trips: [
          {
            id: 1,
            date: '11',
            activityTitle: '《十八个闪耀瞬间》剧场公演',
            tags: [
              {
                id: 1,
                tag: '广州'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: '刘倩倩生日公演'
          },
          {
            id: 2,
            date: '12',
            activityTitle: '《HAKUNA MATATA》剧场公演',
            tags: [
              {
                id: 1,
                tag: '北京'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: 'Team J剧场公演'
          },
          {
            id: 3,
            date: '12',
            activityTitle: '《羽化成蝶》剧场公演',
            tags: [
              {
                id: 1,
                tag: '北京'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: 'Team E剧场公演'
          },
          {
            id: 4,
            date: '12',
            activityTitle: '《重生计划》公演',
            tags: [
              {
                id: 1,
                tag: '上海'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: 'TEAM SII 剧场公演'
          },
          {
            id: 5,
            date: '16',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '王贝妮生日快乐'
          },
          {
            id: 6,
            date: '17',
            activityTitle: '《Hakuna Matata》剧场公演',
            tags: [
              {
                id: 1,
                tag: '北京'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: 'TeamJ剧场公演'
          },
          {
            id: 7,
            date: '18',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '江鑫生日快乐'
          },
          {
            id: 8,
            date: '18',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '唐莉佳生日快乐'
          },
          {
            id: 9,
            date: '18',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '青钰雯生日快乐'
          },
          {
            id: 10,
            date: '18',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '谢菲菲生日快乐'
          },
          {
            id: 11,
            date: '18',
            activityTitle: '《B A Fighter》两周年 剧场公演',
            tags: [
              {
                id: 1,
                tag: '北京'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: 'TeamB剧场公演'
          },
          {
            id: 12,
            date: '18',
            activityTitle: '《Fiona.N》剧场公演',
            tags: [
              {
                id: 1,
                tag: '广州'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: 'Team NIII剧场公演'
          },
          {
            id: 13,
            date: '18',
            activityTitle: '《遗忘的国度》公演',
            tags: [
              {
                id: 1,
                tag: '上海'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: 'Team X 剧场公演'
          },
          {
            id: 14,
            date: '18',
            activityTitle: '《羽化成蝶》剧场公演',
            tags: [
              {
                id: 1,
                tag: '北京'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: 'TeamE剧场公演'
          },
          {
            id: 15,
            date: '18',
            activityTitle: '《十八个闪耀瞬间》剧场公演',
            tags: [
              {
                id: 1,
                tag: '广州'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: 'Team Z 剧场公演'
          },
          {
            id: 16,
            date: '19',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '熊心瑶生日快乐'
          },
          {
            id: 17,
            date: '20',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '黄楚茵生日快乐'
          },
          {
            id: 18,
            date: '21',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '张琼予生日快乐'
          },
          {
            id: 19,
            date: '23',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '熊文婕生日快乐'
          },
          {
            id: 20,
            date: '24',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '冯薪朵生日快乐'
          },
          {
            id: 21,
            date: '25',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '柏欣妤生日快乐'
          },
          {
            id: 22,
            date: '26',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '郑丹妮生日快乐'
          },
          {
            id: 23,
            date: '27',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '王菲妍生日快乐'
          }
        ]
      },
      {
        id: 2,
        month: '二月',
        trips: [
          {
            id: 1,
            date: '02',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '罗可嘉生日快乐'
          },
          {
            id: 2,
            date: '02',
            activityTitle: '《三角函数》剧场公演',
            tags: [
              {
                id: 1,
                tag: '广州'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: 'Team Z 剧场公演'
          },
          {
            id: 3,
            date: '02',
            activityTitle: '《Victioria.G》剧场公演',
            tags: [
              {
                id: 1,
                tag: '广州'
              },
              {
                id: 2,
                tag: '购票'
              },
              {
                id: 3,
                tag: '公演'
              },
            ],
            activityExplain: 'Team G 剧场公演'
          },
          {
            id: 4,
            date: '06',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '李星羽生日快乐'
          },
          {
            id: 5,
            date: '08',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '江真仪生日快乐'
          },
          {
            id: 6,
            date: '11',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '闫明筠生日快乐'
          },
          {
            id: 7,
            date: '17',
            activityTitle: '当日寿星',
            tags: [
            ],
            activityExplain: '程宇璐生日快乐'
          }
        ]
      }
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
  }
})