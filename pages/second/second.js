const app = getApp()
var template1 = require('../../template1/template1.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shgoods:[],
  },
/**
 * 
 */
  onLoad: function (e) {
  template1.tabbar("tabBar", 0, this)//0表示第一个tabbar
  

//发请求
  var that = this

    wx.request({
      url: 'https://worthytom.top:8443/jxau/api/shgoods',
      data: {
        method: "getshgoods",
      },

      success: function (res) {//

        if (res.statusCode == 200) {//获取
            
            console.log(res.data)
          app.globalData.shgoods = res.data
            that.setData({
              shgoods: res.data

            })

        }
        else {   //上传失败
          wx.showModal({
            title: '提示',
            content: '网络异常，请检查后重试！',
          })

        }

      }
    })



  }
})