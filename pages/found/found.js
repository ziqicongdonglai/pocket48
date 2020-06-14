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
    app.globalData.currentTab = e.currentTarget.dataset.idx;
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
      currentTab: app.globalData.currentTab
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    // 全局变量
    app.globalData.currentTab = e.detail.current
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
        goodId: 0,
        postTitle: '属于艾斯兔的专属回忆',
        headimg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfru62zjzmj303w06yglk.jpg',
        imageurl: '/images/found/jinxuan/jx1.png',
        newprice: "86",
        fansName: "七五折甩卖萌的章鱼哥",
        likeNum: "637",
        height: 0,
      },
      {
        goodId: 1,
        postTitle: '新公演歌曲鉴赏',
        headimg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfru6cl530j306y06ywef.jpg',
        imageurl: '/images/found/jinxuan/no_img.png',
        newprice: "147.00",
        fansName: "Forever_LJ",
        likeNum: "77",
        height: 0,
      },
      {
        goodId: 2,
        postTitle: '在悠唐过中秋的一二事',
        headimg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfru6lqtiwj306y06yt8o.jpg',
        imageurl: '/images/found/jinxuan/no_img.png',
        newprice: "86.00",
        fansName: "是略略略🍉🍊",
        likeNum: "133",
        height: 0,
      },
      {
        goodId: 3,
        postTitle: '你问我爱你有多深',
        headimg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfru6u7amwj306y06yq2y.jpg',
        imageurl: '/images/found/jinxuan/jx2.jpg',
        newprice: "97.00",
        fansName: "小白镜",
        likeNum: "77",
        height: 0,
      },
      {
        goodId: 4,
        postTitle: '哇这还上报纸了呢！',
        headimg: 'http://img3.imgtn.bdimg.com/it/u=3668668882,2111028747&fm=26&gp=0.jpg',
        imageurl: '/images/found/jinxuan/jx4.jpg',
        newprice: "398.00",
        fansName: "从小就很自信🌹🌸",
        likeNum: "18",
        height: 0,
      },
      {
        goodId: 5,
        postTitle: '学姐与底迪',
        headimg: 'http://hbimg.b0.upaiyun.com/93943dc4d922c7302c237904a9a808082b8a72d75be2-UqbmSG_fw658',
        imageurl: '/images/found/jinxuan/jx6.jpg',
        newprice: "86",
        fansName: "嗯哼",
        likeNum: "40",
        height: 0,
      },
      {
        goodId: 6,
        postTitle: '回忆第一次来剧场！',
        headimg: 'http://img3.imgtn.bdimg.com/it/u=2015249519,187490950&fm=26&gp=0.jpg',
        imageurl: '/images/found/jinxuan/jx3.jpg',
        newprice: "147.00",
        fansName: "铁鹰飞人（国家战略忽",
        likeNum: "38",
        height: 0,
      },
      {
        goodId: 7,
        postTitle: '中泰--举个张怡说明',
        headimg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfru7ey027j306y06xaa1.jpg',
        imageurl: '/images/found/jinxuan/jx5.jpg',
        newprice: "86.00",
        fansName: "我不是奇奇毛的猫的猫",
        likeNum: "92",
        height: 0,
      },
      {
        goodId: 8,
        postTitle: '顶点到从零开始',
        headimg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfru765fqlj306y06y0sn.jpg',
        imageurl: '/images/found/jinxuan/jx10.jpg',
        newprice: "97.00",
        fansName: "在河里的同圆圆",
        likeNum: "12",
        height: 0,
      },
      {
        goodId: 9,
        postTitle: '我在这的初心：初日',
        headimg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfru7vqcs4j306y06yweg.jpg',
        imageurl: '/images/found/jinxuan/jx7.jpg',
        newprice: "398.00",
        fansName: "是喵不是狗",
        likeNum: "75",
        height: 0,
      },
      {
        goodId: 10,
        postTitle: '嘉兴路除了小偶像还有',
        headimg: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfru7ndv2ij306y06yweg.jpg',
        imageurl: '/images/found/jinxuan/jx8.jpg',
        newprice: "86",
        fansName: "桌子布",
        likeNum: "10",
        height: 0,
      },
      {
        goodId: 11,
        postTitle: '#当我见到偶像#（本人女饭 原来是本部饭',
        headimg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfru8dzfw1j306y06ydfu.jpg',
        imageurl: '/images/found/jinxuan/jx12.jpg',
        newprice: "147.00",
        fansName: "宝山cat喵星队",
        likeNum: "16",
        height: 0,
      },
      {
        goodId: 12,
        postTitle: '深爱段艺璇',
        headimg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfru8satv8j306y06yglq.jpg',
        imageurl: '/images/found/jinxuan/jx9.jpg',
        newprice: "86.00",
        fansName: "钟爱段艺璇",
        likeNum: "74",
        height: 0,
      },
      {
        goodId: 13,
        postTitle: '好喜欢胡小包',
        headimg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfru84f3dyj306y06yt8s.jpg',
        imageurl: '/images/found/jinxuan/jx11.jpg',
        newprice: "97.00",
        fansName: "八分钟",
        likeNum: "18",
        height: 0,
      },
      {
        goodId: 14,
        postTitle: '我最喜欢卢天惠！',
        headimg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfru8l5dvwj305r06yweh.jpg',
        imageurl: '/images/found/jinxuan/jx13.jpg',
        newprice: "398.00",
        fansName: "长月竹",
        likeNum: "62",
        height: 0,
      },
      {
        goodId: 15,
        postTitle: '饭艾斯兔的心路历程',
        headimg: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfru62zjzmj303w06yglk.jpg',
        imageurl: '/images/found/jinxuan/jx16.jpg',
        newprice: "147.00",
        fansName: "七五折甩卖萌的章鱼哥",
        likeNum: "77",
        height: 0,
      },
      {
        goodId: 16,
        postTitle: '第一次去握手会',
        headimg: 'https://wx4.sinaimg.cn/mw690/005FbhyYgy1gfru94c057j306y06y74a.jpg',
        imageurl: '/images/found/jinxuan/jx14.jpg',
        newprice: "86.00",
        fansName: "白骨书生",
        likeNum: "15",
        height: 0,
      },
      {
        goodId: 17,
        postTitle: '最喜欢S队灵魂使者',
        headimg: 'https://wx2.sinaimg.cn/mw690/005FbhyYgy1gfru9dg3xbj306y06y0ss.jpg',
        imageurl: '/images/found/jinxuan/jx15.jpg',
        newprice: "97.00",
        fansName: "小苦",
        likeNum: "74",
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
  }
})