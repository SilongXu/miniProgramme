// pages/movieDetail/movieDetail.js
let datas = require('../../datas/movies_data.js');
let appDatas = getApp();
console.log(appDatas);

Page({

    /**
     * 页面的初始数据
     */
    data: {
        movieDetail : {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        this.setData({
            movieDetail: datas.movies_data[options.index]
        })
    },
})