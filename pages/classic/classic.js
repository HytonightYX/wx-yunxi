import classicModel from '../../models/classic'

// pages/classic/classic.js
Page({

  data: {
    test: 1,
    classic: null
  },

  onLoad: function (options) {
    classicModel.getLatest((res) => {
      this.setData({
        classic: res
      })
    })
  },

  onLike: function (event) {
    console.log('======\n', event)
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})