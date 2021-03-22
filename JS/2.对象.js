// 题1 
/**
 * 对象中所有的key都是字符串
 * obj1和obj2调用toString之后都是相同的值 都是[object Object]
 * 所以a[obj1]和a[obj2]相当于是操作的同一个属性值
 */
var a = {}
var obj1 = { n: 2 }
var obj2 = { m: 3 }
a[obj1] = 4
a[obj2] = 5
console.log(a[obj1]) // 5

console.log(obj1.toString()) // '[object Object]'
console.log(obj2.toString()) // '[object Object]'