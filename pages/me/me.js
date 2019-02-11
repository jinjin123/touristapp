// pages/me/me.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar:{},
    title:'',
    userImg: '../images/czy/wd-touxiang.png',
    userName: '暴躁君',
    userlevel: 'lv.2',
    fansnum: '22',
    follownum: '17',
    dynamicnum: '7',
    uploadImgList: [],
    recordFilePath: '',
    pausing: false,
    // userbox: [
    //   {
    //     imgUrl: '../images/czy/wdshoucang.png',
    //     title: '我的收藏'
    //   }, {
    //     imgUrl: '../images/czy/wdlishi.png',
    //     title: '我的历史'
    //   }, {
    //     imgUrl: '../images/czy/wddingdan.png',
    //     title: '我的订单'
    //   }
    // ],
    // normalBar: [
    //   {
    //     img: '../images/czy/wd-youji.png',
    //     usertitle: '我的游记'
    //   }, {
    //     img: '../images/czy/wd-dianping.png',
    //     usertitle: '我的点评'
    //   }, {
    //     img: '../images/czy/wd-wenda.png',
    //     usertitle: '我的问答'
    //   }, {
    //     img: '../images/czy/wd-qianbao.png',
    //     usertitle: '钱包'
    //   }, {
    //     img: '../images/czy/wd-yhj.png',
    //     usertitle: '优惠券'
    //   }, {
    //     img: '../images/czy/wd-xingcheng.png',
    //     usertitle: '行程'
    //   }, {
    //     img: '../images/czy/wd-jyfk.png',
    //     usertitle: '建议反馈'
    //   }
    // ],
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
    var _this = this
    wx.request({
      url: 'http://localhost:4000/api/user/index',
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
  OwnInfo: function (e){
    switch(e.currentTarget.dataset.name){
      case "我的游记":
        // dig a  user tag &request backend  get content
        wx.navigateTo({
          url: "/pages/youjipage/youjipage",
        })
      break;
      case "我的点评":
          console.log('other');
      break;
      default:
      break;
    }
  }
})