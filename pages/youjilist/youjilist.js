// pages/youjilist/youjilist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imgUrls: [
    //   '../images/czy/shangcheng-lb1.png',
    //   '../images/czy/shangcheng-lb1.png',
    //   '../images/czy/shangcheng-lb1.png',
    //   '../images/czy/shangcheng-lb1.png'
    // ],
    // imgUrls1: [
    //   '../images/czy/yj-jxyj1.png',
    //   '../images/czy/yj-jxyj1.png',
    //   '../images/czy/yj-jxyj1.png',
    //   '../images/czy/yj-jxyj1.png'
    // ],
    images:[],
    swiperIndex: 0 //这里不写第一次启动展示的时候会有问题
  },
  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current,
      imageHeight: wx.getSystemInfoSync().windowHeight,
      imageWidth: wx.getSystemInfoSync().windowWidth,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
  longTap: function(e) {
    wx.showModal({
      title: '提示',
      content: '要删除该图片吗',
      showCancel: true,
      success: function (res) {
        console.log(res)
        if (res.cancel) {
        } else {
          wx.request({
            url: 'http://localhost:4000/des/node/del',
            method:'POST',
            data: {"title":e.target.dataset.name },
            header:{
              'content-type':'application/x-www-form-urlencoded'
            },
            success:function(res){
              if (res.data.code == 0){
                wx.navigateTo({
                  url: "/pages/youjilist/youjilist",
                })
              }else{
                  console.log('del faild')
              }
            }
          })
        }
     },
    })
  },
})