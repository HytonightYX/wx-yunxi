// components/epsoide/index.js
Component({

  properties: {
    index: {
      type: String,
      observer: function (newVal, oldVal, changedPath) {
        const val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 初始化的时候，data 里面手动给值
   * props 会覆盖 data
   */
  data: {
    year: 0,
    month: '',
    _index: '',
    monthArr: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  attached: function () {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()

    this.setData({
      year,
      month: this.data.monthArr[month]
    })
  },

  methods: {

  }
})