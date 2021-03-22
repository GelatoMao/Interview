/**
 * 核心是将父类的原型赋值给了子类，并且将构造函数设置为子类，这样既解决了
 * 无用的父类属性问题，还能正确的找到子类的构造函数。 
 */
// function Parent(name) {
//   this.name = name
// }
// Parent.prototype.fn = function () {
//   console.log(this.name);
// }
// function Child(name, age) {
//   Parent.call(this, name);
//   this.age = age;
// }
// function object(o) {
//   function F() { };
//   F.prototype = o;
//   return new F();
// }
// function prototype(child, parent) {
//   let prototype = object(parent.prototype);
//   prototype.constructor = child;
//   child.prototype = prototype;
// }
// prototype(Child, Parent);
// let child = new Child('zhangsan', '12')
// child.fn();  //zhangsan

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.sayName = function () {
  console.log('名字是:', this.name)
}

function Student(name, age, grade) {
  // 借用父类构造函数
  Person.call(this, name, age) // 相当于 this.Person(name,age)
  this.grade = grade
}

// 创建一个指定原型对象的任意类型的实例
function create(proto){
  function Fn(){

  }
  Fn.prototype = proto
  return new Fn()
}

// 让Student原型对象是Person的实例
Student.prototype = create(Person.prototype)
// 让新的原型的constructor指向子类型Student
Student.prototype.constructor = Student
// 给新的原型对象添加方法
Student.prototype.showGrade = function () {
  console.log('成绩是', this.grade)
}

const s = new Student('tom', 23, 100)
console.log(s.name, s.age, s.grade) // tom 23 100
s.sayName() // 名字是: tom
s.showGrade() // 成绩是 100
