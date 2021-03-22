/**
 * 所有实例共享父类实例属性,引用属性被修改时,所有都会被改
 * 可以获得父构造函数以及原型属性
 * 无法像父类传参
 * 原型链继承时,当原型链属性修改,其他实例化的对象也会修改
 */

function Person() {
  this.name = "live";
  this.friends = ["hello"];
}

Person.prototype.gender = "女";

function Child() {
  this.age = 12;
}
Child.prototype = new Person();

const child = new Child()
child.friends.push("world");
// 可以继承父类构造函数的属性
console.log(child.name, "child");  // live child
// 可以继承原型上的属性
console.log(child.gender, "child");  // 女 child
console.log(child.friends, "child"); // [ 'hello', 'world' ] child
// 原型链属性被修改
Person.prototype.gender = "男";
// 实例化的对象同步被修改 
console.log(child.gender);  // 男


const child2 = new Child()
// 引用属性共享
console.log(child2.friends, "child2");  // [ 'hello', 'world' ] child2
console.log(child2.gender) // 男
