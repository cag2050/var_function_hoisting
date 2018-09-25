// 同名的函数声明和变量声明,重复的函数声明会覆盖前面的函数声明
console.log(a)
a()

var a = '3'

function a() {
    console.log(10)
}

function a() {
    console.log(20)
}

/*
    以上代码等价于：
    var a = '3' 这行变量声明被忽略
    `
     function a() {
        console.log(20)
     }
     console.log(a)
     a()
    `
 */

