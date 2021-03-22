// call
/**
 * 改变了 this 指向，让新的对象可以执行该函数。那么思路
 * 可以变成给新的对象添加一个函数，然后在执行完以后删除
 */

Function.prototype.myCall = function (obj) {
  let context = obj || window
  // 给con添加一个属性 this是myCall前面的函数
  // getValue.call(a, 'yck', '24') => a.fn = getValue
  context.fn = this
  // [...arguments]将arguments这个类数组转换成真正的数组
  const arr = [...arguments].slice(1)
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
  let res = context.fn(...arr)
  delete context.fn
  return res
}

// Fn.call(obj,1,2) 相当于 obj.Fn(1,2)
Function.prototype.call = function (obj, ...args) {
  // 处理obj是undefined或者null的情况
  if (obj === undefined || obj === null) {
    obj = window
  }
  // 给obj添加一个方法 Fn:this
  obj.Fn = this
  // 调用obj的Fn方法，传入args参数，得到返回值
  const result = obj.Fn(...args)
  // 删除obj上的Fn方法
  delete obj.Fn
  // 返回方法的返回值
  return result
}



Function.prototype.myApply = function (obj) {
  let context = obj || window
  context.fn = this
  const arr = arguments[1]
  let res = arr ? context.fn(...arr) : context.fn()
  delete context.fn
  return res
}

Function.prototype.apply = function (obj, args) {
  // 处理obj是undefined或者null的情况
  if (obj === undefined || obj === null) {
    obj = window
  }
  // 给obj添加一个方法 Fn:this
  obj.Fn = this
  // 调用obj的Fn方法，传入args参数，得到返回值
  const result = obj.Fn(...args)
  // 删除obj上的Fn方法
  delete obj.Fn
  // 返回方法的返回值
  return result
}

Function.prototype.bind = function (obj, ...args) {
  return (...args2) => {
    // 调用原来函数 指定this为obj 参数列表为args和args2依次组成
    return this.call(obj, ...args, ...args2)
  }
}

let person = {
  name: "jayChou"
};

let say = function () {
  console.log(this.name);
}

say.myCall(person);  // jayChou