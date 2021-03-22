
/**
 * instanceof的实现原理就是只要右边变量的prototype在左边变量的原型链上即可
 * instanceof在查找的过程中会遍历左边变量的原型链，直到找到右边变量的prototype
 * 如果查找失败，则会返回false
 * 
 * 用于判断引用类型属于哪个构造函数的方法
 * A instanceof B 
 * 如果B函数的显示原型对象在A对象的原型链上，返回true,否则返回false
 */

function newInstanceof(leftValue, rightValue) {
  // 获取类型的原型
  let rightProto = rightValue.prototype
  // 获取对象的原型
  leftValue = leftValue.__proto__
  // 判断对象的类型是否等于类型的原型
  while (true) {
    if (leftValue === rightProto) {
      return true
    }
    if (leftValue === null) {
      return false
    }
    leftValue = leftValue.__proto__
  }
}

/**
 * var a={}其实是 var a=new Object()的语法糖
 * var a=[]其实是var a=new Array()的语法糖
 * function Foo(){...}其实是var Foo=new Function()
 */

var obj = {}
var arr = []
function fn() { }

// 所有的引用类型(数组，对象，函数)，都有一个__proto__属性，属性值是一个普通的对象
console.log(obj.__proto__)
console.log(arr.__proto__)
console.log(fn.__proto__)

// 所有的函数，都有一个prototype属性，属性值也是一个普通的对象
console.log(fn.prototype)

// 所有的引用类型(数组，对象，函数)的__proto__属性值指向它的构造函数的prototype属性值
obj.__proto__ === Object.prototype // true
arr.__proto__ === Array.prototype  // true
fn.__proto__ === Function.prototype // true

Object.prototype instanceof Object //false
Function.prototype instanceof Object //true
// 所有函数都是Function实例（包含Function）
Function.__proto__ === Function.prototype//true

// 首先Object应该是一个实例对象，那么Object其实相当于就是function Object(){} 即var Object = new Function()
function Foo() {
}

Object instanceof Object // true
Function instanceof Function // true
Function instanceof Object // true
Foo instanceof Foo // false
Foo instanceof Object // true
Foo instanceof Function // true



