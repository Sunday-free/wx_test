Page({
    // 页面事件
    radioChangeHandle:function(e){
        console.log(e)
        console.log(e.detail.value)
        console.log(e.currentTarget.dataset)
    },
    fatherTapHandle:function(){
        console.log('爸爸')
    },
    sonTapHandle: function (e) {
        console.log('儿子')
        console.log(e.currentTarget.dataset.index)
    }
})