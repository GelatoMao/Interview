// 1.解构赋值
let obj1 = { username: 'haha', age: 18 }
// 利用函数的形参解构 实参
function fun({ username, age }) {
  // let 形参变量 = 实参
  // let {username, age} = {username:'kobe', age: 43}
  console.log(username) // haha
  console.log(age) // 18
}
fun(obj1)

// 2.简化对象写法
/**
 * 省略同名的属性值
 * 省略方法的function
 */

// 常规写法
let username = 'haha'
let age = 18
let obj = {
  username: username,
  age: age,
  showName: function () {
    console.log(this.username)
  }
}

// 简写方式
let username = 'haha'
let age = 18
let obj = {
  username,  // 同名的属性可省略 ---> key 和value一样的时候
  age,
  showName() { // 省略函数的function，冒号
    console.log(this.username)
  }
}

// 3.字符串扩展
/**
 * 1. includes(str) : 判断是否包含指定的字符串
 * 2. startsWith(str) : 判断是否以指定字符串开头
 * 3. endsWith(str) : 判断是否以指定字符串结尾
 * 4. repeat(count) : 重复指定次数
 */

// 4.数组扩展
/**
 * Array.from(v) : 将伪数组对象或可遍历对象转换为真数组
 * Array.of(v1, v2, v3) : 将一系列值转换成数组
 * find(function(value, index, arr){return true}) : 找出第
 * 一个满足条件返回true的元素
 * findIndex(function(value, index, arr){return true}) : 
 * 找出第一个满足条件返回true的元素下标
 */


// 5. Set Map
/**
 * 1. Set容器 : 无序不可重复的多个value的集合体
  * Set()
  * Set(array)
  * add(value)
  * delete(value)
  * has(value)
  * clear()
  * size
  * 2. Map容器 : 无序的 key不重复的多个key-value的集合体
  * Map()
  * Map(array)
  * set(key, value)//添加
  * get(key)
  * delete(key)
  * has(key)
  * clear()
  * size
 */

// 6. for-of遍历
/**
 * for(let value of target){} 循环遍历
 * 1. 遍历数组
 * 2. 遍历Set
 * 3. 遍历Map
 * 4. 遍历字符串
 * 5. 遍历伪数组
 */
