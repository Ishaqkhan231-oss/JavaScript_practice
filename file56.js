// important array methods

// forEcah 
// Map 
// filter 
// reduce 
/*
const numbers = [4,2,5,8,];
function multiplyBy2(number, index){
    console.log("index is ", index);
    console.log(`${number}*2 = ${number*2}`);
}
// multiplyBy2(numbers[0], 0); // for single element
 
for(let i = 0; i< numbers.length; i++){
    multiplyBy2(numbers[i], i)
}
*/
// ---> sam func as above 
const numbers = [4,2,5,8,];
function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`);
    // console.log(`${number}*2 = ${number*2}`);
}
// multiplyBy2(numbers[0], 0); // for single element
 
// for(let i = 0; i< numbers.length; i++){
//     myFunc(numbers[i], i)
// }

// numbers.forEach(function(number, index){
//  console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number){
//     console.log(number*2);
// });

const users = [
    {firstName: "Rahat", age:19},
    {firstName: "Ishaq", age:20},
    {firstName: "Rahat", age:19},
    {firstName: "Ishaq", age:20}
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

users.forEach((users, index) => {
    console.log(users.firstName, index);
})

// for(let user of users){
//     console.log(user.firstName);
// }
