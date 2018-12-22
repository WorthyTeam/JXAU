const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    shgood:{},
    userInfo:{},

    price:'150',
    name:'手套',
    describle:'手套九成新，淘宝双十一买大了巴拉巴拉手套九成新，淘宝双十一买大了巴拉巴拉手套九成新，',
    salename:'吴鑫涛', 
    saletime:'2018-12-16',
    number:'0',
    huifu:[{
      url: '../image/shangping.jpg',
      neilong:'我想买我想买',
      time:'2018-12-16',
      name:'吴鑫涛'
    },
      {
        url: '../image/shangping.jpg',
        neilong: '我想买我想买',
        time: '2018-12-16',
        name: '吴鑫涛'
      },
      {
        url: '../image/shangping.jpg',
        neilong: '我想买我想买',
        time: '2018-12-16',
        name: '吴鑫涛'
      }
      
    ],
    imgUrls: [
      {
        
        url: '../image/shangping.jpg'
      }, {
        
        url: '../image/shangping.jpg'
      }, {
        url: '../image/shangping.jpg'
      }
    ],
    indicatorDots: true,  //小点
    autoplay: true,  //是否自动轮播
    interval: 7000,  //间隔时间
    duration: 3000,  //滑动时间
  },

  onLoad: function (params){

    var that = this
    var index = params.index
    that.setData({
      id: params.id,
      index: params.index,
      shgood: app.globalData.shgoods[index],
      userInfo: app.globalData.userInfo
    })
  


    console.log("接收到的 id=" + that.data.id)
  }

  
})