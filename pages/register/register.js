const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic:'../image/zhaoxiangji.png',
    wenzi:'二维码',
    wenhao:'../image/wenhao.png',

     userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
  * 载入界面
  获取用户nickname
  */
  onLoad: function () {
  
  },
  /*
  *选择便上传
   */
 chooseimage(){
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
 /*
 *帮助信息显示
  */
  switchtext(){
    var that = this;
    
      this.setData({
        wenzi: '请上传您的微信二维码',
        wenhao:''
      })
  }
/**提交信息 */
  ,formSubmit: function (e) {
    var that = this

    // console.log("获取公共信息")
    // console.log(app.globalData.userInfo.nickName)
    // console.log(app.globalData.userId)


    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
    if (that.data.pic == '../image/zhaoxiangji.png') {
      wx.showModal({
        title: '提示',
        content: '请上传您的二维码图片',
      })
    }
    else   if (e.detail.value.tel.length != 11) {
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号码！',
      })
    }
  
    else if (this.data.userInfo.nickName == null) {
          wx.showModal({
        title: '提示',
        content: '请先点击授权',
      })
    }

    else {
          //提交上传  
      console.log("@@" + app.globalData.userInfo.nickName )       
      wx.request({
        url: 'https://worthytom.top:8443/jxau/api/user',
        data: {
          method: "register",
          pic: that.data.pic,
          tel: e.detail.value.tel,
          nickName: app.globalData.userInfo.nickName,
          wxId: app.globalData.user.openId,

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

/**
 *  getUserInfo
 */
  getUserInfo: function (e) {
    if (this.data.userInfo.nickName != null) {  
      console.log(this.data.userInfo)
      return}
      

    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 
})

