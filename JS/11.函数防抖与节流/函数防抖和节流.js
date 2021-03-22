// 防抖
/**
 * 屏幕每次滚动都会触发事件，通过延时器让该事件在500ms后触发，
 * 如果在此期间又有新事件被触发，则关闭之前的事
 * 件，以新事件的时间计算，反复触发，反复关闭，所以只有时
 * 间间隔内的最后一次事件被触发
 * https://blog.csdn.net/weixin_44494811/article/details/103486637
 */

function debounce(fn, wait) {
  let timer
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      console.log(arguments)
      fn.apply(this, arguments)
    }, wait)
  }
}

// 节流
function throttle(fn, wait) {
  let prev = new Date()
  return function () {
    let now = new Date()
    if (now - prev > wait) {
      fn.apply(this, arguments)
      prev = new Date()
    }
  }
}



