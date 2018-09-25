// 同名的变量声明，Javascript采用的是忽略原则，后声明的会被忽略，变量声明和赋值操作可以写在一起，但是只有声明会被提升，提升后变量的值默认为undefined，结果是在赋值操作执行前变量的值一定为undefined

console.log(a)
var a
var a // 后声明的会被忽略

/*
 以上代码等价于
 `
 var a
 console.log(a)
 `
 */
