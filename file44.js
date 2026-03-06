function singHappyBirthday() {
    console.log("happy Birthday Rahat to you.....");
}
// singHappyBirthday(); // function call
/*function sumTwoNumbers(number1, number2){
    // console.log(2+4);
    return number1 + number2;

}
// console.log(sumTwoNumbers());
const returnValue = sumTwoNumbers(4, 5);
console.log(returnValue);*/


function sumThreeNumbers(number1, number2, number3) {
    // console.log(2+4);
    return number1 + number2 + number3;

}
// console.log(sumThreeNumbers());
// const returnValue = sumThreeNumbers(4, 5, 4);
// console.log(returnValue);

// Is even
// input: 1 number
// output: true,false
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
console.log(isEven(9));
// short form the function

console.log(10 % 2 == 0);

// function 
// input : string 
// output : firstchactor
function firstchactor(anyString) {
    return anyString[0];
}
console.log(firstchactor("Rbc"));

// function
// input: array,target (number)
// output: index of target if target present in arry
function findTarget(array, target){
    for(let  i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    } return -1;
}
const myArray = [1,2,3,4,4];
const ans = findTarget(myArray, 6);
console.log(ans);