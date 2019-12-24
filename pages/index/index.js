Page({


    data: {
        messgae: '123',
        sliderList: [1, 2, 3],
        navList: []
    },
    /*
  }
  	监听页面加载
   */
    onLoad: function() {
        // console.log('A 首页-监听页面加载')
        // 页面加载就获取数据
        // wx.request({
        //     url: 'https://locally.uieee.com/slides',
        //     // data: '',
        //     header: {},
        //     method: 'GET',  //需要大写
        //     dataType: 'json',
        //     responseType: 'text',
        //     success: function(res) {
        //         console.log(res)
        //     },
        //     fail: function(res) {},
        //     complete: function(res) {},
        // })

        /*请求轮播图数据*/
        wx.request({
            url: "https://locally.uieee.com/slides",
            success: res => {
                // console.log(res.data)
                // 1. 设置页面的 data 数据
                // console.log(this.data)
                // this.data.sliderList = res.data   //直接赋值 这样只更新数据 不更新视图
                this.setData({ // 既能 更新 数据 又能更新 视图
                    sliderList: res.data
                })
            }
        })

        /*请求导航数据*/
        wx.request({
            url: "https://locally.uieee.com/categories",
            success: res => {
                // console.log(res.data)
                // 1. 设置页面的 data 数据
                // console.log(this.data)
                // this.data.sliderList = res.data   //直接赋值 这样只更新数据 不更新视图
                this.setData({ // 既能 更新 数据 又能更新 视图
                    navList: res.data
                })
            }
        })
    },


    /*
  	监听页面初次渲染完成
   */
    onReady: function() {
        // console.log('B 首页-监听页面初次渲染完成')
    },

    /*
    	监听页面显示
     */
    onShow: function() {
        // options.scene 可以识别用户通过什么方式进入到小程序
        // console.log('C 首页-监听页面显示')
    },

    /*
    	监听页面隐藏
     */
    onHide: function() {
        // console.log('D 首页-监听页面隐藏')
    }
})