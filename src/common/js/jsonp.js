import originJSONP from 'jsonp'

export default function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise(((resolve, reject)) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`// encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。因为有些字符串不转码直接当URL一部分要爆炸。
  }
  return url ? url.substring(1) : ''// 删掉第一个&
}