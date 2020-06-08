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
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
