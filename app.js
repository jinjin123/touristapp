//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    wx.hideTabBar();
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
  },
  onShow: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
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
    });
  },
  globalData: {
    systemInfo: null,
    userInfo: null,
    "tabBar": {
      "backgroundColor": "#ffffff",
      "selectedColor": "black",
      "borderStyle": "black",
      "list": [
        {
          "pagePath": "/pages/indexguanzhu/indexguanzhu",
          "text": "首页",
          "iconPath": "images/czy/wode-shouyen.png",
          "selectedIconPath":"images/czy/wode-shouye.png"
        },
        {
          "pagePath": "/pages/destination/destination",
          "text": "目的地",
          "iconPath": "images/czy/wode-mudidi.png",
          "selectedIconPath": "images/czy/wode-mudidi-s.png"
        },
        {
          "pagePath": "/pages/indexguanzhu/indexguanzhu",
          "iconPath": "images/czy/dibu-xiangji.png",
          "selectedIconPath": "images/czy/dibu-xiangji.png",
          "isSpecial": true
        },
        {
          "pagePath": "/pages/store/store",
          "text": "商城",
          "iconPath": "images/czy/dibu-shangchang.png",
          "selectedIconPath": "images/czy/wode-shangcheng-s.png"
        },
        {
          "pagePath": "/pages/me/me",
          "text": "我的",
          "iconPath": "images/czy/dibu-wode.png",
          "selectedIconPath": "images/czy/dibu-wode-s.png"
        }
      ],
      "position":"bottom"
    }
  }
})