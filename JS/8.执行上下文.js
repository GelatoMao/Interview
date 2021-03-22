// 题1 
// 先预处理函数, 后预处理变量, 如果已经存在就会被忽略
console.log(typeof a) // function
var a
function a() { }

// 题2
/**
 * 这段代码运行在浏览器中 因为JS中没有块极作用域 所以在if语句中声明的var b = 1 会进行变量提升 所以b是undefined b也是window的一个属性 if循环不会进入 b没有被重新赋值
 */
console.log(b) // undefined
if (!(b in window)) {
  var b = 1
}
console.log(b) // undefined

// 题3
var c = 1
function c(c) {
  console.log(c)
  var c = 3
}
console.log(c)  // 1
c(2) // 因为c被赋值为1 所以c(2)会直接报错 c is not a function

// 题4
// 具名的函数表达式，名称标识符在赋值之前也无法在所在作用域中使用
foo()
bar()
var foo = function () { }

// 该代码经过变量提升后 变成以下形式
var foo
foo() //TypeError
bar() //ReferenceError
foo = function () {
  var bar = xxx
}

// 题5 
// 重复的var 声明会被忽略掉 但是出现在后面的函数声明还是可以覆盖前面的
foo() // 3
function foo() {
  console.log(1)
}
var foo = function () {
  console.log(2)
}

function foo() {
  console.log(3)
}
foo() // 2


