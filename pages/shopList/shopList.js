Page({
    data: {
        shopList: [],
        pageIndex: 0, //分类起始页码
        pageSize: 20, //每页条数
        id: 1,  //当前分类 id
        hasMore:true // 记录是否 还有更多的数据
    },
    // 自定义函数 加载数据
    loadMore: function() {
        // 如果没有更多数据 就直接返回
        if(!this.data.hasMore) {
            return
        }
        wx.showNavigationBarLoading()
        wx.request({
            url: `https://locally.uieee.com/categories/${this.data.id}/shops`,
            data: {
                _limit: this.data.pageSize,
                _page: ++this.data.pageIndex
            },
            success: res => {
                // 获取当前 id 页的数据总条数
                var count = parseInt(res.header['X-Total-Count'])
                this.setData({
                    // 把 老数据 添加 新数据
                    shopList: this.data.shopList.concat(res.data),
                    // 判断是否还有更多的数据
                    hasMore: count > this.data.pageSize * this.data.pageIndex
                })
                wx.hideNavigationBarLoading()
            }
        })
    },
    /*
  	监听页面加载
   */
    onLoad: function(options) {
        // console.log('A 店铺列表-监听页面加载')
        // console.log(options)
        // 从首页传递过来的参数 设置导航条
        wx.setNavigationBarTitle({
            title: options.title,
        })
        // 把获取的参数 放到 data中 方便复用
        this.setData({
            id: options.id
        })
        // 调用页面 加载数据 函数
        this.loadMore()
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
    },

    /*
    	监听页面下拉的动作
     */
    onPullDownRefresh: function() {
        // 先开启  "enablePullDownRefresh": true 下拉刷新
        // 下拉刷新页面
        // 先把数据设置为默认值
        this.setData({
           pageIndex:1,
           hasMore:true,
           shopList:[] 
        })
        // 重新请求数据
        this.loadMore()
        // 停止 下拉刷新动画   不然会一直 一直存在 刷新
        wx.stopPullDownRefresh()
    },

    /*
    	监听页面下拉 触底 的动作
     */
    onReachBottom: function() {
        // 触底再调用 加载数据 函数
        this.loadMore()
    }

})