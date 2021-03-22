let arr = [1, 2, 3]

// 产生一个每个元素都比原来大10的数组
console.log(arr.map((item, index) => item + 10))

// 得到所有奇数的和
console.log(arr.reduce((preTotal, item, index) => preTotal + (item % 2 === 1 ? item : 0), 0))
