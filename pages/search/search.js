// pages/seach/seach.js
var inputContent = {};
Page({
  
  data: {
    msgList:[], 
    searchLogList:[], 
    hidden:true, 
    scrollTop : 0, 
    inputShowed: false, 
    inputVal: "", 
    searchLogShowed: false,
    inputContent: {},
    searchContent:""
  },
  onLoad:function (){
      var that = this;
      // get from wx strongesync cache
      that.setData({
        searchLogShowed: true, 
        inputShowed: true,
        msgList:["首页","目的地","商城","我的"],
        searchLogList: ["首页","目的地","商城","我的"]
      })
  },
  WatchInput: function (e) {
    this.searchContent  = e.detail.value 
  },

  SearchClick: function () {
    switch(this.searchContent){
      case "首页":
        wx.switchTab({
          url: "/pages/indexguanzhu/indexguanzhu",
        })
      break;
      case "目的地":
        wx.switchTab({
          url: "/pages/destination/destination",
        })
      break;
      case "商城":
        wx.switchTab({
          url: "/pages/store/store",
        })
      break;
      case "我的":
        wx.switchTab({
          url: "/pages/me/me",
        })
      break;
      default:
        console.log('no jump') 
    }
  },
  searchDataByLog: function(e){
    switch(e.target.dataset.log){
      case "首页":
        wx.switchTab({
          url: "/pages/indexguanzhu/indexguanzhu",
        })
      break;
      case "目的地":
        wx.switchTab({
          url: "/pages/destination/destination",
        })
      break;
      case "商城":
        wx.switchTab({
          url: "/pages/store/store",
        })
      break;
      case "我的":
        wx.switchTab({
          url: "/pages/me/me",
        })
      break;
      default:
        console.log('no jump')
    }
  }
})