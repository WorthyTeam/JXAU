const app = getApp()
var template1 = require('../../template1/template1.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic: '../image/tianjia.png',
    array: ['未分类','家具', '电子', '衣服', '鞋子','食品'],
    index: 0,
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /*
  *选择便上传
   */
  chooseimage() {
    var that = this
    wx.chooseImage({

      sourceType: ['album', 'camera'],
      sizeType: ['original', 'compressed'],
      count: 1,

      success: function (res) {
        var tempFilePaths = res.tempFilePaths

        that.setData({
          pic: tempFilePaths[0]
        })

        wx.uploadFile({     //---------上传
          url: 'https://worthytom.top:8443/jxau/api/upload',//urls,
          filePath: tempFilePaths[0],///s.data.audiosrc,
          name: 'file',
          header: {
            'content-type': 'multipart/form-data'
          },
          success: function (res) {
            // console.log("选择成功")
            // console.log(res)

            that.setData({
              path: res.data,
              pic: res.data,

            })

          },
          fail: function (res) {
            console.log(res);
            wx.showModal({
              title: '提示',
              content: "网络请求失败，请确保网络是否正常",
              showCancel: false,
            });
            wx.hideToast();
          }
        });

      },
      fail: function (res) { console.log('图片文件选取失败') }

    })
  },


  /**
   * 
   */
  onLoad: function (options) {
  template1.tabbar("tabBar", 0, this)//0表示第一个tabbar


  },
  /*
  *
   */
  /**提交信息 */
   formSubmit: function (e) {
    var that = this

    console.log('form发生了submit事件，携带数据为：', e.detail.value)
     if (that.data.pic == '../image/tianjia.png') {
      wx.showModal({
        title: '提示',
        content: '请上传您的商品图片',
      })
    }
     else if (e.detail.value.name == null || e.detail.value.describle == null || e.detail.value.keyword=="未分类") {
      wx.showModal({
        title: '提示',
        content: '请输入完整商品信息！',
      })
    }

    else {
      //提交上传 
       console.log("GET SHURL：" + that.data.pic)
      wx.request({
        url: 'https://worthytom.top:8443/jxau/api/shgoods',
        data: {
          method: "addshgoods",
          SHUrl: that.data.pic,
          userId: app.globalData.user.userId,
           price: 0.00,
          name: e.detail.value.name,
          description: e.detail.value.describle,
          keyword: e.detail.value.keyword,
          
          

        },

        success: function (res) {//

          console.log(res)

          if (res.statusCode == 200) {//上传成功
            wx.showToast({
              title: '注册成功',
              icon: 'success',
              duration: 1000
            })
            wx.switchTab({
              url: "../index/index"
            });
          }
          else {   //上传失败
            wx.showModal({
              title: '提示',
              content: '注册失败，请检查后重试！',
            })

          }

        }
      })


    }
  },



})