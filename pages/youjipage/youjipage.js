// pages/youjipage/youjipage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function () {
    //跳转传参
    var _this = this
    wx.request({
      url: 'http://localhost:3000/getdataczy',
      success(res) {
        console.log(res.data)
        _this.setData({ czy: res.data })
      }
    })
  },

})