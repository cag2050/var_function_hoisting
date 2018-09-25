// 只有函数声明才有函数提升。
console.log(func1)
console.log(func2)

// 函数声明
function func1() {
}

// 函数字面量
var func2 = function () {
}

/*
 以上代码等价于：
 `
 function func1 () {
 }
 console.log(func1)
 console.log(func2)
 var func2 = function () {
 }
 `
 */