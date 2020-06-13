Page({
  data: {

  },
  // 取消事件 返回到主页面
  handleCancel: function () {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      }
    })
  }
})