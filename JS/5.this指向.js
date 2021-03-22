// 题1
/**
 * object.getNameFunc()()这句话相当于
 * function(){return this.name}() 
 * 所以this指向window
 */
var name = "The Window"
var object = {
  name: "My Object",
  getNameFunc: function () {
    return function () {
      return this.name
    }
  },
}
console.log(object.getNameFunc()()) // The Window

//题2
/**
 * 首先调用getNameFunc这个函数 这个函数中的this看其以什么方式调用
 * 所以该函数里面的this指向object2 因为将this赋值给了that 
 * 所以that也指向object2，所以输出My Object
 */
var name2 = "The Window"
var object2 = {
  name2: "My Object",
  getNameFunc: function () {
    var that = this
    return function () {
      return that.name2
    }
  },
}
console.log(object2.getNameFunc()()) // My Object

// 箭头函数的this
btn1.onclick = function () {
  console.log(this); // btn1对象
}

btn2.onclick = () => console.log(this); // window

/**
 * btn2.onclick调用因为是箭头函数，所以this看它的外层函数，外层是test函数，test函数是常规函数，它的this看该函数是以什么方式调用的，obj.test()，是obj调用的，所以test中的this指向obj，那么btn2.onclick中的this也指向obj
 */
let obj = {
  username: 'kobe',
  test: function () { // this ---> obj
    btn2.onclick = () => console.log(this) // obj
  }
}
obj.test()

let Person = () => this.name = 'kobe'
let person1 = new Person()


// 题3
// 先给window加一个id，以便于确认之后this的指向
window.id = 0;
// 声明一个函数fn
const fn = {
  id: 1,
  say: function () {
    console.log('id:', this.id)
  },
  sayArrow: () => {
    console.log('id:', this.id)
  },
  say1: function () {
    setTimeout(function () {
      console.log('id:', this.id)
    }, 1000)
  },
  say2: function () {
    let that = this;
    setTimeout(function () {
      console.log('id:', that.id)
    }, 1000)
  },
  say3: function () {
    setTimeout(() => {
      console.log('id:', this.id)
    }, 1000)
  },
  say4: () => {
    setTimeout(() => {
      console.log('id:', this.id)
    }, 1000)
  },
  say5: () => {
    setTimeout(function () {
      console.log('id:', this.id)
    }, 1000)
  },
}

fn.say() // 1
fn.sayArrow() // 0
setTimeout(fn.say, 1000) // 0
setTimeout(fn.sayArrow, 1000) // 0
setTimeout(() => fn.say(), 1000) // 1
setTimeout(() => fn.sayArrow(), 1000) // 0
fn.say1() // 0
fn.say2() // 1
fn.say3() // 1
fn.say4() // 0
fn.say5() // 0
