import config from '../config'

const tips = {
  1: '抱歉，发生未知错误',
  1005: 'appkey 无效',
  3000: '期刊不存在'
}

class HTTP {
  request(params) {
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method || 'GET',
      data: params.data || {},
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          // Success 
          params.success && params.success(res.data)
        } else {
          const ec = res.data.error_code
          this._showError(ec)
        }
      },
      fail: (err) => {
        this._showError()
      }
    })
  }

  _showError(errorCode = 1) {
    wx.showToast({
      title: tips[errorCode],
      icon: 'none',
      duration: 2000
    })
  }
}


export default HTTP