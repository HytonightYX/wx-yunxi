import HTTP from '../util/http'

class ClassicModel extends HTTP {
  getLatest(cb) {
    this.request({
      url: '/classic/latest',
      success: (res) => {
        cb(res)
      }
    })
  }
}

export default new ClassicModel()