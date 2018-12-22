const app = getApp()
var template3 = require('../../template3/template3.js');

Page({
  data: {
    question: '问题名称',
    pic: '../image/shangping.jpg',
    time: '2018-12-17',
    content: '我没写因为不知道你那个命名是什么我没写因为不知道你那个命名是什么我没写因为不知道你那个命名是什么我没写因为不知道你那个命名是什么',
  },
  intoquestion: function () {
    wx.navigateTo({
      url: '/pages/tucao/tucao',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template3.tabbar("tabBar", 0, this)//0表示第一个tabbar
    this.getData();

  }
})