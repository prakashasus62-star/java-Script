// let student = {
//     name: "prkash",
//     age: 22,
//     // proprties and values;
// }
// console.log(typeof student);
// // for of loop
// let fruits = ["apple", "bananna", "grapes"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }
// for in loop
// for (let key in student){
//     console.log(key);
//     console.log(student[key]);
// }
// for each loop mainly araa
// syntax]
// array.forEach(function(value,index)){
//     console.log(value);
//     console.log(index);
// }
// let nums =[1,2,3,4,5,];
// nums.forEach(function(num,index){
//     console.log(num,index);
// })
// const add = function (a,b){
//     return a + b;
// }
// console.log(add(2,3));
// // anonyums function
// arrow function
// const add = (a,b) =>{
//     return a+b
// }
// setTimeout(() => {
//     console.log(add(2,3));
// }, 1000);
// function greet(name="guest"){
//     console.log("hello"+name);
// }
// console.log(greet());

// function greet(name){
//     console.log("hello "+name);
// }
// function sample(callback){
//     callback("pk");
// }
// sample(greet);
// function that take another function as return another function is higher order function;
// function add(a,b){
//     return a+b;
// }
// function calculate(a,b,operation){
//     return oeration(a,b);
// }
// console.log(calculate(2,3,add));(
// function that take another function as argument is higher order function;
// clousure
// // A ACLOSURE HAPPENS WHEN AN INNER FUNCTION REMEMBERS VARIBALES FROM ITS OUTER FUNDCTION EVEN OFTER THE  OUTER FUNCTION HAS FINISHED EXCUTING;
// function outer(){
//     let count =0;
//     return function inner(){
//         count++;
//         console.log(count);
//     }
// }
// const counter = outer();
// counter();
// counter();
// // Array methods
// let num=[1,2,3,4,5];
// let doubled =num.map(function(num){
//     return num*2;
// })
// console.log(doubled);
// let even =[1,2,3,45,6];
// let odd =even.map(function(num){
//     if(num%2!=0){
//         return num;
//     }
// })
// console.log(odd);
// // 
// let even =[1,2,3,45,6];
// let odd =even.filter(function(num){
//     if(num%2!=0){
//         return num;
//     }
// })
// console.log(odd);
// FIND METHOD
// only satisfy the condition it will return the first elementy
// let even =[1,2,3,45,6];
// let odd =even.find(function(num){
//     if(num%2!=0){
//         return num;
//     }
// })
// console.log(odd);
// reduce method
// let num=[1,2,3,4];
// let sum=num.reduce(function(acc,cur){
//     return acc+cur;

// },0);
// console.log(sum);
// let num=[1,2,3,4];
// let product=num.reduce(function(acc,cur){
//     return acc*cur;
// },1);
// console.log(product);
// some method
// let num=[1,2,3,4];
// let hasEven=num.some(function(num){
//     return num %2==0;
// })
// console.log(hasEven);
// every method
// let num=[1,2,3,4];
// let hasEven=num.every(function(num){
//     return num %2==0;
// })
// console.log(hasEven);
// push(),pop(),shift(),unshift(),slice(),splice(),
// splice(),sort(),reverse().

// let prakash = {
//     name: "prakash",
//     age:22
// }
// let {name,age}=prakash;
// console.log(name);
// console.log(age);
// E6 concepts
// Template literals
// let a=10;
// let b=20;
// console.log(`the sum of ${a} and ${b} is ${a+b}`);
// aray destructuring
// let fruits =["apple","bananna","grapes"]
// let [n,n1,n2]=fruits;
// console.log(n,n1,n2);
// spread operator[...]
// array combain is easy 
// let arr1=[1,2,3];
// let arr2=[...arr1,4,5];
// console.log(arr2);
// let arr3=[...arr1,...arr2];
// console.log(arr3);
// object copy
// let person ={
//     name:"prkash",
//     age:22
// }
// let copyperson={...person
// };
// console.log(copyperson);

// rest operator
// function sum(...numbers){
//     let sum=0;
//     for(let num of numbers){
//         sum=+num;
//     }
//     return sum;
// }
// console.log(sum(1,2,3,4,5));
// import { pi, add } from "./hello.js";

// console.log(pi);
// console.log(add(2, 3));
