function _promisify(api) {
  return (options, ...params) => {
    return new Promise((resolve, reject) => {
      api(Object.assign({}, options, { success: resolve, fail: reject }), ...params);
    });
  }
}

function wxPromise(api) {
  function promisify(options, ...params) {
    return new Promise((resolve, reject) => {
      api(
        Object.assign({}, options, {
          success: (res) => {
            resolve(res)
          },
          fail: reject
        }),
        ...params
      )
    })
  }
  return promisify
}

function getWxPromiseObject() {
  let obj = {}
  for (const property in wx) {
    obj[property] = wxPromise(wx[property])
  }
  return obj
}

export default getWxPromiseObject()