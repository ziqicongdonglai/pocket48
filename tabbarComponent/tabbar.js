// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
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
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false,
    actionSheetHidden: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // showActionSheet: function () {
    //   wx.showActionSheet({
    //     itemList: ['你好'],
    //     itemColor: ''
    //   })
    // }
    actionSheetTap: function (e) {
      console.log(this);
      this.setData({
        actionSheetHidden: !this.data.actionSheetHidden
      })
    },
    actionSheetChange: function (e) {
      this.setData({
        actionSheetHidden: !this.data.actionSheetHidden
      });
      console.log("点击ation-sheet-cancel，会触发action-sheet绑定的事件。在这里可以通过改变hidden控制菜单的隐藏");
    },
    // 跳转到帖子编辑界面
    tomiddle: function (e) {
      const that = this;
      wx.navigateTo({
        url: '/pages/middle/middle',
        success: function (res) {
          // 跳转页面的同时改变是否隐藏
          that.setData({
            actionSheetHidden: !that.data.actionSheetHidden
          });
        }
      })
    }
  }
})
