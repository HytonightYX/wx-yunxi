// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number,
      value: 99
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc: 'images/like.png',
    disSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (event) {
      const like = this.properties.like
      let count = this.properties.count
      count = like ? count - 1 : count + 1

      this.setData({
        count,
        like: !like
      })

      let behavior = this.properties.like ? 'like' : 'cancel'
      this.triggerEvent(
        'like', {
          behavior
        }, {}
      )
    }
  }
})