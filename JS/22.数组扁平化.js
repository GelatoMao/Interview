function flatten(arr) {
  const list = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      // flatten(item)最后返回的数组
      list.push(...flatten(item))
    } else {
      list.push(item)
    }
  })
  return list
}