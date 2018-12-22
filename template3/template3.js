//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/consult/consult",
      "iconPath": "/pages/image/zixun.png",
      "selectedIconPath": "/pages/image/zixun2.png",
	  "text":"咨询"
    },
    {
      "current": 0,
      "pagePath": "/pages/speak/speak",
      "iconPath": "/pages/image/fabiao.png",
      "selectedIconPath": "/pages/image/fabiao2.png",
	  "text":"发布"
    },
    {
      "current": 0,
      "selectedIconPath": "/pages/image/tucao2.png",
      "iconPath": "/pages/image/tucao.png",
      "pagePath": "/pages/talk/talk",
	  "text":"吐槽"
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