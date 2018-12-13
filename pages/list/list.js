// pages/list/list.js
let datas = require('../../datas/list-data.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        listArr: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            listArr : datas.list_data
        });
    },
    //点击跳转到detail详情页
    toDetail(event){

        //点击跳转对应的下标
        let index = event.currentTarget.dataset.index;

        wx.navigateTo({
            url: '/pages/detail/detail?index=' + index,
        })
    },
    //点击了轮播图的时候跳转
    carouselToDetail(event){
        
        let index = event.target.dataset.index;
        wx.navigateTo({
            url: '/pages/detail/detail?index=' + index,
        })
    },

})