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
      // url: 'http://localhost:3000/getdataczy',
      url: 'http://localhost:4000/api/des/node',
      success(res) {
        console.log(res.data)
        _this.setData({ czy: res.data.data })
      }
    })
  },
  Cancel: function(){
    wx.switchTab({
      url: "/pages/me/me",
    })
  },
  OwnInfoTouristList : function (){
    wx.navigateTo({
      url: "/pages/youjilist/youjilist",
    })
  },
  AddTourist: function (){
    wx.navigateTo({
      url: "/pages/addyouji/addyouji",
    })
  }
})