Page({
    data:{
        shopList:[]
    },
    /*
  	监听页面加载
   */
    onLoad: function(options) {
        // console.log('A 店铺列表-监听页面加载')
        // console.log(options)
        wx.request({
            url: `https://locally.uieee.com/categories/${options.id}/shops`,
            data:{
                _limit:10,
                _page:1
            },
            success: res => {
                this.setData({
                    shopList:res.data
                })
            }
        })
    },

    /*
  	监听页面初次渲染完成
   */
    onReady: function() {
        // console.log('B 店铺列表-监听页面初次渲染完成')
    },

    /*
    	监听页面显示
     */
    onShow: function() {
        // options.scene 可以识别用户通过什么方式进入到小程序
        // console.log('C 店铺列表-监听页面显示')
    },

    /*
    	监听页面卸载
     */
    onHide: function() {
        // console.log('D 店铺列表-监听页面卸载')
    }
})