// 同名的函数声明和变量声明，采用的是忽略原则，由于在提升时函数声明会提升到变量声明之前，变量声明一定会被忽略，所以结果是函数声明有效
console.log(a)
a()

var a = '3'

function a() {
    console.log(10)
}
a = 6
console.log(a)
a()

/*
    以上代码等价于：
    var a = '3' 这行变量声明被忽略
    `
     function a() {
        console.log(10)
     }
     console.log(a)
     a()
     a = 6
     console.log(a)
     a() // 报错：TypeError: a is not a function
    `
 */

