// ͬ���ĺ��������ͱ������������õ��Ǻ���ԭ������������ʱ������������������������֮ǰ����������һ���ᱻ���ԣ����Խ���Ǻ���������Ч
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
    ���ϴ���ȼ��ڣ�
    var a = '3' ���б�������������
    `
     function a() {
        console.log(10)
     }
     console.log(a)
     a()
     a = 6
     console.log(a)
     a() // ����TypeError: a is not a function
    `
 */

