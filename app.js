//app.js
App({


  onLaunch: function () {

    wx.showLoading({
      title: '登录中',
    })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(res.code)
        var that = this

        //console.log("登录。。。")
        if (that.globalData.flag==0) 
        { 
           request(that, res)
          that.globalData.flag=1
        }
       
   
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
          
              var  that =this
              //console.log("已经授权。。。")
           

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回！!!
              // 所以此处加入 callback 以防止这种情况
              if (that.userInfoReadyCallback) {
                console.log("userInfoReadyCallback")
                that.userInfoReadyCallback(res)
              }

              if (that.globalData.flag == 0)
                request(that, res)

            }
          })
        }
      }
    })
  },


  globalData: {
    userInfo: null,
    user: { userId: 0, openId: ''},
    flag:0,
    shgoods:[],
  }
})
/**
 * 获取用户信息
 */

 function request(that,res){
  wx.request({
    url: 'https://worthytom.top:8443/jxau/api/user',
    data: {
      method: 'getOpenId',
      code: res.code
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      //console.log(res)
      that.globalData.user = res.data.user
      wx.hideLoading()
      console.log("Get User :" )
      console.log( that.globalData.user )
      //获取
      if (that.globalData.user.userId > 0 && that.globalData.userInfo != null ){
       
      wx.switchTab({
        url: "../index/index"
      });
      }
      else if (that.globalData.user.userId > 0){
        wx.showLoading({
          title: '请先授权',
        })
        setTimeout(function () {
          wx.hideLoading()
            wx.navigateTo({
              url: '../auth/auth',
            })

        }, 1000)
      }
      else{
        wx.showLoading({
          title: '请注册',
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 1000)
      }

    },
    fail: function (res) {
      console.log("失败了++") 
      console.log( res)
      wx.showLoading({
        title: '请检查网络',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 1000)

    }

  })
}