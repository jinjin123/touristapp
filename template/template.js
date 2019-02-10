 
//初始化数据
function tabbarinit() {
    return [
        {
            "current":0,
            "pagePath": "pages/indexguanzhu/indexguanzhu",
            "text": "首页",
            "iconPath": "pages/images/czy/wode-shouyen.png",
            "selectedIconPath":"pages/images/czy/wode-shouye.png"
          },
          {
            "current":0,
            "pagePath": "pages/destination/destination",
            "text": "目的地",
            "iconPath": "pages/images/czy/wode-mudidi.png",
            "selectedIconPath": "pages/images/czy/wode-mudidi-s.png"
          },
          {
            "current":0,
            "pagePath": "pages/indexguanzhu/indexguanzhu",
            "iconPath": "pages/images/czy/dibu-xiangji.png",
            "selectedIconPath": "pages/images/czy/dibu-xiangji.png"
          },
          {
            "current":0,
            "pagePath": "pages/store/store",
            "text": "商城",
            "iconPath": "pages/images/czy/dibu-shangchang.png",
            "selectedIconPath": "pages/images/czy/wode-shangcheng-s.png"
          },
          {
            "current":0,
            "pagePath": "pages/me/me",
            "text": "我的",
            "iconPath": "pages/images/czy/dibu-wode.png",
            "selectedIconPath": "pages/images/czy/dibu-wode-s.png"
          }
       ]
    
   }
   //tabbar 主入口
   function tabbarmain(bindName = "tabdata", id, target) {
     var that = target;
     var bindData = {};
     var otabbar = tabbarinit();
     otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
     otabbar[id]['current'] = 1;
     bindData[bindName] = otabbar
     that.setData({ bindData });
   }
    
   module.exports = {
     tabbar: tabbarmain
   }
   