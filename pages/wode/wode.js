const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic: '../image/shangping.jpg',
    name:'吴鑫涛'
  },

  onLoad: function (e) {

    var that = this
    that.setData({
     
      userInfo: app.globalData.userInfo
    })



   
  },

  changetomassage2:function(){  
    wx.navigateTo({
      url: '/pages/massage2/massage2',
    })
  },
  changetofubu2: function () {
    wx.navigateTo({
      url: '/pages/fubu2/fubu2',
    })
  },
  changetodingdan: function () {
    wx.navigateTo({
      url: '/pages/dingdan/dingdan',
    })
  },
})