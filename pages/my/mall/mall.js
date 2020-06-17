// pages/my/mall/mall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图图片
    swiperImgList: [
      {
        id: 1,
        imgUrl: 'https://file.48.cn/Shop/ALL//202006/20200605065001.jpg'
      },
      {
        id: 2,
        imgUrl: 'https://file.48.cn/Shop/ALL//202006/20200612103359.jpg'
      },
      {
        id: 3,
        imgUrl: 'https://file.48.cn/Shop/ALL//201811/20181101033852.jpg'
      },
      {
        id: 4,
        imgUrl: 'https://file.48.cn/Shop/ALL//201802/20180206010302.jpg'
      },
      {
        id: 5,
        imgUrl: 'https://file.48.cn/Shop/ALL//201901/20190122043908.jpg'
      },
    ],
    // 商品列表
    goodsList: [
      {
        id: 1,
        imgUrl: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfveoevf3zj30ak0akgq1.jpg',
        goodsTitle: 'SNH48 GROUP 第25张EP《时间的歌》',
        price: '78.00'
      },
      {
        id: 2,
        imgUrl: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfveoq0g1wj30ak0akwiq.jpg',
        goodsTitle: 'SNH48 GROUP 第25张EP《时间的歌》精装版',
        price: '288.00'
      },
      {
        id: 3,
        imgUrl: 'https://wx1.sinaimg.cn/mw690/005FbhyYgy1gfveotalw8j30ak0ak42y.jpg',
        goodsTitle: 'SNH48 7SENSES 第四张EP《NEW PLAN》',
        price: '78.00'
      },
      {
        id: 4,
        imgUrl: 'https://wx3.sinaimg.cn/mw690/005FbhyYgy1gfveoz7tqkj30ak0akmzy.jpg',
        goodsTitle: 'SNH48 GROUP 第26张EP《青春之翼》',
        price: '78.00'
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
  }
})