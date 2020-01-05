import classicModel from '../../models/classic'
import likeModel from '../../models/like'

// pages/classic/classic.js
Page({

  data: {
    classic: null,
    first: false,
    latest: true,
    likeCount: 0,
    likeStatus: false
  },

  onLoad: function (options) {
    classicModel.getLatest((res) => {
      this.setData({
        classic: res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
      classicModel.setLatestIndex(res.index)
    })
  },

  onLike: function (event) {
    const behavior = event.detail.behavior
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },

  toNext: function (event) {
    this._updateClassic('next')
  },

  toPrev: function (event) {
    this._updateClassic('previous')
  },

  _updateClassic: function (type) {
    const index = this.data.classic.index
    classicModel.getClassic(index, type, res => {
      this._getLikeStatus(res.id, res.type)
      this.setData({
        classic: res,
        first: classicModel.isFirst(res.index),
        latest: classicModel.isLatest(res.index)
      })
    })
  },

  _getLikeStatus: function (artId, category) {
    likeModel.getClassicLikeStatus(artId, category, res => {
      this.setData({
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  }
})