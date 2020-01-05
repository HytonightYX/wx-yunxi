import HTTP from '../util/http'

class ClassicModel extends HTTP {

  _latestIndex = null

  getLatest(cb) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        cb(res)
      }
    })
  }

  getNext(index, cb) {
    const key = this._getKey(index + 1)
    this.request({
      url: `/classic/${index}/next`,
      success: (res) => {
        cb(res)
      }
    })
  }

  getPrevious(index, cb) {
    const key = this._getKey(index - 1)
    this.request({
      url: `/classic/${index}/previous`,
      success: (res) => {
        cb(res)
      }
    })
  }

  getClassic(index, type, cb) {
    const key = type === 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    const classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: `/classic/${index}/${type}`,
        success: (res) => {
          wx.setStorageSync(this._getKey(res.index), res)
          cb(res)
        }
      })
    } else {
      cb(classic)
    }
  }

  isFirst(index) {
    return index === 1
  }

  isLatest(index) {
    return index === this._latestIndex
  }

  setLatestIndex(index) {
    this._latestIndex = index
  }

  _getKey(index) {
    return 'classic-' + index
  }

}

export default new ClassicModel()