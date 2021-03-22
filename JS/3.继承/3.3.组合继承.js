/**
 * 优点：原型链继承和构造函数继承优点的结合，是JS中最常用的继承模
 * 式。使用原型链实现对原型属性和方法的继承,通过借用构造函数来实现
 * 对实例属性的继承
 * 缺点：调用两次父类构造函数
 */

function Person(name) {
  this.name = name;
  this.colors = ["red"];
}
Person.prototype.gender = "男";

function Child(name) {
  // 继承实例属性，第一次调用父类构造函数
  Person.call(this, name);
}
// 改变原型指向 不传值 继承父类原型属性和方法 第二次调用父类构造函数
Child.prototype = new Person();

const child = new Child("live");
child.colors.push("blue"); 
console.log(child.name, "child"); // live child
console.log(child.colors, "child"); // [ 'red', 'blue' ] child
console.log(child.gender); // 男

const child2 = new Child("lily");
child2.colors.push("yellow");
console.log(child2.name, "child2"); // lily child2
console.log(child2.colors, "child2"); // [ 'red', 'yellow' ] child2
console.log(child2.gender); // 男

