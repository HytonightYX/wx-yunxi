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
    this.request({
      url: `/classic/${index}/next`,
      success: (res) => {
        cb(res)
      }
    })
  }

  getPrevious(index, cb) {
    this.request({
      url: `/classic/${index}/previous`,
      success: (res) => {
        cb(res)
      }
    })
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
}

export default new ClassicModel()