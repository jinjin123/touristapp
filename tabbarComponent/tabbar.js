// tabBarComponent/tabBar.js
const app = getApp();
Component({
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
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
                "pagePath": "pages/me/me",
                "text": "我的",
                "iconPath": "images/czy/dibu-wode.png",
                "selectedIconPath": "images/czy/dibu-wode-s.png"
              }
        ]
      }
    }
  },

 


  methods: {
    TouristNode: function (){
      wx.navigateTo({
        url: "/pages/youjipage/youjipage",
      })
    },
    Cancel: function(){
      this.util('close')
    },
    powerDrawer: function (e){
      console.log(e)
      var currentStatu = e.currentTarget.dataset.statu;
      this.util(currentStatu)
    },
    util: function(currentStatu){
      console.log(currentStatu)
      var animation = wx.createAnimation({
        duration: 200,  
        timingFunction: "linear", 
        delay: 0 
      });
      this.animation = animation;
   
      animation.translateY(240).step();
   
      this.setData({
        animationData: animation.export()
      })
      
      setTimeout(function () {
        animation.translateY(0).step()
        this.setData({
          animationData: animation
        })
        
        if (currentStatu == "close") {
          this.setData(
            {
              showModalStatus: false
            }
          );
        }
      }.bind(this), 200)
    
      if (currentStatu == "open") {
        this.setData(
          {
            showModalStatus: true
          }
        );
      }
    }
  },
})
