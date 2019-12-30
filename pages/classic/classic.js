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