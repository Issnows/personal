
// var str='' 
// console.log(Array.isArray(str))

// var strs=[1,2,2,2]
// console.log(Array.isArray(strs))

//判断是否为数组
// function isArray(arr){
//     return Array.isArray(arr)
// }

// //判断是否为函数

// function isFunction(func){
//     return (typeof(func)==='function')
// }
// console.log(isFunction(isArray))

// // 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
function cloneObject(src){
    var temp;
    if(Array.isArray(src)){
        temp=[]
        for(var i=0;i<src.length;i++){ 
            console.log(i);
            console.log(src[i])
            // console.log(temp[i])
            temp[i]=cloneObject(src[i]) 
           
        }
    }
    else if(typeof(src)==='object'){
        temp={}
        for(var i in src){
            console.log(i);
            console.log(src[i])
            // console.log(temp[i])
            temp[i]=cloneObject(src[i])
        }
    }
    else{
        console.log(src);
        temp=src
    }
    return temp
}
// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"




// var teacher={
//     name:'忘忧大师',
//     age:60,
//     gf:['心魔引','金刚']
// }
// console.log(teacher.gf[1]);


// var number=2
// var str='abc'
// var obj={
//     a:1,
//     b:'hello'
// }

// console.log(typeof(number)) //number
// console.log(typeof(str)) //string
// console.log(typeof(obj)) //object

// function isay(arr){
//     // var strr=arr.toString()
//     // console.log(strr)
//     console.log(arr)
// }
// isay(strs)

// function isFunction(fn){
//     return fn instanceof Function
// }


// function isArray(arr){
//     return arr instanceof Array
// }

// function isObject(arr){
//     return arr instanceof Object
// }
// var gongfu=['心魔引','金刚']
// var gongfu=new Array()
// gongfu=[]


// var teacher={
//     name:'忘忧大师',
//     age:60,
//     gf:['心魔引','金刚']
// }

// console.log(isArray(gongfu));//true
// console.log(isArray(teacher));//false

// console.log(isObject(gongfu));//true
// console.log(isObject(teacher));//true


// console.log(isObject(isArray));//true



// console.log(isFunction(isArray));//true
