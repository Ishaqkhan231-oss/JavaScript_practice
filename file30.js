// for loop in array 

let fruits = ["apple","mango","grapes","banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }
// most imp property of array is (length )
// console.log(fruits.length);
// console.log(fruits[2]);
// // to find last index 
// console.log(fruits[fruits.length-1]);
let fruits2 = [];
for(let i = 0; i< fruits.length;i++){
    fruits2.push (fruits[i].toUpperCase());
} 

console.log(fruits2);