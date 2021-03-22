// 题1
var fn = function () {
  console.log(fn) // [Function: fn]
}
fn()

// 题2
/**
 * 这题一定要注意 在function函数的内部首先查找fn2
 * 在函数作用域内找不到，就到他的上级作用域中查找，但是注意js中只有函数作用域和全局作用域，obj是一个对象，不存在所谓的作用域，所以fn2函数的上级作用域是全局作用域，而全局作用中并没有fn2变量，fn2变量只是obj对象的一个属性，所以会报错
 */
var obj = {
  fn2: function () {
    console.log(fn2) //fn2 is not defined
  }
}
obj.fn2()

