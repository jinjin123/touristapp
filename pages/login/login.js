// pages/login/login.js
Page({
data:{},

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

  bindFormSubmit(event){
    var data=event.detail.value;
    wx.request({
      url: 'http://localhost:3000/login',
      method:'POST',
      data:data,
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      success:function(res){
        if (res.data.code == 0){
          wx.setStorageSync('token',res.data.token)

          wx.switchTab({
            url: "/pages/indexguanzhu/indexguanzhu",
          })
          wx.navigateTo({
            url: "/pages/indexguanzhu/indexguanzhu",
          })
        }else{
          wx.showToast({
            title: '失败，请检查你的账号密码',
            icon:'none'
          })
        }
      }
    })
  }
 



})