import classicModel from '../../models/classic'
import likeModel from '../../models/like'

// pages/classic/classic.js
Page({

  data: {
    classic: null,
    first: false,
    latest: true
  },

  onLoad: function (options) {
    classicModel.getLatest((res) => {
      this.setData({
        classic: res
      })
    })
  },

  onLike: function (event) {
    const behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },

  toNext: function (event) {

  },

  toPrev: function (event) {

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