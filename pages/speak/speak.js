const app = getApp()
var template3 = require('../../template3/template3.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shiwu: 'shiwu1',
    shizhu: 'shizhu1'
  },
  changecolor1: function () {
    var that = this
    that.setData({
      shiwu: 'shiwu1',
      shizhu: 'shizhu1'
    })
  },
  changecolor2: function () {
    var that = this
    that.setData({
      shiwu: 'shiwu',
      shizhu: 'shizhu2'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template3.tabbar("tabBar", 0, this)//0表示第一个tabbar
    this.getData();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})