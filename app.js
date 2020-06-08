//app.js
App({
  onLaunch: function (options) {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    // 隐藏吸入tabbar
    this.hidetabbar();
    // 获取设备信息
    this.getSystemInfo();
  },
  // 自己对wx.hidetabBar的一个封装
  hidetabbar() {
    wx.hideTabBar({
      fail: function () {
        setTimeout(function () { // 做了延时重试一次，作为保底。
          wx.hideTabBar()
        }, 500)
      }
    });
  },
  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
      }
    })
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    })
    
  },
  globalData: {
    userInfo: null,
    systemInfo: null, //客户端设备信息
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#777777",
      "selectedColor": "#8c7edb",
      "list": [
        {
          "pagePath": "/pages/home/home",
          "text": "首页",
          "iconPath": "icon/bottom_home.png",
          "selectedIconPath": "icon/bottom_home_have.png"
        },
        {
          "pagePath": "/pages/juju/juju",
          "text": "聚聚",
          "iconPath": "icon/bottom_juju.png",
          "selectedIconPath": "icon/bottom_juju_have.png"
        },
        {
          "pagePath": "/pages/middle/middle",
          // "text": "帖子",
          "iconPath": "icon/bottom_create.png",
          "isSpecial": true
        },
        {
          "pagePath": "/pages/found/found",
          "text": "48区",
          "iconPath": "icon/bottom_found.png",
          "selectedIconPath": "icon/bottom_found_hover.png"
        },
        {
          "pagePath": "/pages/my/my",
          "text": "我的",
          "iconPath": "icon/bottom_my.png",
          "selectedIconPath": "icon/bottom_my_hove.png"
        }
      ]
    }
  }
})