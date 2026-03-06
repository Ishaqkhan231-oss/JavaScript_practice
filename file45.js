// function expression
// function singHappyBirthday(){
//     console.log("happy birth day to you... Rahat");
// }
const singHappyBirthday = function(){
    console.log("happy birth day to you... Rahat");
}
singHappyBirthday();
// ---->
// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// function expression 
const sumThreeNumbers =  function (number1, number2, number3){
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(4,5,3);
console.log(ans);
// ---->
// function isEven(number){
//     return number % 2 === 0;
// }

const isEven = function(number){
    return number % 2 === 0;
}
console.log(isEven(2));
// ---->
// function firstchactor(anyString){
//     return anyString[0];
// }

const firstchactor = function(anyString){
    return anyString[0];
}
// firstchactor();
// ---->
function findTarget(array, target){
    for(let  i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    } return -1;
}

const findTarget = function (array, target){
    for(let  i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    } return -1;
}