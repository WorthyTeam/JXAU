//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/found/found",
      "iconPath": "/pages/image/fabu.png",
      "selectedIconPath": "/pages/image/fabu_2.png",
	  "text":"失物"
    },
    {
      "current": 0,
      "pagePath": "/pages/shiwu/shiwu",
      "iconPath": "/pages/image/shiwuzhaoling.png",
      "selectedIconPath": "/pages/image/shiwuzhaoling2.png",
	  "text":"发布失物"
    },
    {
      "current": 0,
      "selectedIconPath": "/pages/image/ai-connection2.png",
      "iconPath": "/pages/image/ai-connection.png",
      "pagePath": "/pages/found2/found2",
	  "text":"招领"
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