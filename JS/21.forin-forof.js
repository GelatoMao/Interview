let aArray = ['a', 123, { a: '1', b: '2' }]

// for in
for (let index in aArray) {
  console.log(`${aArray[index]}`)
}
/**
 * a
 * 123
 * [object Object]
 */

// for of
for (let value of aArray) {
  console.log(value)
}
/**
 * a
 * 123
 * { a: '1', b: '2' }
 */

aArray.name = 'haha'

for (let index in aArray) {
  console.log(`${aArray[index]}`)
}
/**
 * for in 会遍历自定义属性
 * a
 * 123
 * [object Object]
 * haha
 */

for (let value of aArray) {
  console.log(value)
}
/**
 * a
 * 123
 * { a: '1', b: '2' }
 */

//  想用for...of来遍历普通对象的属性的话，可以通过和Object.keys()搭配使用，先获取对象的所有key的数组

var student = {
  name: 'haha',
  age: 22,
  locate: {
    country: 'china',
    city: 'lala',
    school: '---'
  }
}
for (var key of Object.keys(student)) {
  //使用Object.keys()方法获取对象key的数组
  console.log(key + ": " + student[key]);
}
