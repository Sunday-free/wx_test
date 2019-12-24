//app.js
App({

  /*微信小程序 生命周期 函数 */

  /*
  	当小程序初始化完成，会触发 onLaunch (全局只触发一次)
   */
  onLaunch:function() {
  	// console.log('小程序初始化完成')
  },

  /*
  	当小程序启动，或从后台进入到前台显示 会触发 onShow
   */
  onShow:function(options) {
  	// console.log(options)
  	// options.scene 可以识别用户通过什么方式进入到小程序
  	// console.log('小程序启动，或从后台进入到前台显示')
  },

  /*
  	当小程序从前台进入到后台显示 会触发 onHide
   */
  onHide:function() {
  	// console.log('小程序从前台进入到后台显示')
  }
})