function deepClone(obj) {
  let newObj = obj instanceof Array ? [] : {}
  for (let item in obj) {
    let temp = typeof item === 'object' ? deepClone(obj[item]) : obj[item]
    newObj[item] = temp
  }
  return newObj
}

let myAjax = function (url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.send(data)
    xhr.onreadystatechange = function () {
      if (xhr.status === 200 && xhr.readyState === 4) {
        let json = JSON.parse(xhr.responseText)
        resolve(json)
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        reject('error')
      }
    }
  })
}

for (let i = 0; i < 5; i++) {

}


const array = [{ aim: '上班', count: '88' }, { aim: '下班', count: '99' }]
const obj = {...array}
console.log(obj)

