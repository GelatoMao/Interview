/**
 * 实现深拷贝 一般需要用到
 * 递归
 * 判断类型 不同类型不同拷贝方法
 * 检查循环引用(环)
 * 
 * 判断深拷贝还是浅拷贝：修改拷贝之后的数据会不会影响原数据  
 */

/**
 * - 克隆数据：对象/数组
 *  1、区别： 浅拷贝/深度拷贝
 *    判断： 拷贝是否产生了新的数据还是拷贝的是数据的引用
 *    知识点：对象数据存放的是对象在栈内存的引用，直接复制的是对象的 引用
      let obj = {username: 'kobe'}
      let obj1 = obj; // obj1 复制了obj在栈内存的引用
    2、常用的拷贝技术
        1). arr.concat(): 数组浅拷贝
        2). arr.slice(): 数组浅拷贝
        3). JSON.parse(JSON.stringify(arr/obj)): 数组或对象深拷贝, 但不能处理函数数据
        4). 浅拷贝包含函数数据的对象/数组
        5). 深拷贝包含函数数据的对象/数组
 */

// 数组浅拷贝 arr.concat()
let arr = [1, 2, 3, { username: 'kobe' }]
let testArr = [4, 5]
let arr2 = []
arr2 = arr.concat()
console.log(arr2) // [ 1, 2, 3, { username: 'kobe' } ]
// 将username的值从kobe改成了wade 所以是浅拷贝
arr2[3].username = 'wade'
// [ 1, 2, 3, { username: 'wade' } ] [ 1, 2, 3, { username: 'wade' } ]
console.log(arr, arr2)


// 数组浅拷贝 arr.slice()
let arr3 = [1, 2, 3, { username: 'kobe' }]
let arr4 = arr3.slice(0)
arr4[3].username = 'duncan'
// [ 1, 2, 3, { username: 'duncan' } ] [ 1, 2, 3, { username: 'duncan' } ]
console.log(arr3, arr4)

// JSON.parse(JSON.stringify(arr/obj)): 数组或对象深拷贝, 但不能处理函数数据 将json数据和原生的js对象/数组相互转换 json数据： json对象，json数组
let obj = { username: 'kobe', age: 43 } // 不能处理函数的拷贝
let obj2 = JSON.parse(JSON.stringify(obj))
// { username: 'kobe', age: 43 }
console.log(obj2)
obj2.username = 'wade'
// { username: 'wade', age: 43 } { username: 'kobe', age: 43 }
console.log(obj2, obj)

// Object.assign(target, source1, source2..) 浅拷贝
let obj5 = { username: 'kobe', age: 43, gender: { option1: '男', option2: '女' } }
let obj6 = {}
Object.assign(obj6, obj5)
obj6.username = 'wade'
obj6.gender.option1 = '混合'
// { username: 'wade', age: 43, gender: { option1: '混合', option2: '女' } } { username: 'kobe', age: 43, gender: { option1: '混合', option2: '女' } }
console.log(obj6, obj5)

// 实现深拷贝 对象 数组

// 判断类型
function checkoutType(target) {
  return Object.prototype.toString.call(target).slice(8, -1)
}

function clone(target) {
  let result
  // 判断拷贝的数据是 对象 || 数组 || 其他(基本数据类型，函数) 检测数据类型
  let targetType = checkoutType(target)
  if (targetType === 'Array') {
    result = []
  } else if (targetType === 'Object') {
    result = {}
  } else {
    return target
  }

  for (let item in target) {
    // item: 对象(key)， 数组(index)
    let value = target[item]
    if (checkoutType(value) === 'Object' || 'Array') {
      result[item] = clone(value)
    } else {
      result[item] = value
    }
  }
  return result
}

