// pages/my/vouchercentre/vouchercentre.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 鸡腿充值选项列表
    rechargeSelectList: [
      {
        id: 1,
        selectTitle: '10鸡腿',
        money: '1.00'
      },
      {
        id: 2,
        selectTitle: '50鸡腿',
        money: '5.00'
      },
      {
        id: 3,
        selectTitle: '100鸡腿',
        money: '10.00'
      },
      {
        id: 4,
        selectTitle: '300鸡腿',
        money: '30.00'
      },
      {
        id: 5,
        selectTitle: '500鸡腿',
        money: '50.00'
      },
      {
        id: 6,
        selectTitle: '1000鸡腿',
        money: '100.00'
      },
      {
        id: 7,
        selectTitle: '2000鸡腿',
        money: '200.00'
      },
      {
        id: 8,
        selectTitle: '5000鸡腿',
        money: '500.00'
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