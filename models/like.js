import HTTP from '../util/http'

class LikeModel extends HTTP {
  like(behavior = 'like', artId, category) {
    let url = behavior === 'like' ? '/like' : '/like/cancel'
    this.request({
      url,
      method: 'POST',
      data: {
        art_id: artId,
        type: category
      }
    })
  }
}

export default new LikeModel()