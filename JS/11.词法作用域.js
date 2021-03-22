/**
 * 1. 作用域分类：
 *  1. 静态作用域(词法作用域):  JavaScript
 *  2. 动态作用域:  bash
 * 2. 特征对比：
 *  1. 词法作用域规定作用域在代码定义的时候就决定了，而不是看调用的时候
 *  2. 动态作用域是在代码执行的时候决定的
 * 
 * 考点： 词法作用域规则
 * 重点： 词法作用域中的作用域在代码定义的时候决定而不是调用的时候决定
 */

// 题1
var scope1 = "global scope";
function checkScope1() {
  var scope1 = "local scope";
  function fn() {
    return scope1;
  }
  return fn(); 
}
console.log(checkScope1()); // local scope

// 题2
var scope2 = "global scope";
function checkScope2() {
  var scope2 = "local scope";
  function fn() {
    return scope2;
  }
  return fn;
}
console.log(checkScope2()()); // local scope