// filter methd 
// Finding even number
const numbers = [1,3,2,6,4,8];

// const isEven = function(number){
//     return number % 2 ===0;
// }
// const evernNumber = numbers.filter(isEven);
// console.log(evernNumber);

// // Finding odd number  <---
// const isOdd = function(number){
//     return number % 2 !==0;
// }
// const oddnNumber = numbers.filter(isOdd);
// console.log(oddnNumber);

// Finding even number <---
// by arrow function 

// const evernNumber = numbers.filter((number)=>{
//     return number % 2 ===0;
// });
// console.log(evernNumber);


const oddnNumber = numbers.filter((number)=>{
    return number % 2 !==0;
});
console.log(oddnNumber);