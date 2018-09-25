// 同名的函数声明，Javascript采用的是覆盖原则，先声明的会被覆盖，因为函数在声明时会指定函数的内容，所以同一作用域下一系列同名函数声明的最终结果是调用时函数的内容和最后一次函数声明相同
console.log(func1)
func1()

function func1() {
    console.log(10)
}

function func1() {
    console.log(20)
}

/*
 以上代码等价于：
 `
 function func1() {
    console.log(10)
 }
 function func1() {
    console.log(20)
 }
 console.log(func1)
 func1()
 `
 */