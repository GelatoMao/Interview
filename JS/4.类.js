class Person {
  // 静态资源修饰符，使用static可以给 类对象自身添加属性
  static num = 123;
  // 类的构造方法 里面定义的属性和方法都是加在实例对象上的
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // 类的一般方法
  /**
   * showInfo中不能直接打印出name和age, 必须加this的原因
   * 直接打印name和age，相当于是将name和age作为变量来使用，调用
   * showInfo的时候，首先会在函数当前作用域里面查找，找不到去外层作
   * 用域，注意外层作用域应该是全局作用域，因为showInfo上面没有函数
   * 嵌套，类不是一个函数，而全局作用域中没有这两个变量，所以直接报错
   */
  showInfo() {
    console.log(this.name, this.age)
    // console.log(name, age) 这种方法不对
  }
}

// 定义子类
// 回顾原型继承：子类的原型 成为 父类的实例
// 子类的构造函数.prototype = new 父类的构造函数()
class Child extends Person {
  // 子类的原型成为父类的实例
  constructor(name, age, gender) {
    // super做的事情：1. 调用父类的构造方法，2. 改变父类构造方法的this指向为子类的实例
    super(name, age) // super调用父类的构造方法
    this.gender = gender
  }
  //  父类的方法重写：当父类原型的方法不能满足子类实例需求的时候
  showInfo() {
    console.log(this.name, this.age, this.gender)
  }
}

// 之前的继承方式
function Person1(name, age) {
  this.name = name
  this.age = age
}
Person1.prototype.showInfo = function () {
  console.log(this.name, this.age)
}

// 子类的原型成为父类的实例
Child1.prototype = new Person1()
Child1.prototype.constructor = Child1
function Child1(name, age, sex) {
  // this.name = name;
  // this.age = age;
  Person1.call(this, name, age) // 借用构造函数继承
  this.sex = sex
}
