// pages/seach/seach.js
var inputContent = {};
Page({
  
  data: {
    inputContent: {}
  },

  bindinput: function (e) {
    inputContent[e.currentTarget.id] = e.detail.value
  },

  SearchClick: function () {
    var inputValue = inputContent.search_input;
    if (inputValue) {
      console.log('inputValue=', inputValue)
      wx.navigateTo({
        url: "pages/dianni1/dianni1",
      })
    } else {
      console.log('inputValue=', inputValue)
      wx.showModal({
        title: '提示',
        content: '请输入关键字进行搜索',
        showCancel: false
      })
    }

  },
})