// 题1
var A = function () {

}
console.log(A.prototype.n) // undefined
A.prototype.n = 1
console.log(A.prototype) // { n: 1 }

var b = new A()

A.prototype = {
  n: 2,
  m: 3
}

var c = new A()
// 实例化b的时候是在A.prototype指向没有改变的时候，所以b.n会等于1. 但是实例化b的时候，A.prototype的指向发生了改变
console.log(b.n, b.m, c.n, c.m) // 1 undefined 2 3


// 题2
var F = function () { }; // 函数对象
Object.prototype.a = function () {
  console.log('a()')
};
Function.prototype.b = function () {
  console.log('b()')
};
var f = new F(); 
// f的隐式原型对象 == F的显示原型对象 === {constructor}
f.a() 
// f.b() 往上查找的时候是在F.prototype上查找 不是Function.prototype上查找 要注意！
// 函数对象, 当把函数当做对象看待的时候，这个时候其构造函数应该是Function
F.a() 
F.b()
