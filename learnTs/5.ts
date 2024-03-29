/**
 * 联合类型
 * （Union Types）表示取值可以为多种类型中的一种。
 * 联合类型使用 | 分隔每个类型
 **/
let myFavoriteNumber: string | number;
myFavoriteNumber = 123;
console.log(typeof myFavoriteNumber);
console.log(myFavoriteNumber);
//这里的 let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。
console.log('=============================================');
// let myFavoriteNumber1: string | number;
// myFavoriteNumber1 = true;
// console.log(typeof myFavoriteNumber1);
// console.log(myFavoriteNumber1);
//访问联合类型的属性或方法
//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型

export {};