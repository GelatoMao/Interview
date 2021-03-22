/**
 * indexOf循环去重
 * ES6 Set 去重；Array.from(new Set(array))
 */

// forEach()和indexOf()
function uniqueArr(arr) {
  const result = []
  arr.forEach((item) => {
    if (result.indexOf(item) === -1) { // 内部包含隐式遍历
      result.push(item)
    }
  })
  return result
}

let arr = [1, 2, 3, 2, 4, 5, 3, 6, 1]
console.log(uniqueArr(arr)) // [ 1, 2, 3, 4, 5, 6 ]

// forEach() + 对象容器
function uniqueArr2(arr) {
  const result = []
  const contain = {} // 属性名是item 属性值是true
  // 遍历数组
  arr.forEach(item => {
    if (!contain.hasOwnProperty(item)) { // 不需要遍历
      result.push(item)
      contain[item] = true
    }
  })
  return result
}
let arr2 = [1, 2, 3, 2, 4, 5, 3, 6, 1]
console.log(uniqueArr(arr2)) // [ 1, 2, 3, 4, 5, 6 ]

// ES6 代码优化
let uniqueArr3 = arr => [...new Set(arr)]