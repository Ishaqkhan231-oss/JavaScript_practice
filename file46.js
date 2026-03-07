// arrow functions
 // this is function expression  <<---
// const singHappyBirthday = function(){
//     console.log("happy birth day to you...");
// }
// arrow functions  <<---
const singHappyBirthday =  () => {
    console.log("happy birth day to you...");
}
singHappyBirthday();
 
// arrow functions  <<---
const sumThreeNumbers =  (number1, number2, number3) => {
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(4,0,3);
console.log(ans);
 
// arrow functions  <<---
// const isEven =  (number) => {
//     return number % 2 === 0;
// }
// console.log(isEven(5));
// we can write the above function
const isEven =  number => number % 2 === 0;
console.log(isEven(5));
 
// arrow functions  <<---
// const firstchactor =  (anyString) => {
//     return anyString[0];
// }
// arrow functions  <<---
const firstchactor = anyString =>  anyString[0];
console.log(firstchactor("Rahat"));


 // arrow functions  <<---
const findTarget =   (array, target)=> {
    for(let  i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    } return -1;
}