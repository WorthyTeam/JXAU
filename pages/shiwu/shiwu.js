const app = getApp()
var template1 = require('../../template2/template2.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic: '../image/tianjia.png',
    array: ['未分类', '家具', '电子', '衣服', '鞋子', '食品'],

    array: ['未分类', '家具', '电子', '衣服', '鞋子', '食品'],
    index: 0, 
    shiwu:'shiwu1',
    shizhu:'shizhu1'
  },
  changecolor1:function(){
    var that = this
    that.setData({
      shiwu: 'shiwu1',
      shizhu: 'shizhu1'
    })
  },

  onLoad: function (options) {
    template1.tabbar("tabBar", 0, this)//0表示第一个tabbar
    this.getData();

  },
  changecolor2: function () {
    var that = this
    that.setData({
      shiwu: 'shiwu',
      shizhu: 'shizhu2'
    })
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  chooseimage: function () {
    console.log('aaaa')
    var that = this
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({
          pic: tempFilePaths[0]
        })
      }
    })
  }
})