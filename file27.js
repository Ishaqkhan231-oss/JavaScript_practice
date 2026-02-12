// arrya push / pop
// array shift / unshift

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push ----> adding in last
//  fruits.push("banana");
//  console.log(fruits);
// pop and push are fast as compared to shift and unshift
// fruits.pop();
// pop will give the item of an Array
// as a  retuen after removel 
// let pooppedFruits = fruits.pop();
// console.log("popped fruits is = ", pooppedFruits);
// console.log(fruits);
// to remove a specific element
// console.log(fruits[1]);

// unshift -->to add in start 
// fruits.unshift("banana","cherry");
// console.log(fruits);
// shift --> removeing from the start
let removedFruits = fruits.shift();
console.log(fruits);
console.log("Removed fruit is =",removedFruits);