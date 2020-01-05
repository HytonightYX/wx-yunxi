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
      classicModel.setLatestIndex(res.index)
    })
  },

  onLike: function (event) {
    const behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },

  toNext: function (event) {

    const index = this.data.classic.index
    classicModel.getNext(index, res => {
      this.setData({
        classic: res,
        first: classicModel.isFirst(res.index),
        latest: classicModel.isLatest(res.index)
      })
    })
  },

  toPrev: function (event) {
    const index = this.data.classic.index
    classicModel.getPrevious(index, res => {
      this.setData({
        classic: res,
        first: classicModel.isFirst(res.index),
        latest: classicModel.isLatest(res.index)
      })
    })
  }
})