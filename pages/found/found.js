// 获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    // 导航条文字
    navbar: ['最新', '精选'],
    currentTab: 0,
    // 关于百分百布局
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: [],
    // 喜爱（点赞前）
    islike: false,
    likeimg: '/images/found/dynamic_like.png',
    // 热门话题列表
    topiclist: [
      {
        'topicTitle': '塞纳河攻略'
      },

      {
        'topicTitle': '我是新粉，求指导'
      },

      {
        'topicTitle': '创造营2020'
      }
    ],
    // 帖子列表
    postlist: [
      {
        // 粉丝头像地址
        'imgUrl': '',
        // 粉丝名字
        'fansName': '',
        // VIP标识
        'vip': '',
        // 等级数字图标
        'level': '',
        // 等级徽章
        'badgeLevel': '',
        // 成就徽章
        'badgeActive': '',
        // 帖子发布日期
        'createDate': '',
        // 帖子发布时间
        'createTime': '',
        // 帖子标题
        'postTitle': '',
        // 帖子内容
        'postContent': '',
        // 喜爱数
        'likeTimes': '',
        // 评论（条数及内容：评论人名称及评论内容 超过3条只显示最早的3条）
        // 最早的在最上面
        'comments': '',
        // 看过（次数 及 看过的人的头像 超过4个只显示4个）
        'lookTimes': ''
      }
    ]
  },
  // 切换bar
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    // 全局变量
    app.globalData.currentTab3 = e.currentTarget.dataset.idx;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();

    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth
        });

        //加载首组图片
        this.loadImages();
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      currentTab: app.globalData.currentTab3
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab3 = e.detail.current
  },

  // 精选 流式布局
  onImageLoad: function (e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;         //图片原始宽度
    let oImgH = e.detail.height;        //图片原始高度
    let imgWidth = this.data.imgWidth;  //图片设置的宽度
    let scale = imgWidth / oImgW;        //比例计算
    let imgHeight = oImgH * scale;      //自适应高度

    let images = this.data.images;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id === imageId) {
        imageObj = img;
        break;
      }
    }

    imageObj.height = imgHeight;

    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    //判断当前图片添加到左列还是右列
    if (col1.length <= col2.length) {
      col1.push(imageObj);
    } else {
      col2.push(imageObj);
    }

    let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2
    };

    //当前这组图片已加载完毕，则清空图片临时加载区域的内容
    if (!loadingCount) {
      data.images = [];
    }
    this.setData(data);
  },

  loadImages: function () {
    let images = [
      {
        id: 0,
        postTitle: '属于艾斯兔的专属回忆',
        headimg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfru62zjzmj303w06yglk.jpg',
        imageurl: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfrzwevk9jj30n00n0wgk.jpg',
        fansName: "七五折甩卖萌的章鱼哥",
        likeNum: "637",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 1,
        postTitle: '新公演歌曲鉴赏',
        headimg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfru6cl530j306y06ywef.jpg',
        imageurl: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfs0ad79jzj306t06tjsv.jpg',
        fansName: "Forever_LJ",
        likeNum: "77",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 2,
        postTitle: '在悠唐过中秋的一二事',
        headimg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfru6lqtiwj306y06yt8o.jpg',
        imageurl: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfs0ad79jzj306t06tjsv.jpg',
        fansName: "是略略略🍉🍊",
        likeNum: "133",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 3,
        postTitle: '你问我爱你有多深',
        headimg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfru6u7amwj306y06yq2y.jpg',
        imageurl: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfs06hmtjpj30nu0owq79.jpg',
        fansName: "小白镜",
        likeNum: "77",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 4,
        postTitle: '哇这还上报纸了呢！',
        headimg: 'http://img3.imgtn.bdimg.com/it/u=3668668882,2111028747&fm=26&gp=0.jpg',
        imageurl: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfs06s15wfj30qo0lqn16.jpg',
        fansName: "从小就很自信🌹🌸",
        likeNum: "18",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 5,
        postTitle: '学姐与底迪',
        headimg: 'http://hbimg.b0.upaiyun.com/93943dc4d922c7302c237904a9a808082b8a72d75be2-UqbmSG_fw658',
        imageurl: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfs0706lm2j30hs0qomyx.jpg',
        fansName: "嗯哼",
        likeNum: "40",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 6,
        postTitle: '回忆第一次来剧场！',
        headimg: 'http://img3.imgtn.bdimg.com/it/u=2015249519,187490950&fm=26&gp=0.jpg',
        imageurl: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfs06m5g1fj30qo0qodhm.jpg',
        fansName: "铁鹰飞人（国家战略忽",
        likeNum: "38",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 7,
        postTitle: '中泰--举个张怡说明',
        headimg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfru7ey027j306y06xaa1.jpg',
        imageurl: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfs06wfqw4j30qo0k0wgi.jpg',
        fansName: "我不是奇奇毛的猫的猫",
        likeNum: "92",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 8,
        postTitle: '顶点到从零开始',
        headimg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfru765fqlj306y06y0sn.jpg',
        imageurl: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfs08h2aioj30hs0vn0uc.jpg',
        fansName: "在河里的同圆圆",
        likeNum: "12",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 9,
        postTitle: '我在这的初心：初日',
        headimg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfru7vqcs4j306y06yweg.jpg',
        imageurl: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfs082lxgzj30qo0cbt9b.jpg',
        fansName: "是喵不是狗",
        likeNum: "75",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 10,
        postTitle: '嘉兴路除了小偶像还有',
        headimg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfru7ndv2ij306y06yweg.jpg',
        imageurl: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfs087lp9fj30qo0iwjt4.jpg',
        fansName: "桌子布",
        likeNum: "10",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 11,
        postTitle: '#当我见到偶像#（本人女饭 原来是本部饭',
        headimg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfru8dzfw1j306y06ydfu.jpg',
        imageurl: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfs0954wuij30k10qoju0.jpg',
        fansName: "宝山cat喵星队",
        likeNum: "16",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 12,
        postTitle: '深爱段艺璇',
        headimg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfru8satv8j306y06yglq.jpg',
        imageurl: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfs08c9etqj30ia0qo405.jpg',
        fansName: "钟爱段艺璇",
        likeNum: "74",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 13,
        postTitle: '好喜欢胡小包',
        headimg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfru84f3dyj306y06yt8s.jpg',
        imageurl: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfs08llqk8j30f00qomy9.jpg',
        fansName: "八分钟",
        likeNum: "18",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 14,
        postTitle: '我最喜欢卢天惠！',
        headimg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfru8l5dvwj305r06yweh.jpg',
        imageurl: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfs09g97wjj30hr0qowfx.jpg',
        fansName: "长月竹",
        likeNum: "62",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 15,
        postTitle: '饭艾斯兔的心路历程',
        headimg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfru62zjzmj303w06yglk.jpg',
        imageurl: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfs09uufkfj30hs0hsacf.jpg',
        fansName: "七五折甩卖萌的章鱼哥",
        likeNum: "77",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 16,
        postTitle: '第一次去握手会',
        headimg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfru94c057j306y06y74a.jpg',
        imageurl: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfs09l0me8j30qo0k0n06.jpg',
        fansName: "白骨书生",
        likeNum: "15",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      },
      {
        id: 17,
        postTitle: '最喜欢S队灵魂使者',
        headimg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfru9dg3xbj306y06y0ss.jpg',
        imageurl: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfs09qj2hbj30ih0ih40t.jpg',
        fansName: "小苦",
        likeNum: "74",
        likeimg: '/images/found/dynamic_like.png',
        height: 0,
      }
    ];

    let baseId = "img-" + (+new Date());

    for (let i = 0; i < images.length; i++) {
      images[i].id = baseId + "-" + i;
    }

    this.setData({
      loadingCount: images.length,
      images: images
    });
  },
  // 点击爱心 喜爱（点赞）
  beenLikedL: function (e) {
    const that = this;
    let isLike = this.data.islike;
    let index = e.currentTarget.idx1;
    // let img = this.col1[index].likeimg;
    console.log(e);
    if (!isLike) {
      that.setData({
        islike: true,
        likeimg: '/images/found/dynamic_like_have.png'
      })
    } else {
      that.setData({
        islike: false,
        likeimg: '/images/found/dynamic_like.png'
      })
    }
  },
  beenLikedR: function (e) {
    const that = this;
    let isLike = this.data.islike;
    let index = e.currentTarget.idx2;
    // let img = this.col2[index].likeimg;
    console.log(e);
    if (!isLike) {
      that.setData({
        islike: true,
        likeimg: '/images/found/dynamic_like_have.png'
      })
    } else {
      that.setData({
        islike: false,
        likeimg: '/images/found/dynamic_like.png'
      })
    }
  }

})