//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/second/second",
      "iconPath": "/pages/image/shouye_2.png",
      "selectedIconPath": "/pages/image/shouye_1.png"
    },
    {
      "current": 0,
      "pagePath": "/pages/fabu/fabu",
      "iconPath": "/pages/image/paperplane.png",
      "selectedIconPath": "/pages/image/paperplane2.png"
    },
    {
      "current": 0,
      "selectedIconPath": "/pages/image/mine-red2.png",
      "iconPath": "/pages/image/mine-red.png",
      "pagePath": "/pages/wode/wode"
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