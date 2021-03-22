
/**
 * 法一：从原数组中随机抽取一个元素放入新数组
 * 1. 从原数组（假如长度为n）中，随机生成一个索引 random
 * 2. 从原数组中删除第 random 个元素并将其push到新数组
 * 3. 重复第2步直到所有元素取完
 * 4. 最终得到一个新的打乱的数组
 */

const shuffle1 = (arr) => {
  let res = []
  while (arr.length) {
    const index = parseInt(Math.random() * arr.length)
    res.push(arr.splice(index, 1)[0])
  }
  return res
}

/**
 * 法二：每次从原数组中随机取一个元素，然后把该元素跟最后一个元素交
 * 换，即数组的尾部放的是已经处理过的元素
 * 1. 假设原数组长度为n，生成一个0～n-1的随机数random，然后将第
 * random个元素跟数组最后一个元素交换
 * 2. 生成一个0～n-2的随机数random，然后将第random个元素跟数组
 * 倒数第二个元素交换
 * 3. 以此类推，直到交换结束为止
 */

const shuffle2 = (arr) => {
  let n = arr.length, tmp, random
  while (n !== 0) {
    random = parseInt(Math.random() * n)
    tmp = arr[n - 1]
    arr[n - 1] = arr[random]
    arr[random] = tmp
    n-- // n减一，方便下一趟循环继续交换
  }
  return arr
}

