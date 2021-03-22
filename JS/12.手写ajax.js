/**
 * 0 未初始化 尚未调用 open() 方法
 * 1 启动 已经调用 open() 方法，但尚未调用 send() 方法
 * 2 发送 已经调用 send() 方法，但尚未接收到响应
 * 3 接收 已经接收到部分响应数据
 * 4 完成 已经接收到全部响应数据，而且已经可以在客户端使用了
 */
// 基础版
const xhr = new XMLHttpRequest()
// 第三个参数表示异步发送请求
xhr.open('GET', '/xxx?name=ss', true)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}
xhr.send()

// 原生ajax封装成promise
const ajax = (url, method, async, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(JSON.parse(xhr.responseText))
      } else if (xhr.status > 400) {
        reject('error')
      }
    }
    xhr.open(method, url, async)
    xhr.send(data || null)
  })
}





