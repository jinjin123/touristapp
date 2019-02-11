// pages/store/store.js
const app = getApp()
Page({
  data: {
    tabbar:{},
    // bannerUrls: ['../images/czy/shangcheng-lb1.png', '../images/czy/shangcheng-lb1.png', '../images/czy/shangcheng-lb1.png'],
    types: [
      {
        // imgUrl: '../images/icon/jt.png',
        title: '交通'
      }, {
        // imgUrl: '..//images/icon/zyx.png',
        title: '自由行'
      }, {
        // imgUrl: '../images/icon/dzy.png',
        title: '定制游'
      }, {
        // imgUrl: '../images/icon/mp.png',
        title: '门票'
      }, {
        // imgUrl: '../images/icon/jd1.png',
        title: '酒店'
      }, {
        // imgUrl: '../images/icon/qz.png',
        title: '签证'
      }, {
        // imgUrl: '../images/icon/gty.png',
        title: '跟团游'
      }, {
        // imgUrl: '../images/icon/zc.png',
        title: '租车'
      }
    ],
    love: [],
    loadTimes: 0,
    perLoad: 4,
    // sale: [
    //   {
    //     type: '距结束还有7天',
    //     img: '../images/czy/yj3-bj.png',
    //     title: '海南三亚5天4晚自由行 希尔顿泳池房连住 蜈支洲酒店泳池别墅自驾',
    //     price: '9999'
    //   }, {
    //     type: '距结束还有9天',
    //     img: '../images/czy/yj3-bj.png',
    //     title: '迪拜旅游帆船酒店5678星定制7天私家团旅行含门票餐厅包车直升机',
    //     price: '37880'
    //   }
    // ],
    // discount:[
    //   {img1: '../images/czy/yj3-bj.png',
    //   text: '999起! 错峰出发，这个小岛有最美的风景 签证也便利'
    //   }, {
    //     img1: '../images/czy/yj3-bj.png',
    //     text: '999起! 错峰出发，这个小岛有最美的风景 签证也便利'
    //   }
    // ],
    // station: [
    //   {
    //     name: '香港',
    //     img: '../images/czy/yj3-bj.png',
    //   }, {
    //     name: '日本',
    //     img: '../images/czy/yj3-bj.png',
    //   }, {
    //     name: '泰国',
    //     img: '../images/czy/yj3-bj.png'
    //   }
    // ],
    // love: [
    //   {
    //     img: '../images/czy/yj3-bj.png',
    //     title: '海南三亚5天4晚自由行 希尔顿泳池房连住 蜈支洲酒店泳池别墅自驾',
    //     price: '9999'
    //   }, {
    //     img: '../images/czy/yj3-bj.png',
    //     title: '迪拜旅游帆船酒店5678星定制7天私家团旅行含门票餐厅包车直升机',
    //     price: '9999'
    //   }
    // ],
  },

  loadMore: function () {
    const loadTimes = this.data.loadTimes;
    const perLoad = this.data.perLoad;
    let temArr = this.data.love.slice((loadTimes * perLoad), (loadTimes * perLoad) + perLoad);
    if (temArr.length <= 0) {
      return;
    }

    wx.showLoading({
      title: '加载中',
    });
    setTimeout(() => {
      let loveArr = this.data.love.slice();
      loveArr.push(...temArr);
      this.setData({
        love: loveArr,
        loadTimes: loadTimes + 1
      }, () => {
        wx.hideLoading();
      })
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      app.editTabbar();
      var _this = this
      wx.request({
        url: 'http://localhost:4000/api/store/index',
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})