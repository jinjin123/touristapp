  // pages/indexguanzhu/indexguanzhu.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      tabbar: {},
      showModalStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //跳转传参
    app.editTabbar();
    // template.tabbar("tabBar", 0, this)
    var _this = this
    console.log(_this.route)
    wx.request({
      url: 'http://localhost:3000/getdataczy',
      success(res) {
        console.log(res.data)
        _this.setData({ czy: res.data })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      var times=setInterval(function(){
        var token =getApp().globalData.token
        if (token){
          clearInterval(times)
        }
      },1000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.hideTabBar();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  Search: function (){
    wx.navigateTo({
      url: "/pages/search/search",
    })
  },
  PicShow: function (e){
    console.log(e)
  },
  follow:function(e){
    switch(e.currentTarget.dataset.name){
      case "关注":
        // dig a  user tag &request backend  get content
        wx.switchTab({
          url: "/pages/indexguanzhu/indexguanzhu",
        })
      break;
      case "推荐":
        wx.navigateTo({
          url: "/pages/indextuijian/indextuijian",
        })
      break;
      default:
      break;
    }

  }
})