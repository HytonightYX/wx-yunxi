// components/navi/index.js
Component({

  properties: {
    title: String,
    first: Boolean,
    latest: Boolean
  },

  data: {
    left: 'images/left.png',
    leftDis: 'images/left@dis.png',
    right: 'images/right.png',
    rightDis: 'images/right@dis.png',
  },

  methods: {
    onLeft: function () {
      !this.properties.latest && this.triggerEvent('left', {}, {})
    },
    onRight: function () {
      !this.properties.first && this.triggerEvent('right', {}, {})
    }
  }
})