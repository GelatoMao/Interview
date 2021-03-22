/**
 * 只能继承构造函数的属性,无法继承原型属性
 * 每个新实例都有父类构造函数的副本
 * 每个实例都是重新实例化构造函数,不存在共享属性
 * 可以通过Parent.call(this,params)传递参数到父类构造函数
 */

function Person(name) {
  this.name = name;
  this.friends = ["hello"];
}
Person.prototype.gender = "男";

function Child(name) {
  Person.call(this, name);
  this.age = 12;
}

const child = new Child('haha');
child.friends.push("world");
console.log(child.name, "child"); // haha child
// 原型属性无法继承访问
console.log(child.gender, "child"); // undefined child
console.log(child.friends, "child"); // [ 'hello', 'world' ] child

const child2 = new Child('hehe');
console.log(child2.name, "child2"); // hehe child2
console.log(child2.friends, "child2"); // [ 'hello' ] child2

