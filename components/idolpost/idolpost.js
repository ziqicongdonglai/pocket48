// components/idolpost/idolpost.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
// 可以用全局样式
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    // 小偶像动态 （应该是同步微博的）
    idolPostList: [
      {
        id: 1,
        headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfujv433nvj306y06y74a.jpg',
        memberName: 'BEJ48-苏杉杉',
        team: 'E',
        teamColor: '#29b8b6',
        dateTime: '2020-06-16 21:24:42',
        title: '',
        contentText: '森林外的小🦌',
        contentImg: [],
        anchor: '网页链接',
        looks: '150',
        likes: '264',
        comments: '349'
      },
      {
        id: 2,
        headImg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfuktnpz24j306y06ywek.jpg',
        memberName: 'SNH48-邵雪聪',
        team: 'SII',
        teamColor: '#87ceeb',
        dateTime: '2020-06-16 20:19:54',
        title: '',
        contentText: '笑累了，盐一盐🧂 拳击聪 🥊 半年了终于出现了',
        contentImg: [
          {
            id: 1,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005XzBb9gy3gfueap5jg6j312q1kw7wh.jpg'
          },
          {
            id: 2,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005XzBb9gy3gfueapun09j31kw11xkjl.jpg'
          }
        ],
        anchor: '网页链接',
        looks: '35',
        likes: '113',
        comments: '32'
      },
      {
        id: 3,
        // 成员头像
        headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfuectapmbj3044044745.jpg',
        // 成员名字
        memberName: 'SNH48-蒋舒婷',
        // 队伍名称
        team: 'HII',
        // 队伍颜色
        teamColor: '#f39a02',
        // 日期及时间
        dateTime: '2020-06-16 19:24:42',
        // 动态标题
        title: '',
        // 动态文字内容
        contentText: '是甜妹就来录这个视频吧[悲伤][悲伤][悲伤]',
        // 动态图片内容
        contentImg: [],
        // 链接
        anchor: '网页链接',
        // 谁看过 看过的人数
        looks: '17',
        // 喜爱数
        likes: '26',
        // 评论数
        comments: '3'
      },
      {
        id: 4,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfugnkdhwlj306y06ydfw.jpg',
        memberName: 'GNZ48-方琪',
        team: 'Z',
        teamColor: '#eb627c',
        dateTime: '2020-06-16 18:04:42',
        title: '',
        contentText: '你不是 一个人 为了番茄快振作起来',
        contentImg: [],
        anchor: '网页链接',
        looks: '19',
        likes: '16',
        comments: '46'
      },
      {
        id: 5,
        headImg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfon4yqam9j306y06ymx0.jpg',
        memberName: 'GNZ48-洪静雯',
        team: 'NIII',
        teamColor: '#ffd801',
        dateTime: '2020-06-16 17:50:11',
        title: '',
        contentText: '✨"做颗星星，有棱有角，还会发光"',
        contentImg: [
          {
            id: 1,
            imgUrl: 'https://wx3.sinaimg.cn/mw690/006qkRSogy1gfu9uy3qytj32kg3uob2d.jpg'
          },
          {
            id: 2,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/006qkRSogy1gfu9tyef0yj32kg3uo4qv.jpg'
          },
          {
            id: 3,
            imgUrl: 'https://wx3.sinaimg.cn/mw690/006qkRSogy1gfu8zq11etj31z32ftx6p.jpg'
          },
          {
            id: 4,
            imgUrl: 'https://wx4.sinaimg.cn/mw690/006qkRSogy1gfu8zlt13gj32kg3uohdw.jpg'
          },
        ],
        anchor: '',
        looks: '7',
        likes: '29',
        comments: '45'
      },
      {
        id: 6,
        headImg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfujsebqqaj306y06yq2v.jpg',
        memberName: 'GNZ48-黄楚茵',
        team: 'G',
        teamColor: '#a8cd25',
        dateTime: '2020-06-16 17:29:42',
        title: '',
        contentText: '一切过往，皆为序章，直挂云帆，乘风破浪。想站在舞台中央，期待着可以发光[心]今年也一起加油吧！[羞嗒嗒]黄楚茵',
        contentImg: [],
        anchor: '网页链接',
        looks: '5',
        likes: '12',
        comments: '25'
      },
      {
        id: 7,
        headImg: 'https://wx3.sinaimg.cn/mw690/005FbhyYly1gg0w1qsvhtj306y06idfy.jpg',
        memberName: 'SNH48-许杨玉琢',
        team: 'HII',
        teamColor: '#f39a02',
        dateTime: '2020-06-16 17:00:10',
        title: '',
        contentText: '紫色的！！！💜💜💜💜💜喜欢紫色的请举手',
        contentImg: [
          {
            id: 1,
            imgUrl: 'https://wx4.sinaimg.cn/mw690/005HOofily1gfu6ek6262j32c02c0qv6.jpg'
          },
          {
            id: 2,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005HOofily1gfu6jsw52sj31o0280npd.jpg'
          },
          {
            id: 3,
            imgUrl: 'https://wx3.sinaimg.cn/mw690/005HOofily1gfu6jkcw4uj31o0280x6q.jpg'
          },
          {
            id: 4,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005HOofily1gfu6vp89rnj30u0140qv5.jpg'
          },
          {
            id: 5,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005HOofily1gfu6ehth47j32c02c0e83.jpg'
          },
          {
            id: 6,
            imgUrl: 'https://wx4.sinaimg.cn/mw690/005HOofily1gfu801zr6nj31o0280x6q.jpg'
          },
          {
            id: 7,
            imgUrl: 'https://wx3.sinaimg.cn/mw690/005HOofily1gfu6jf1sycj31o0280b29.jpg'
          },
          {
            id: 8,
            imgUrl: 'https://wx1.sinaimg.cn/mw690/005HOofily1gfu6vmuki6j31o0280u0x.jpg'
          },
          {
            id: 9,
            imgUrl: 'https://wx4.sinaimg.cn/mw690/005HOofily1gfu6jy39glj31o0280u0x.jpg'
          },
        ],
        anchor: '',
        looks: '475',
        likes: '694',
        comments: '572'
      },
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
